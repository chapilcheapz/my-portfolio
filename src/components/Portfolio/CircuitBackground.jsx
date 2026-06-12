import { useEffect, useRef } from "react";

function hexToRgb(hex) {
  if (!hex.startsWith("#")) return hex;
  let t = hex.slice(1);
  if (t.length === 3) {
    t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
  }
  const a = parseInt(t, 16);
  return `${(a >> 16) & 255}, ${(a >> 8) & 255}, ${255 & a}`;
}

export default function CircuitBackground({
  className = "",
  children,
  gridSpacing = 56,
  color = "#0ea5e9",
  accentColor = "#22d3ee",
  background = "#05060a",
  pulseCount = 12,
  speed = 1,
  density = 0.55,
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colorRgb = hexToRgb(color);
    const accentRgb = hexToRgb(accentColor);

    let width = 0;
    let height = 0;
    let lastWidth = 0;
    let lastHeight = 0;
    let dpr = 1;
    let edges = [];
    let pulses = [];
    let animId = 0;
    let isAnimating = false;
    let lastTime = 0;

    // Generate random nodes and connecting traces
    const generateGrid = () => {
      const cols = Math.max(2, Math.floor(width / gridSpacing) + 1);
      const rows = Math.max(2, Math.floor(height / gridSpacing) + 1);
      const offsetX = (width - (cols - 1) * gridSpacing) / 2;
      const offsetY = (height - (rows - 1) * gridSpacing) / 2;
      const generatedEdges = [];

      const getNodePos = (c, r) => ({
        x: offsetX + c * gridSpacing,
        y: offsetY + r * gridSpacing,
      });

      const addEdge = (points) => {
        const segLengths = [];
        let totalLength = 0;
        for (let i = 0; i < points.length - 1; i++) {
          const dx = points[i + 1].x - points[i].x;
          const dy = points[i + 1].y - points[i].y;
          const len = Math.sqrt(dx * dx + dy * dy);
          segLengths.push(len);
          totalLength += len;
        }
        if (totalLength > 0) {
          generatedEdges.push({
            points,
            length: totalLength,
            segLengths,
          });
        }
      };

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const current = getNodePos(c, r);
          
          // Connect to right neighbor
          if (c + 1 < cols && Math.random() < density) {
            addEdge([current, getNodePos(c + 1, r)]);
          }
          // Connect to bottom neighbor
          if (r + 1 < rows && Math.random() < density) {
            addEdge([current, getNodePos(c, r + 1)]);
          }
          // Add diagonal/bent traces
          if (c + 1 < cols && r + 1 < rows && Math.random() < 0.5 * density) {
            const dest = getNodePos(c + 1, r + 1);
            const intermediate = Math.random() < 0.5 ? getNodePos(c + 1, r) : getNodePos(c, r + 1);
            addEdge([current, intermediate, dest]);
          }
        }
      }
      edges = generatedEdges;
    };

    // Initialize and maintain pulses count
    const updatePulsesList = () => {
      if (edges.length === 0) {
        pulses = [];
        return;
      }
      const targetCount = Math.max(0, Math.floor(pulseCount));
      
      // Update existing pulses if their edgeIndex exceeds edges count
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        if (p.edgeIndex >= edges.length) {
          p.edgeIndex = Math.floor(Math.random() * edges.length);
          p.progress = Math.random();
        }
      }

      // Add new pulses
      while (pulses.length < targetCount) {
        pulses.push({
          edgeIndex: Math.floor(Math.random() * edges.length),
          progress: Math.random(),
          speed: 0.5 + 0.8 * Math.random(),
        });
      }

      // Remove extra pulses
      if (pulses.length > targetCount) {
        pulses.length = targetCount;
      }
    };

    // Resize canvas to match container size
    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      lastWidth = width;
      lastHeight = height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateGrid();
      updatePulsesList();
    };

    // Calculate absolute point coordinates on an edge based on progress (0 to 1)
    const getPointOnEdge = (edge, progress) => {
      let targetDist = Math.max(0, Math.min(1, progress)) * edge.length;
      for (let i = 0; i < edge.segLengths.length; i++) {
        const segLen = edge.segLengths[i];
        if (targetDist <= segLen || i === edge.segLengths.length - 1) {
          const ratio = segLen === 0 ? 0 : targetDist / segLen;
          const p1 = edge.points[i];
          const p2 = edge.points[i + 1];
          return {
            x: p1.x + (p2.x - p1.x) * ratio,
            y: p1.y + (p2.y - p1.y) * ratio,
          };
        }
        targetDist -= segLen;
      }
      return edge.points[0];
    };

    // Draw a single frame
    const draw = () => {
      // Clear with background color
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      // 1. Draw static traces (circuit board lines)
      ctx.strokeStyle = `rgba(${colorRgb}, 0.25)`;
      ctx.lineWidth = 1;
      ctx.lineCap = "square";
      ctx.lineJoin = "miter";
      ctx.beginPath();
      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const start = edge.points[0];
        ctx.moveTo(start.x, start.y);
        for (let j = 1; j < edge.points.length; j++) {
          ctx.lineTo(edge.points[j].x, edge.points[j].y);
        }
      }
      ctx.stroke();

      // 2. Draw small node dots at joints
      ctx.fillStyle = `rgba(${colorRgb}, 0.55)`;
      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        for (let j = 0; j < edge.points.length; j++) {
          const pt = edge.points[j];
          ctx.fillRect(pt.x - 1, pt.y - 1, 2, 2);
        }
      }

      // 3. Draw active pulses
      ctx.lineCap = "round";
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];
        const edge = edges[pulse.edgeIndex];
        if (edge) {
          const head = getPointOnEdge(edge, pulse.progress);
          const tail = getPointOnEdge(edge, Math.max(0, pulse.progress - 0.08));

          // Draw the fading line trace of the pulse
          ctx.strokeStyle = `rgba(${accentRgb}, 0.45)`;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          ctx.lineTo(head.x, head.y);
          ctx.stroke();

          // Draw the glowing circle head
          ctx.shadowColor = accentColor;
          ctx.shadowBlur = 10;
          ctx.fillStyle = `rgba(${accentRgb}, 1)`;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 2.2, 0, 2 * Math.PI);
          ctx.fill();
          ctx.shadowBlur = 0; // reset for subsequent drawings
        }
      }
    };

    // Update pulse positions based on time delta
    const update = (deltaTime) => {
      if (edges.length === 0) return;
      const step = 0.001 * deltaTime * speed;
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];
        const edge = edges[pulse.edgeIndex];
        if (edge) {
          // Speed is inversely proportional to segment length to normalize movement speed
          pulse.progress += (step * pulse.speed * 80) / Math.max(40, edge.length);
          if (pulse.progress >= 1) {
            pulse.edgeIndex = Math.floor(Math.random() * edges.length);
            pulse.progress = 0;
            pulse.speed = 0.5 + 0.8 * Math.random();
          }
        }
      }
    };

    // Main animation loop
    const animate = () => {
      const now = performance.now();
      const dt = lastTime === 0 ? 16 : Math.min(64, now - lastTime);
      lastTime = now;
      update(dt);
      draw();
      animId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (!isAnimating && !prefersReducedMotion) {
        isAnimating = true;
        lastTime = 0;
        animId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      isAnimating = false;
      lastTime = 0;
      cancelAnimationFrame(animId);
    };

    // Setup initial size
    resize();

    if (prefersReducedMotion) {
      draw();
    } else {
      start();
    }

    const resizeObserver = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;

      // Bỏ qua thay đổi kích thước nhỏ (co giãn URL bar trên di động)
      const widthChanged = Math.abs(newWidth - lastWidth) > 5;
      const heightChanged = Math.abs(newHeight - lastHeight) > 120;

      if (widthChanged || heightChanged) {
        stop();
        resize();
        if (prefersReducedMotion) {
          draw();
        } else {
          start();
        }
      } else {
        // Chỉ cập nhật kích thước hiển thị CSS để tránh khoảng xám ở đáy mobile
        canvas.style.width = `${newWidth}px`;
        canvas.style.height = `${newHeight}px`;
      }
    });
    resizeObserver.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [gridSpacing, color, accentColor, background, pulseCount, speed, density]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden -z-10 ${className}`}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full circuit-canvas" />
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  );
}
