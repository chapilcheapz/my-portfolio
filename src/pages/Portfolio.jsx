import React, { useEffect, useRef, useState } from 'react';
import Card3D from '../components/Portfolio/Card3D'
import CircuitBackground from '../components/Portfolio/CircuitBackground'
import Container from '../lib/liquid-glass/container'
import Button from '../lib/liquid-glass/button'
import '../lib/liquid-glass/glass.css'

export default function Portfolio() {
  const menuRef = useRef(null);
  
  // State phục vụ cho Demo Ý tưởng 1: Typewriter Effect
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

  useEffect(() => {
    if (!menuRef.current) return;
    
    // Xóa mọi phần tử cũ (nếu có) để tránh lặp lại khi render trong React.StrictMode
    menuRef.current.innerHTML = '';

    // Định nghĩa cấu hình glassControls giống hệt trang demo gốc để có hiệu ứng kính lỏng tốt nhất
    window.glassControls = {
      edgeIntensity: 0.01,
      rimIntensity: 0.05,
      baseIntensity: 0.01,
      edgeDistance: 0.15,
      rimDistance: 0.8,
      baseDistance: 0.1,
      cornerBoost: 0.02,
      rippleEffect: 0.1,
      blurRadius: 5.0
    };

    const container = new Container({ type: 'pill', tintOpacity: 0.15, borderRadius: 18 });
    
    // Hàm cuộn mượt mà đến section tương ứng
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const btn1 = new Button({ text: 'Trang Chủ', type: 'pill', size: 16, tintOpacity: 0.15, onClick: () => scrollToSection('home') });
    const btn2 = new Button({ text: 'Dự Án', type: 'pill', size: 16, tintOpacity: 0.15, onClick: () => scrollToSection('projects') });
    const btn3 = new Button({ text: 'Kỹ Năng', type: 'pill', size: 16, tintOpacity: 0.15, onClick: () => scrollToSection('skills') });
    const btn4 = new Button({ text: '✉', type: 'circle', size: 16, tintOpacity: 0.2, onClick: () => scrollToSection('contact') });

    container.addChild(btn1);
    container.addChild(btn2);
    container.addChild(btn3);
    container.addChild(btn4);

    menuRef.current.appendChild(container.element);

    const buttons = [
      { id: 'home', btn: btn1 },
      { id: 'projects', btn: btn2 },
      { id: 'skills', btn: btn3 },
      { id: 'contact', btn: btn4 }
    ];

    // Hàm theo dõi Scroll Spy cập nhật active class trực tiếp trên DOM
    const handleScrollSpy = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      let activeId = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Nếu phần tử chiếm 1/3 viewport phía trên
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            activeId = id;
            break;
          }
        }
      }

      buttons.forEach(item => {
        if (item.id === activeId) {
          item.btn.element.classList.add('active');
        } else {
          item.btn.element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    // Chạy thiết lập ban đầu
    handleScrollSpy();

    return () => {
      // Dọn dẹp DOM khi unmount
      if (menuRef.current && container.element) {
        menuRef.current.innerHTML = '';
      }
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      <CircuitBackground />
      
      {/* Section 1: Trang Chủ */}
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
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
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

      {/* Section 2: Dự Án */}
      <div id="projects" className="min-h-screen flex items-center justify-center relative z-10 p-12 bg-black/45 border-t border-white/5">
        <div className="max-w-4xl w-full space-y-8">
          <h2 className="text-3xl font-bold text-cyan-400 font-mono tracking-wider border-b border-white/10 pb-4"># DỰ ÁN NỔI BẬT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 space-y-4 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">E-Commerce Microservices</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Hệ thống phân tán xây dựng bằng NestJS, Kafka và PostgreSQL. Xử lý hơn 10k orders/phút.</p>
              <div className="flex gap-2">
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded-full font-mono">TypeScript</span>
                <span className="text-[10px] bg-teal-500/20 text-teal-400 px-2.5 py-1 rounded-full font-mono">Kafka</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2.5 py-1 rounded-full font-mono">Postgres</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 space-y-4 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">High-Speed Realtime Chat</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Ứng dụng nhắn tin thời gian thực cực nhanh, hỗ trợ mã hóa end-to-end và tối ưu hóa hàng đợi qua Redis.</p>
              <div className="flex gap-2">
                <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2.5 py-1 rounded-full font-mono">Golang</span>
                <span className="text-[10px] bg-teal-500/20 text-teal-400 px-2.5 py-1 rounded-full font-mono">WebSockets</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2.5 py-1 rounded-full font-mono">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Kỹ Năng */}
      <div id="skills" className="min-h-screen flex items-center justify-center relative z-10 p-12 bg-black/55 border-t border-white/5">
        <div className="max-w-4xl w-full space-y-8">
          <h2 className="text-3xl font-bold text-teal-400 font-mono tracking-wider border-b border-white/10 pb-4"># KỸ NĂNG CỐT LÕI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-md hover:border-teal-400/30 transition duration-300">
              <div className="text-3xl mb-2">💻</div>
              <div className="font-bold text-sm text-white">Node.js / Go</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-md hover:border-teal-400/30 transition duration-300">
              <div className="text-3xl mb-2">🗄️</div>
              <div className="font-bold text-sm text-white">Postgres / Mongo</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-md hover:border-teal-400/30 transition duration-300">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-sm text-white">Redis Cache</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-md hover:border-teal-400/30 transition duration-300">
              <div className="text-3xl mb-2">🐳</div>
              <div className="font-bold text-sm text-white">Docker / K8s</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Liên Hệ & Thống kê */}
      <div id="contact" className="min-h-screen flex flex-col justify-between relative z-10 bg-black/80 border-t border-white/5 pt-24 pb-12 px-6 md:px-12">
        {/* Phần Thống Kê (Stats) */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-3 gap-4 md:gap-8 text-center py-12">
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-5xl md:text-7xl font-light text-white tracking-tight">1+</span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 uppercase mt-3">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-5xl md:text-7xl font-light text-white tracking-tight">15+</span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 uppercase mt-3">Projects Done</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-5xl md:text-7xl font-light text-white tracking-tight">100%</span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 uppercase mt-3">Satisfied Clients</span>
          </div>
        </div>

        {/* Phần Chữ Chạy Nền (Marquee) */}
        <div className="relative overflow-hidden w-full py-8 md:py-12 select-none pointer-events-none border-y border-white/[0.08] my-auto">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            <div className="text-5xl md:text-7xl lg:text-8xl font-serif italic uppercase text-white/[0.08] tracking-widest pr-4">
              Building The Future • Building The Future • Building The Future • Building The Future •&nbsp;
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-serif italic uppercase text-white/[0.08] tracking-widest pr-4">
              Building The Future • Building The Future • Building The Future • Building The Future •&nbsp;
            </div>
          </div>
        </div>

        {/* Phần Nút Liên Hệ & Footer */}
        <div className="w-full max-w-5xl mx-auto text-center mt-auto">
          <div className="flex flex-col items-center space-y-6 pb-16">
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 uppercase">Get in touch</span>
            <a 
              href="mailto:hoangquan.dev@gmail.com" 
              className="inline-flex items-center space-x-3 bg-white/[0.02] border border-white/10 px-8 py-3.5 rounded-full text-sm font-mono text-gray-300 hover:text-white hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-md group pointer-events-auto"
            >
              <span>hquan12323@gmail.com</span>
              <span className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex space-x-6 pointer-events-auto">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 hover:text-white transition uppercase">Facebook</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 hover:text-white transition uppercase">GitHub</a>
            </div>
            
            {/* Status */}
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500">Available for projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation Menu (Liquid Glass) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto" ref={menuRef}>
      </div>
    </div>

    // viết ở đây 



  );
}

