import React, { useEffect, useState } from 'react';
import Card3D from './Card3D';

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ['Backend Developer', 'System Architect', 'Database Optimizer', 'API Designer'];
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.slice(0, currentText.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div id="home" className="flex h-screen relative z-10">
      {/* Card3D Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <Card3D />
        </div>
      </div>
      
      {/* Bên trái - Slogan Content */}
      <div className="flex-1 max-w-2xl p-12 flex flex-col justify-center pointer-events-auto select-none">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Lập Trình Viên Sáng Tạo</span>
          </div>

          {/* Main Slogan */}
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Biến Mọi Ý Tưởng Thành{" "}
            <span className="font-serif italic font-light text-cyan-400">
              Hiện Thực Số
            </span>
          </h1>

          {/* Sub-slogan / Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Tôi là <span className="text-white font-medium">Hoàng Quân</span>.
            </p>
            <div className="text-2xl md:text-3xl font-bold flex items-center h-10 select-none">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent font-mono tracking-tight">
                {currentText}
              </span>
              <span className="w-1.5 h-6 bg-cyan-400 ml-1.5 animate-pulse"></span>
            </div>
            <p className="text-base text-gray-400 leading-relaxed font-light">
              Đam mê xây dựng hệ thống hiệu năng cao, tối ưu hóa cơ sở dữ liệu và thiết kế kiến trúc hệ thống tối ưu.
            </p>
          </div>
         
        </div>
      </div>

      {/* Scroll Down Indicator - Chỉ hiện ở Trang Chủ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none select-none">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold tracking-[0.2em]">Cuộn Xuống</span>
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1.5 bg-white/5 backdrop-blur-sm shadow-lg">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
