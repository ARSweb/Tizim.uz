import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow">
            T
          </div>
          <span className="text-2xl font-bold">
            Tizim<span className="text-blue-600">.uz</span>
          </span>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex gap-10 text-gray-600 font-medium">
          <a className="hover:text-blue-600 cursor-pointer">Home</a>
          <a className="hover:text-blue-600 cursor-pointer">Features</a>
          <a className="hover:text-blue-600 cursor-pointer">Business Types</a>
          <a className="hover:text-blue-600 cursor-pointer">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-gray-600 font-bold hover:text-blue-600">
            Login
          </button>

          <button className="px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
            Sign Up
          </button>
        </div>

        {/* Burger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a>Home</a>
          <a>Features</a>
          <a>Business Types</a>
          <a>Pricing</a>
          <button>Login</button>
          <button className="py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}