"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Heart, Target, Shield, Users, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Ayurvedic Excellence",
      description:
        "Blending timeless Ayurvedic wisdom with modern healthcare innovations.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Every design choice is made to enhance patient wellbeing and trust.",
    },
    {
      icon: Target,
      title: "Precision & Consistency",
      description:
        "Delivering standardized care with tools that ensure accuracy every time.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "HIPAA-compliant systems safeguard sensitive data with enterprise-grade security.",
    },
    {
      icon: Users,
      title: "Practitioner Focused",
      description:
        "Created by practitioners, crafted for daily use, and built around real workflows.",
    },
    {
      icon: Zap,
      title: "Digital Efficiency",
      description:
        "Automating the routine so practitioners can focus on healing and connection.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br mt-[5px] from-purple-50 via-white to-fuchsia-50">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Leaf size={36} className="text-white" />
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl py-2 font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-700 bg-clip-text text-transparent">
              About AyurCare
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The next-generation{" "}
              <span className="px-2 py-1 rounded-lg bg-purple-100 text-purple-700 font-semibold">
                Panchakarma patient management
              </span>{" "}
              platform — designed to empower practitioners and enrich patient
              experiences.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/90 to-purple-50 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-2xl mb-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We aim to <span className="font-semibold text-purple-700">redefine Panchakarma practice</span> by blending{" "}
                <span className="text-fuchsia-600 font-medium">
                  ancient Ayurvedic principles
                </span>{" "}
                with{" "}
                <span className="text-indigo-600 font-medium">
                  cutting-edge technology
                </span>
                . Our goal is to free practitioners from admin work, allowing
                them to focus on what truly matters —{" "}
                <span className="italic text-pink-600">
                  healing and patient wellbeing
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 p-8 flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-fuchsia-700 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                    <value.icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
