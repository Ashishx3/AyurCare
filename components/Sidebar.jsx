    "use client";
import { Home, Users, Calendar, Activity, Bell, Settings } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Patients", icon: Users, href: "/patients" },
  { name: "Appointments", icon: Calendar, href: "/appointments" },
  { name: "Therapies", icon: Activity, href: "/therapies" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-white/10 backdrop-blur-lg border-r border-white/20 shadow-xl p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-purple-600 mb-6">AyurSutra</h1>
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-2 rounded-lg text-white hover:bg-purple-500/30 transition"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
