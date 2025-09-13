"use client"
import { useState } from "react";

const therapies = [
  "Panchakarma Detox",
  "Shirodhara Therapy",
  "Abhyanga Massage",
  "Nasya Treatment",
  "Basti Therapy",
];

export default function QuickActions({ addSession }) {
  const [form, setForm] = useState({
    name: "",
    therapy: therapies[0],
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time) return;
    addSession(form);
    setForm({ name: "", therapy: therapies[0], date: "", time: "" });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
      <h2 className="text-lg font-semibold text-blue-800 mb-4">Quick Actions</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
        />

        <select
          value={form.therapy}
          onChange={(e) => setForm({ ...form, therapy: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
        >
          {therapies.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-1/2 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
          />
          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-1/2 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-all"
        >
          Schedule Session
        </button>
      </form>
    </div>
  );
}
