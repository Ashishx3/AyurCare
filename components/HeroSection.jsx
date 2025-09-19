"use client";
import React from "react";
import "@/styles/lang.css";
import { motion } from "framer-motion";
import { FaLeaf, FaBrain, FaHeartbeat, FaSpa } from "react-icons/fa";
import {useRouter} from "next/navigation";
const HeroSection = () => {
const router = useRouter(); 

  const handleDoshaQuiz=() => {
    router.push("/AiDoshaQuiz")

  }
  const features = [
    {
      icon: <FaBrain className="text-purple-600 text-3xl" />,
      title: "AI Dosha Quiz",
      desc: "Find your unique body constitution in minutes.",
    },
    {
      icon: <FaHeartbeat className="text-red-500 text-3xl" />,
      title: "Personalized Wellness",
      desc: "Tailored therapies for your health journey.",
    },
    {
      icon: <FaSpa className="text-green-500 text-3xl" />,
      title: "Holistic Healing",
      desc: "Blending Ayurveda with modern science.",
    },
  ];

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50 px-6 md:px-16">
      {/* Background Glow */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* Left Side */}
        <div className="text-center md:text-left relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r py-2 from-purple-700 via-indigo-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide"
          >
            Ayur Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed mx-auto md:mx-0"
          >
            Empowering health with the blend of{" "}
            <span className="font-semibold text-purple-600">Modern Science</span>{" "}
            ✨ and <span className="font-semibold text-green-600">Ayurveda 🌿</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex justify-center md:justify-start space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDoshaQuiz}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transition font-semibold"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-400 text-purple-700 rounded-xl shadow-md hover:bg-purple-50 transition font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side → Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition"
            >
              <div className="flex-shrink-0">{f.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lang / Leaf */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-6 left-6 flex items-center space-x-2 text-gray-700 lang"
      >
        <FaLeaf className="text-green-500 animate-bounce" />
        <span className="font-medium">lang</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
