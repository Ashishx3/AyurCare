"use client";

import AppointmentForm from "@/components/AppointmentForm";
import Header from "@/components/PatientComponents/Header";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Header />
      </div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-1 items-center justify-center p-8"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-[80%] max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex"
        >
          {/* Left Image Side */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-6">
            <Image
              src="/appointment/3.png"
              alt="Ayurveda Illustration"
              width={450}
              height={450}
              className="object-contain opacity-90 drop-shadow-md"
            />
          </div>

          {/* Right Form Side */}
          <div className="w-full lg:w-1/2 p-10">
            <AppointmentForm />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
