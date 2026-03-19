export default function DashboardPreview() {
  return (
    <div className="relative scale-110 max-w-lg ml-auto">
      
      <div className="rounded-2xl bg-white border shadow-xl overflow-hidden transform hover:rotate-0 transition duration-700 lg:rotate-y-[-5deg] lg:rotate-x-[5deg]">
        
        {/* Header */}
        <div className="h-12 border-b flex items-center px-4 justify-between bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="w-24 h-3 bg-gray-200 rounded"></div>
        </div>

        {/* Body */}
        <div className="p-6 flex gap-6">
          
          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex text-gray-500 justify-center items-center">
                <i className="fa-solid fa-chart-pie"></i>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex text-gray-500 justify-center items-center">
                <i className="fa-solid fa-users"></i>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex text-gray-500 justify-center items-center">
                <i className="fa-solid fa-chalkboard-user"></i>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex text-gray-500 justify-center items-center">
                <i className="fa-solid fa-wallet"></i>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            
            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-xl border">
                <p className="text-xs text-gray-500">Daromad</p>
                <p className="font-bold">45,200,000 UZS</p>
                <span className="flex text-sm text-green-500 gap-1">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <p>+2,43%</p>
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border">
                <p className="text-xs text-gray-500">Mijozlar</p>
                <p className="font-bold">1,248</p>
                <span className="flex text-sm text-green-500 gap-1">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <p>+2,43%</p>
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="h-32 flex items-end gap-2">
              <div className="w-full h-[40%] bg-blue-200 rounded"></div>
              <div className="w-full h-[60%] bg-blue-300 rounded"></div>
              <div className="w-full h-[45%] bg-blue-400 rounded"></div>
              <div className="w-full h-[80%] bg-blue-500 rounded"></div>
              <div className="w-full h-[65%] bg-blue-600 rounded"></div>
              <div className="w-full h-[95%] bg-indigo-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating */}
      <div className="absolute -right-6 top-1/3 bg-white p-3 rounded-xl shadow animate-bounce">
        <p className="text-xs text-gray-500">To'lov qabul qilindi</p>
        <p className="font-bold text-sm">+450,000 UZS</p>
      </div>
    </div>
  );
}