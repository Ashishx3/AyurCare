// components/Footer.jsx
"use client"
import { Heart, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-md">
            <Leaf className="text-white" size={20} />
          </div>
          <span className="font-semibold text-lg tracking-wide">
            AyurCare
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <a href="/" className="hover:text-purple-200 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-purple-200 transition-colors">
            About
          </a>
          <a href="/services" className="hover:text-purple-200 transition-colors">
            Services
          </a>
          <a href="/contact" className="hover:text-purple-200 transition-colors">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-purple-100 flex items-center gap-1">
          © {new Date().getFullYear()} AyurCare · Built with
          <Heart size={14} className="text-pink-300 inline-block ml-1" />
        </div>
      </div>
    </footer>
  );
}
