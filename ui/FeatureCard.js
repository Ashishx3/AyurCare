"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureCard({ imgSrc, title, description, color, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative w-64 h-72 cursor-pointer rounded-2xl shadow-lg p-6 
        flex flex-col items-center justify-between bg-white
        border-t-4 border-${color}-500 overflow-hidden transition-transform
      `}
    >
      {/* Hover gradient overlay */}
      <div
        className={`
          absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 
          transition-opacity duration-500 pointer-events-none
          bg-gradient-to-br from-${color}-100 via-white to-${color}-50
        `}
      />

      {/* Image container */}
      <div className="w-20 h-20 rounded-full overflow-hidden shadow-md flex items-center justify-center bg-gray-100 relative z-10">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mt-4 z-10">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 text-center z-10">{description}</p>

      {/* Bottom colored line */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-${color}-500 rounded-b-2xl`} />
    </motion.div>
  );
}
