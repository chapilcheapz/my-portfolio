import React from 'react';

export default function ExperienceSection() {
  return (
    <div id="experience" className="min-h-screen flex items-center justify-center relative z-10 p-12 bg-black/50 border-t border-white/5">
      <div className="max-w-4xl w-full space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-gray-500 uppercase">
            <span className="w-8 h-[1px] bg-white/20"></span>
            <span>Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            My <span className="font-serif italic font-light text-cyan-400">Experience</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
            My professional timeline and career highlights.
          </p>
        </div>
        
        <div className="relative ml-0 space-y-12 py-4">
          {/* Đường thẳng trục dọc ở chính giữa hiển thị trên mọi thiết bị */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          {/* Mốc 1: VinUniversity (Trên cùng - Trái) */}
          <div className="relative flex flex-row justify-start group">
            {/* Điểm nút mốc - Căn giữa trục dọc */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 md:top-3 w-4.5 h-4.5 rounded-full bg-black border-2 border-emerald-400 group-hover:bg-emerald-400 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.8)] z-10"></div>
            
            <div className="space-y-2 w-[calc(50%-15px)] md:w-[calc(50%-20px)] text-right pr-6 md:pr-10">
              <span className="text-[10px] md:text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20 inline-block">Hiện Tại</span>
              <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-tight">VinUniversity (VinUni)</h3>
              <div className="text-[10px] md:text-xs font-mono text-emerald-400/80 mt-1">AI Engineer</div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                Coming soon...
              </p>
            </div>
          </div>

          {/* Mốc 2: Hisotech (Phải) */}
          <div className="relative flex flex-row justify-end group">
            {/* Điểm nút mốc - Căn giữa trục dọc */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 md:top-3 w-4.5 h-4.5 rounded-full bg-black border-2 border-cyan-400 group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10"></div>
            
            <div className="space-y-2 w-[calc(50%-15px)] md:w-[calc(50%-20px)] text-left pl-6 md:pl-10">
              <span className="text-[10px] md:text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20 inline-block">Kinh Nghiệm</span>
              <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">Hisotech</h3>
              <div className="text-[10px] md:text-xs font-mono text-cyan-400/80 mt-1">FullStack Developer</div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                Coming soon...
              </p>
            </div>
          </div>

          {/* Mốc 3: Hobasoft (Trái) */}
          <div className="relative flex flex-row justify-start group">
            {/* Điểm nút mốc - Căn giữa trục dọc */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 md:top-3 w-4.5 h-4.5 rounded-full bg-black border-2 border-indigo-400 group-hover:bg-indigo-400 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(129,140,248,0.8)] z-10"></div>
            
            <div className="space-y-2 w-[calc(50%-15px)] md:w-[calc(50%-20px)] text-right pr-6 md:pr-10">
              <span className="text-[10px] md:text-xs font-mono text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20 inline-block">Kinh Nghiệm</span>
              <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 leading-tight">Hobasoft</h3>
              <div className="text-[10px] md:text-xs font-mono text-indigo-400/80 mt-1">PHP Developer</div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                Coming soon...
              </p>
            </div>
          </div>

          {/* Mốc 4: Công ty dịch vụ số (Phải) */}
          <div className="relative flex flex-row justify-end group">
            {/* Điểm nút mốc - Căn giữa trục dọc */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 md:top-3 w-4.5 h-4.5 rounded-full bg-black border-2 border-teal-400 group-hover:bg-teal-400 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.8)] z-10"></div>
            
            <div className="space-y-2 w-[calc(50%-15px)] md:w-[calc(50%-20px)] text-left pl-6 md:pl-10">
              <span className="text-[10px] md:text-xs font-mono text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-full border border-teal-400/20 inline-block">Kinh Nghiệm</span>
              <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 leading-tight">Công Ty Dịch Vụ Số</h3>
              <div className="text-[10px] md:text-xs font-mono text-teal-400/80 mt-1">PHP Developer</div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                Coming soon...
              </p>
            </div>
          </div>

          {/* Mốc 5: Cao đẳng FPT (Dưới cùng - Trái) */}
          <div className="relative flex flex-row justify-start group">
            {/* Điểm nút mốc - Căn giữa trục dọc */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 md:top-3 w-4.5 h-4.5 rounded-full bg-black border-2 border-cyan-400 group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10"></div>
            
            <div className="space-y-2 w-[calc(50%-15px)] md:w-[calc(50%-20px)] text-right pr-6 md:pr-10">
              <span className="text-[10px] md:text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20 inline-block">Học Tập</span>
              <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">Cao Đẳng FPT (FPT Polytechnic)</h3>
              <div className="text-[10px] md:text-xs font-mono text-cyan-400/80 mt-1">Sinh Viên Ngành CNTT</div>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                Coming soon...
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
