"use client";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="ml-60 px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md">
      <h2 className="text-xl font-semibold text-purple-600">Welcome, Doctor 👨‍⚕️</h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
          />
        </div>
        <Bell className="w-6 h-6 text-purple-400 cursor-pointer hover:scale-110 transition" />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-purple-500"
        />
      </div>
    </header>
  );
}
