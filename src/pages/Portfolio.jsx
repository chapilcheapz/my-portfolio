import Card3D from '../components/Card3D'
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
      {/* Card3D Overlay - có thể kéo toàn màn hình */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <Card3D />
        </div>
      </div>
      
      <div className="flex h-screen relative z-10">
        {/* Bên trái - Content */}
        <div className="flex-1 p-8 flex flex-col justify-center pointer-events-auto">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl mb-8 text-gray-300">
              Chào mừng đến với portfolio của tôi. Đây là nơi tôi showcase các dự án và kỹ năng của mình.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold">Frontend Development</h3>
                <p className="text-gray-400">React, Vue, JavaScript</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold">Backend Development</h3>
                <p className="text-gray-400">PHP (Laravel)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold">...</h3>
                <p className="text-gray-400">...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
