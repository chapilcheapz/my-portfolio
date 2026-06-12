import React, { useEffect, useRef, useState } from 'react';
import CircuitBackground from '../components/Portfolio/CircuitBackground';
import HeroSection from '../components/Portfolio/HeroSection';
import ProjectsSection from '../components/Portfolio/ProjectsSection';
import ExperienceSection from '../components/Portfolio/ExperienceSection';
import SkillsSection from '../components/Portfolio/SkillsSection';
import ContactSection from '../components/Portfolio/ContactSection';
import Container from '../lib/liquid-glass/container';
import Button from '../lib/liquid-glass/button';
import '../lib/liquid-glass/glass.css';

export default function Portfolio() {
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Lắng nghe sự kiện resize để chuyển đổi isMobile trong thời gian thực (ví dụ khi bật tắt devtools mobile emulator hoặc xoay màn hình)
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  useEffect(() => {
    if (!menuRef.current) return;

    // Reset snapshot cũ để menu kính bắt buộc chụp lại snapshot nền mới theo đúng tỉ lệ màn hình mới
    Container.pageSnapshot = null;
    
    // Xóa mọi phần tử cũ (nếu có) để tránh lặp lại khi render trong React.StrictMode hoặc khi resize chạy lại
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

    const btnFontSize = isMobile ? 12 : 15;

    const btn1 = new Button({ text: 'Trang Chủ', type: 'pill', size: btnFontSize, tintOpacity: 0.15, onClick: () => scrollToSection('home') });
    const btn2 = new Button({ text: 'Dự Án', type: 'pill', size: btnFontSize, tintOpacity: 0.15, onClick: () => scrollToSection('projects') });
    const btn3 = new Button({ text: isMobile ? 'K.Nghiệm' : 'Kinh Nghiệm', type: 'pill', size: btnFontSize, tintOpacity: 0.15, onClick: () => scrollToSection('experience') });
    const btn4 = new Button({ text: 'Kỹ Năng', type: 'pill', size: btnFontSize, tintOpacity: 0.15, onClick: () => scrollToSection('skills') });
    const btn5 = new Button({ text: '✉', type: 'circle', size: btnFontSize, tintOpacity: 0.2, onClick: () => scrollToSection('contact') });

    container.addChild(btn1);
    container.addChild(btn2);
    container.addChild(btn3);
    container.addChild(btn4);
    container.addChild(btn5);

    menuRef.current.appendChild(container.element);

    const buttons = [
      { id: 'home', btn: btn1 },
      { id: 'projects', btn: btn2 },
      { id: 'experience', btn: btn3 },
      { id: 'skills', btn: btn4 },
      { id: 'contact', btn: btn5 }
    ];

    // Hàm theo dõi Scroll Spy cập nhật active class trực tiếp trên DOM
    const handleScrollSpy = () => {
      const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
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
      // Dọn dẹp DOM khi unmount hoặc chạy lại
      if (menuRef.current && container.element) {
        menuRef.current.innerHTML = '';
      }
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen text-white relative">
      <CircuitBackground />
      
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />

      {/* Floating Navigation Menu (Liquid Glass) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto" ref={menuRef}>
      </div>
    </div>
  );
}


