import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SmokeIntro() {
  const canvasRef = useRef(null);

  // Typewriter state
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hoàng Quân The Dev";

  // Update canvas size on resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let smokes = [];

    function addSmoke(x, y) {
      smokes.push({
        x,
        y,
        radius: 8,
        alpha: 0.3,
        driftX: (Math.random() - 0.5) * 1,
        driftY: -Math.random() * 0.6 - 0.3,
      });
    }

    function draw() {
      ctx.fillStyle = "#0a0e14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      smokes.forEach((smoke, i) => {
        smoke.x += smoke.driftX;
        smoke.y += smoke.driftY;
        smoke.radius += 0.5;
        smoke.alpha -= 0.002;

        if (smoke.alpha <= 0) {
          smokes.splice(i, 1);
        } else {
          const grad = ctx.createRadialGradient(
            smoke.x,
            smoke.y,
            smoke.radius * 0.4,
            smoke.x,
            smoke.y,
            smoke.radius
          );
          grad.addColorStop(0, `rgba(255,255,255,${smoke.alpha})`);
          grad.addColorStop(1, `rgba(255,255,255,0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(smoke.x, smoke.y, smoke.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleMouseMove = (e) => {
      addSmoke(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cột chữ + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center">
        {/* Typewriter Text */}
        <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic leading-tight">
          {displayedText}
        </p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.999 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="
            relative px-8 sm:px-10 md:px-12 py-3 sm:py-4
            text-base sm:text-lg md:text-xl
            text-white font-semibold
            rounded-full
            bg-gradient-to-br from-white/40 to-white/10
            backdrop-blur-xl
            border border-white/30
            transition-all duration-300
            shadow-[0_0_25px_rgba(255,255,255,0.8)]
            hover:scale-105
            cursor-pointer
          "
        >
          Enter Portfolio
        </motion.button>
      </div>
    </div>
  );
}
