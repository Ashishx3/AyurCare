"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-lg border-t border-white/20 px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-slate-700">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            🩺 Patient Portal
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted portal for managing appointments, tracking health records, and connecting with doctors easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/patient/dashboard" className="hover:text-indigo-600 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/patient/schedules" className="hover:text-indigo-600 transition">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/patient/profile" className="hover:text-indigo-600 transition">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/patient/settings" className="hover:text-indigo-600 transition">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@patientportal.com</p>
          <p className="text-sm mt-1">Phone: +91 9876543210</p>
          <p className="text-sm mt-1">Address: 123 Health St, Wellness City</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-pink-500 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Patient Portal. All rights reserved.
      </div>
    </footer>
  );
}
