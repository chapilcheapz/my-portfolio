import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  // Typewriter state
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hoàng Quân The Dev";

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
    <div className="relative w-screen h-screen bg-transparent pointer-events-none">
      {/* Cột chữ + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center pointer-events-auto" style={{zIndex: 30}}>
        {/* Typewriter Text */}
        <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic leading-tight select-none">
          {displayedText}
        </p>

        {/* Progress Bar */}
        <Motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col items-center space-y-3"
        >
          <p className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
            Loading Portfolio...
          </p>
          <div className="w-64 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <Motion.div
              className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              onAnimationComplete={() => navigate('/portfolio')}
            />
          </div>
        </Motion.div>
      </div>
    </div>
  );
}
