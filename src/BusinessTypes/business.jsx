import React from "react";


function BusinessTypes() {
  return (
    <section id="section-business-types" className="py-24 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Kimlar uchun?</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Har qanday biznes uchun moslashuvchan</h3>
          <p className="text-slate-600 text-xl">Tizim.uz turli sohalardagi bizneslarning o'ziga xos ehtiyojlarini qondirish uchun ishlab chiqilgan.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {/* Card 1 */}
          <div id="card-business-retail" className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <i className="fa-solid fa-store text-2xl text-blue-600 group-hover:text-white transition-colors duration-300"></i>
            </div>

            <h4 className="font-semibold text-slate-900 mb-1">Retail Store</h4>
            <p className="text-xs text-slate-500">Do'konlar va savdo nuqtalari</p>
          </div>

          {/* Card 2 */}
          <div id="card-business-restaurant" className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
              <i className="fa-solid fa-utensils text-2xl text-orange-500 group-hover:text-white transition-colors duration-300"></i>
            </div>

            <h4 className="font-semibold text-slate-900 mb-1">Restaurant</h4>
            <p className="text-xs text-slate-500">Kafe va restoranlar</p>
          </div>

          {/* Card 3 */}
          <div id="card-business-education" className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
              <i className="fa-solid fa-graduation-cap text-2xl text-purple-600 group-hover:text-white transition-colors duration-300"></i>
            </div>

            <h4 className="font-semibold text-slate-900 mb-1">Education Center</h4>
            <p className="text-xs text-slate-500">O'quv markazlari</p>
          </div>

          {/* Card 4 */}
          <div id="card-business-hotel" className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300">
              <i className="fa-solid fa-hotel text-2xl text-teal-500 group-hover:text-white transition-colors duration-300"></i>
            </div>

            <h4 className="font-semibold text-slate-900 mb-1">Hotel</h4>
            <p className="text-xs text-slate-500">Mehmonxonalar</p>
          </div>

          {/* Card 5 */}
          <div id="card-business-fitness" className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1 col-span-2 md:col-span-1 lg:col-span-1">
            <div className="w-16 h-16 mx-auto bg-rose-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-rose-500 transition-colors duration-300">
              <i className="fa-solid fa-dumbbell text-2xl text-rose-500 group-hover:text-white transition-colors duration-300"></i>
            </div>

            <h4 className="font-semibold text-slate-900 mb-1">Fitness Gym</h4>
            <p className="text-xs text-slate-500">Sport zallari</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BusinessTypes;