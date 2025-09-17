"use client";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
    <header className="backdrop-blur-md bg-white/70 shadow-md p-5 flex justify-between items-center sticky top-0 z-20 rounded-b-2xl">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
        🩺 Doctor Dashboard
      </h1>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative">
          <Bell className="w-7 h-7 text-slate-700 cursor-pointer hover:text-pink-500 transition" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className="relative">
          <img
            src={session?.user?.image || "/default-avatar.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-pink-400 cursor-pointer hover:scale-105 transition"
            onClick={() => setShowDropdown((prev) => !prev)}
          />

          {showDropdown && (
            <div className="absolute right-0 mt-3 w-48 bg-white/90 shadow-xl rounded-2xl border overflow-hidden animate-fadeIn">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-pink-50">
                👤 Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-pink-50">
                ⚙️ Settings
              </button>
              <button
                onClick={() => setLoggingOut(true)}
                className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-pink-50"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {loggingOut && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
          <span className="ml-4 text-white text-lg">Logging out...</span>
        </div>
      )}
    </header>
  );
}
