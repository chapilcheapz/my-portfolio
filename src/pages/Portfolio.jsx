import Card3D from '../components/Card3D'
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="flex h-screen">
        {/* Bên trái - Content */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl mb-8 text-gray-300">
              Chào mừng đến với portfolio của tôi. Đây là nơi tôi showcase các dự án và kỹ năng của mình.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold">Frontend Development</h3>
                <p className="text-gray-400">React, Vue, JavaScript, TypeScript</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold">Backend Development</h3>
                <p className="text-gray-400">Node.js, Python, Database</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold">3D Graphics</h3>
                <p className="text-gray-400">Three.js, WebGL, 3D Animation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bên phải - Card3D */}
        <div className="flex-1">
          <Card3D />
        </div>
      </div>
    </div>
  );
}
