"use client";

import { useState } from "react";
import { Calendar, Clock, User, UserCircle2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { addAppointment } from "@/app/redux/slice";
import { useRouter } from "next/navigation";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    doctor: "",
    date: "",
    time: "",
    therapy: ""
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const doctors = ["Dr. Sharma", "Dr. Iyer", "Dr. Mehta"];
  const therapies = ["🌿 Panchakarma", "💆 Ayurvedic Massage", "🧘 Detox", "✨ Rejuvenation"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAppointment(formData));
    router.push("/patient/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Book Appointment</h2>
      <p className="text-gray-500 text-center mb-6">Fill the details to schedule your therapy</p>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <div className="flex items-center bg-gray-50 border rounded-lg px-3">
          <User className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full bg-transparent px-3 py-3 outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
        <div className="flex items-center bg-gray-50 border rounded-lg px-3">
          <UserCircle2 className="w-5 h-5 text-gray-400" />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="25"
            className="w-full bg-transparent px-3 py-3 outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Doctor */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Doctor</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          className="w-full bg-gray-50 border text-gray-700 px-3 py-3 rounded-lg outline-none"
        >
          <option value="">-- Choose Doctor --</option>
          {doctors.map((doc, i) => (
            <option key={i} value={doc}>
              {doc}
            </option>
          ))}
        </select>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <div className="flex items-center bg-gray-50 border rounded-lg px-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-transparent px-3 py-3 outline-none text-gray-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <div className="flex items-center bg-gray-50 border rounded-lg px-3">
            <Clock className="w-5 h-5 text-gray-400" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full bg-transparent px-3 py-3 outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Therapy */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Therapy</label>
        <select
          name="therapy"
          value={formData.therapy}
          onChange={handleChange}
          required
          className="w-full bg-gray-50 border text-gray-700 px-3 py-3 rounded-lg outline-none"
        >
          <option value="">-- Choose Therapy --</option>
          {therapies.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        Submit & Schedule
      </button>
    </form>
  );
}
