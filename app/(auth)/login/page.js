"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Stethoscope, Shield, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import CubePopup from "@/components/LoadingCube"; // 👈 import

export default function Login() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("User");
  const [showPopup, setShowPopup] = useState(false); // 👈 state
  const router = useRouter();

  const profiles = [
    { name: "User", icon: User },
    { name: "Doctor", icon: Stethoscope },
    { name: "Admin", icon: Shield },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setShowPopup(true); // 👈 popup dikhao

    setTimeout(() => {
      setShowPopup(false); // hide after 2 sec
      if (selectedProfile === "User") {
        router.push("/patient/dashboard");
      } else if (selectedProfile === "Doctor") {
        router.push("/doctor/dashboard");
      } else {
        router.push("/admin/dashboard");
      }
    }, 2000);
  };

  return (
    <>
      <Navbar />
      {showPopup && <CubePopup />} {/* 👈 popup render */}

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-purple-100"
          >
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Login to AyurCare
            </h1>

            {/* Profile Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2 bg-gray-100 rounded-xl p-1">
                {profiles.map((profile) => (
                  <motion.button
                    key={profile.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProfile(profile.name)}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
                      selectedProfile === profile.name
                        ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white"
                        : "text-gray-600 hover:bg-purple-50"
                    }`}
                  >
                    <profile.icon className="w-5 h-5" />
                    {profile.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder={`Enter ${selectedProfile.toLowerCase()} email`}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-600 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                  minLength={3}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Login as {selectedProfile}
              </motion.button>
            </form>
          </motion.div>
        </section>
      </div>
    </>
  );
}
