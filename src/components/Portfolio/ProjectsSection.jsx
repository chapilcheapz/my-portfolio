import React from 'react';

export default function ProjectsSection() {
  return (
    <div id="projects" className="min-h-screen flex items-center justify-center relative z-10 p-12 bg-black/45 border-t border-white/5">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-gray-500 uppercase">
            <span className="w-8 h-[1px] bg-white/20"></span>
            <span>Creations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            My <span className="font-serif italic font-light text-cyan-400">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
            A curation of digital products and backend architectures.
          </p>
        </div>
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
  );
}
