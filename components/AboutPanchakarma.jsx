  "use client";
  import React, { useState } from "react";
  import "@/styles/fonts.css";
  import Navbar from "@/components/Navbar";
  import Image from "next/image";
  import { motion } from "framer-motion";

  const Panchakarma = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const therapies = [
      { title: "Vamana", desc: "Therapeutic vomiting for removing toxins from the stomach and lungs.", img: "/therapies/vamana.png" },
      { title: "Virechana", desc: "Purgation therapy for detoxifying the liver and intestines.", img: "/therapies/virechana.png" },
      { title: "Basti", desc: "Medicated enema therapy to balance Vata and cleanse the colon.", img: "/therapies/4.jpg" },
      { title: "Nasya", desc: "Nasal therapy for clearing sinuses, enhancing brain function, and improving breathing.", img: "/therapies/5.jpg" },
      { title: "Raktamokshana", desc: "Blood purification therapy for skin diseases and toxin removal.", img: "/therapies/3.jpg" },
    ];

    const fadeUp = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
    };

    return (
      <div
        className="relative flex flex-col w-screen min-h-screen overflow-hidden"
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/therapies/a.jpg" // 🔥 replace with your Ayurveda bg image
            alt="Ayurveda Background"
            fill
            className="object-cover object-center brightness-90"
          />
        </div>

        {/* Glassmorphic Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

        {/* Interactive Floating Blob */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-3xl"
          animate={{ x: mousePos.x / 10, y: mousePos.y / 10 }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        ></motion.div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />

          {/* Hero Section */}
          <section className="text-center py-24 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-6xl HeadingPanch font-extrabold bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide"
            >
              About Panchakarma
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="mt-6 text-lg md:text-xl text-gray-800 max-w-3xl mx-auto"
            >
              Panchakarma is the ancient Ayurvedic practice of{" "}
              <span className="font-semibold text-purple-700">cleansing, detoxification, and rejuvenation</span>. 
              At <span className="font-semibold text-indigo-600">Ayur Care</span>, our therapies restore balance, strengthen immunity, 
              and support holistic recovery.
            </motion.p>
          </section>

          {/* Therapies */}
          <section className="px-6 md:px-16 py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Panchakarma Therapies 
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {therapies.map((therapy, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.07 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:shadow-xl transition"
                >
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={therapy.img}
                      alt={therapy.title}
                      fill
                      className="object-cover rounded-full border border-gray-300 shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    {therapy.title}
                  </h3>
                  <p className="text-gray-600">{therapy.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };

  export default Panchakarma;
