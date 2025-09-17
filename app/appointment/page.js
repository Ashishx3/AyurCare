"use client";

import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 
      p-8">
      
      <div className="w-[80%] max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        
        {/* Left Image Side */}
        <div 
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center transition-all duration-500" 
          style={{ backgroundImage: "url('/images/ayurveda.jpg')" }} 
        />

        {/* Right Form Side */}
        <div className="w-full lg:w-1/2 p-10">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
