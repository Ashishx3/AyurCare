"use client";

import { useState, useEffect } from "react";
import { Bell, ChevronDown, LogOut, Settings, User, Home, Calendar } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loggingOut) {
      signOut({ redirect: false });
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loggingOut, router]);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-white/70 shadow-lg px-6 py-4 flex justify-between items-center border-b border-white/20">
      {/* Logo & Navigation */}
      <div className="flex items-center gap-8">
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          onClick={() => router.push("/patient/dashboard")}
        >
          🩺 Patient Portal
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
          <Link href="/patient/dashboard" className="hover:text-indigo-600 transition">
            <Home className="inline w-5 h-5 mr-1" /> Dashboard
          </Link>
          <Link href="/patient/schedules" className="hover:text-indigo-600 transition">
            <Calendar className="inline w-5 h-5 mr-1" /> Appointments
          </Link>
          <Link href="/patient/profile" className="hover:text-indigo-600 transition">
            <User className="inline w-5 h-5 mr-1" /> Profile
          </Link>
        </nav>
      </div>

      {/* Right Side: Notifications & Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <motion.div whileTap={{ scale: 0.9 }} className="relative cursor-pointer">
          <Bell className="w-7 h-7 text-slate-700 hover:text-pink-500 transition" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-pink-500 rounded-full border border-white animate-pulse"></span>
        </motion.div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button className="flex items-center gap-2" onClick={() => setShowDropdown((prev) => !prev)}>
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-pink-400 shadow-md hover:scale-105 transition"
            />
            <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-52 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border overflow-hidden"
              >
                <Link href="/patient/profile" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-pink-50 w-full">
                  <User size={16} /> Profile
                </Link>
                <Link href="/patient/settings" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:bg-pink-50 w-full">
                  <Settings size={16} /> Settings
                </Link>
                <button
                  onClick={() => setLoggingOut(true)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 w-full"
                >
                  <LogOut size={16} /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Logging out overlay */}
      <AnimatePresence>
        {loggingOut && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg"
            >
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-pink-500 border-t-transparent"></div>
              <span className="text-slate-700 font-medium">Logging out...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
