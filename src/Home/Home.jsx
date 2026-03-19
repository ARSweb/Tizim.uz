import DashboardPreview from "./DashboardPreviev";

export default function Home() {
  return (
    <section className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Yangi versiya 2.0 qabul qilindi
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Biznesingizni <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              tizimli boshqaring
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg">
            Barcha biznes jarayonlaringizni bitta platformada boshqaring —
            moliya, xodimlar, analiz va hisobotlar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl">
              Start Free 30 Days →
            </button>

            <button className="px-8 py-4 text-lg font-semibold rounded-full border bg-white hover:bg-gray-50 flex items-center justify-center gap-2">
              <i className="fa-solid fa-play px-2 text-blue-500 border-[3px] border-blue-500 rounded-full"></i> View Demo
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            1000+ biznes egalari ishonchi
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}