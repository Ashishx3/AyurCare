"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  description,
  status = "Ready to use",
  color = "green",
  onClick,
}) {
  const colorMap = {
    green: {
      border: "border-green-400",
      bar: "bg-green-400",
      hover: "hover:shadow-green-300/60",
    },
    pink: {
      border: "border-pink-400",
      bar: "bg-pink-400",
      hover: "hover:shadow-pink-300/60",
    },
    blue: {
      border: "border-blue-400",
      bar: "bg-blue-400",
      hover: "hover:shadow-blue-300/60",
    },
  };

  return (
    <motion.div
    onClick={onClick}
      whileHover={{ scale: 1.08 }} // stronger hover scale
      className={`relative flex flex-col justify-between w-72 p-6 rounded-3xl bg-white shadow-md border ${colorMap[color].border} transition-all duration-300 ${colorMap[color].hover} overflow-hidden`}
    >
      {/* Top section */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100">
          {icon}
        </div>
        <ArrowRight className="text-gray-500" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 w-full h-1.5 rounded-full overflow-hidden">
        <div className={`h-full w-full ${colorMap[color].bar}`} />
      </div>

      {/* Status */}
      <p className="mt-3 text-xs text-gray-500">{status}</p>
    </motion.div>
  );
}
