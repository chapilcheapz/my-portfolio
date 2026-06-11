import Card3D from '../components/Portfolio/Card3D'
import CircuitBackground from '../components/Portfolio/CircuitBackground'

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white relative">
      <CircuitBackground />
      {/* Card3D Overlay - có thể kéo toàn màn hình */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <Card3D />
        </div>
      </div>
      
      <div className="flex h-screen relative z-10">
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
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Tôi là <span className="text-white font-medium">Hoàng Quân</span>. Đam mê kiến tạo những trải nghiệm số mượt mà, tương tác trực quan và giải pháp công nghệ tối ưu.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
