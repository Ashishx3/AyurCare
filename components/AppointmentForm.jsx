"use client";

import React, { useState, useCallback } from "react";
import { Calendar, Clock, User, UserCircle2, CheckCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { addAppointment } from "@/app/redux/slice";
import { useRouter } from "next/navigation";

// ---------- constants ----------
const DOCTORS = ["Dr. Sharma", "Dr. Iyer", "Dr. Mehta"];
const THERAPIES = ["🌿 Panchakarma", "💆 Ayurvedic Massage", "🧘 Detox", "✨ Rejuvenation"];
const CENTERS = ["AyurCare Downtown", "AyurCare Midtown", "AyurCare Riverside"];
const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

// ---------- Input component ----------
const Input = React.memo(
  React.forwardRef(({ icon: Icon, value, onChange, className = "", ...props }, ref) => {
    return (
      <div
        className={
          "flex items-center bg-white/80 border border-purple-200 rounded-xl px-3 shadow-sm focus-within:ring-2 focus-within:ring-purple-400 transition " +
          className
        }
      >
        {Icon && <Icon className="w-5 h-5 text-purple-400" />}
        <input
          {...props}
          ref={ref}
          value={value}
          onChange={onChange}
          autoComplete="off"
          spellCheck="false"
          className="w-full bg-transparent px-3 py-3 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    );
  })
);
Input.displayName = "Input";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    doctor: "",
    date: "",
    time: "",
    therapy: "",
    center: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      dispatch(addAppointment(form));
      setTimeout(() => {
        router.push("/patient/dashboard");
      }, 1200);
    },
    [dispatch, form, router]
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-10">
        <CheckCircle className="w-16 h-16 text-purple-600 animate-bounce mb-4" />
        <h2 className="text-2xl font-bold text-purple-700">Appointment Scheduled Successfully!</h2>
        <p className="text-gray-500 mt-2">Redirecting you to your dashboard...</p>
        <div className="mt-6 w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 animate-fadeInUp bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-purple-700">Book Appointment</h2>
      <p className="text-gray-500 text-center">Fill in details to schedule your Ayurvedic therapy 🌿</p>

      {/* Name */}
      <Input
        icon={User}
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      {/* Age */}
      <Input
        icon={UserCircle2}
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        inputMode="numeric"
        pattern="[0-9]*"
        min="0"
        required
      />

      {/* Doctor select */}
      <select
        name="doctor"
        value={form.doctor}
        onChange={handleChange}
        required
        className="w-full bg-white/80 border border-purple-200 px-3 py-3 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-400 transition"
      >
        <option value="">-- Choose Doctor --</option>
        {DOCTORS.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      {/* Nearest Center */}
      <select
        name="center"
        value={form.center}
        onChange={handleChange}
        required
        className="w-full bg-white/80 border border-purple-200 px-3 py-3 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-400 transition"
      >
        <option value="">-- Choose Nearest Center --</option>
        {CENTERS.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div className="grid grid-cols-2 gap-4">
        <Input
          icon={Calendar}
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        {/* Fixed Time Slots */}
        <select
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full bg-white/80 border border-purple-200 px-3 py-3 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-400 transition"
        >
          <option value="">-- Choose Time Slot --</option>
          {TIME_SLOTS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Therapy select */}
      <select
        name="therapy"
        value={form.therapy}
        onChange={handleChange}
        required
        className="w-full bg-white/80 border border-purple-200 px-3 py-3 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-400 transition"
      >
        <option value="">-- Choose Therapy --</option>
        {THERAPIES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
      >
        Submit & Schedule
      </button>
    </form>
  );
}
