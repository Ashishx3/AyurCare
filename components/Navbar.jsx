"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Therapies", href: "/therapies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-600/60 via-pink-500/60 to-purple-400/60 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/"
            className="text-white font-extrabold text-2xl tracking-wide drop-shadow-lg transition duration-300 hover:text-pink-200"
          >
            AyurCare<span className="text-pink-300">+</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 font-sans">
            {navItems.map((item) => (
            //   <Link
            //     key={item.name}
            //     href={item.href}
            //     className="text-white/90 hover:text-white hover:underline transition-colors duration-300 font-medium"
            //   >
            //     {item.name}
            //   </Link>
            <Link
      key={item.name}
      href={item.href}
      className="relative  text-[#ffffff] hover:text-[#FF5C8D] transition duration-300 group"
    >
      {item.name}
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF5C8D] transition-all duration-300 group-hover:w-full"></span>
    </Link>
            ))}
            <Link
              href="/login"
              className="bg-white/80 text-purple-700 px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-white hover:scale-105 transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-pink-500/80 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-pink-400 hover:scale-105 transition duration-300"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-purple-700/70 backdrop-blur-lg px-4 pb-4 space-y-3 font-sans">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-white/90 hover:text-pink-200 font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block bg-white/80 text-purple-700 px-4 py-2 rounded-xl font-semibold text-center shadow-md hover:bg-white hover:scale-105 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="block bg-pink-500/80 text-white px-4 py-2 rounded-xl font-semibold text-center shadow-md hover:bg-pink-400 hover:scale-105 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
