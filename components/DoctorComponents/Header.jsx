"use client";
import { useState, useEffect, useRef } from "react";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logout
  useEffect(() => {
    if (loggingOut) {
      signOut({ redirect: false });
      const timer = setTimeout(() => router.push("/"), 2000);
      return () => clearTimeout(timer);
    }
  }, [loggingOut, router]);

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-8 py-4 bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-indigo-700 drop-shadow-sm">
        🩺 Doctor Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell className="w-7 h-7 text-gray-700 hover:text-indigo-600 transition-colors" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold shadow">
            3
          </span>
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow hover:scale-105 transition-transform"
            />
            <ChevronDown
              className={`w-4 h-4 text-gray-700 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-56 bg-white/90 backdrop-blur-md text-gray-800 rounded-2xl shadow-xl border overflow-hidden z-50"
              >
                <button
                  onClick={() => router.push("/doctor/profile")}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm hover:bg-indigo-50 transition"
                >
                  <User className="w-4 h-4 text-indigo-600" /> Profile
                </button>
                <button
                  onClick={() => router.push("/doctor/settings")}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm hover:bg-indigo-50 transition"
                >
                  <Settings className="w-4 h-4 text-indigo-600" /> Settings
                </button>
                <button
                  onClick={() => setLoggingOut(true)}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut className="w-4 h-4" /> Logout
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center gap-4"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
              <span className="text-gray-800 text-lg font-semibold">
                Logging out...
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
