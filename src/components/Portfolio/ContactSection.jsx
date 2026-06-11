import React from 'react';

export default function ContactSection() {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-between relative z-10 bg-black/80 border-t border-white/5 pt-24 pb-8 px-6 md:px-12">
      {/* Phần Thống Kê (Stats) */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-3 gap-4 md:gap-8 text-center py-8">
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

      {/* Phần Center gồm Marquee và Nút Liên Hệ */}
      <div className="w-full flex flex-col items-center space-y-12 my-auto">
        {/* Phần Chữ Chạy Nền (Marquee) */}
        <div className="relative overflow-hidden w-full py-6 md:py-8 select-none pointer-events-none border-y border-white/[0.08]">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            <div className="text-5xl md:text-7xl lg:text-8xl font-serif italic uppercase text-white/[0.08] tracking-widest pr-4">
              Building The Future • Building The Future • Building The Future • Building The Future •&nbsp;
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-serif italic uppercase text-white/[0.08] tracking-widest pr-4">
              Building The Future • Building The Future • Building The Future • Building The Future •&nbsp;
            </div>
          </div>
        </div>

        {/* Phần Nút Liên Hệ */}
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-gray-500 uppercase">Get in touch</span>
          <a 
            href="mailto:hoangquan.dev@gmail.com" 
            className="inline-flex items-center space-x-3 bg-white/[0.02] border border-white/10 px-8 py-3.5 rounded-full text-sm font-mono text-gray-300 hover:text-white hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-md group pointer-events-auto"
          >
            <span>hquan12323@gmail.com</span>
            <span className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full max-w-5xl mx-auto text-center mt-auto pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
  );
}
