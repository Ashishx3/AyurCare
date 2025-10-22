import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/app/redux/providers";
import { ProvidersAuth } from "@/components/ProvidersAuth";

// Load fonts with CSS variables for consistency
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// --- METADATA ---
export const metadata = {
  title: "AyurCare - Patient Management & Therapy Scheduling System",
  description:
    "AyurCare is a modern patient management and therapy scheduling platform built for Ayurvedic clinics. Easily manage patients, schedule therapies, track progress, and enhance treatment efficiency.",
  keywords: [
    "AyurCare",
    "Ayurvedic clinic software",
    "patient management system",
    "therapy scheduling",
    "healthcare management app",
    "clinic appointment system",
    "Ayurveda software",
  ],
  authors: [{ name: "AyurCare Team" }],
  creator: "AyurCare",
  publisher: "AyurCare",
  openGraph: {
    title: "AyurCare - Simplify Patient Management & Therapy Scheduling",
    description:
      "A smart, intuitive web platform for managing Ayurvedic patients and therapy sessions with ease.",
    url: "https://ayurcare01.vercel.app",
    siteName: "AyurCare",
    images: [
      {
        url: "https://ayurcare01.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AyurCare Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// --- ROOT LAYOUT ---
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300`}
      >
        <ProvidersAuth>
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </ProvidersAuth>
      </body>
    </html>
  );
}
