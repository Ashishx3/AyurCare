"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            🌿 AyurCare
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted portal for holistic wellness. Track therapies, manage appointments, and connect with Ayurvedic practitioners.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/patient/schedules" className="hover:text-yellow-300 transition">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/patient/profile" className="hover:text-yellow-300 transition">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/patient/settings" className="hover:text-yellow-300 transition">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@ayurcare.com</p>
          <p className="text-sm mt-1">Phone: +91 9876543210</p>
          <p className="text-sm mt-1">Address: 123 Health St, Wellness City</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <Link href="#" className="hover:text-yellow-300 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-yellow-100 text-sm">
        &copy; {new Date().getFullYear()} AyurCare. All rights reserved.
      </div>
    </footer>
  );
}
