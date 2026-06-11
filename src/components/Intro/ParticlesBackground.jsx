import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Load particles.js từ public folder
    const script = document.createElement("script");
    script.src = "/particles.js";
    script.onload = () => {
      // Đợi một chút để đảm bảo DOM đã ready
      setTimeout(() => {
        const element = document.getElementById("particles-js");
        
        if (window.particlesJS && element) {
          window.particlesJS("particles-js", {
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#60a5fa"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                }
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.5,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 120,
                color: "#ffffff",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 300,
                  line_linked: {
                    opacity: 0.8
                  }
                },
                bubble: {
                  distance: 250,
                  size: 12,
                  duration: 0.5,
                  opacity: 1,
                  speed: 3
                },
                repulse: {
                  distance: 100,
                  duration: 0.2,
                  speed: 0.5
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          });
        }
      }, 100);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        pointerEvents: "auto",
      }}
    />
  );
};

export default ParticlesBackground;

