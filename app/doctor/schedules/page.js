"use client";
import React from "react";
// import { useSelector } from "react-redux"; // Redux

export default function DoctorSchedules() {
  // const schedules = useSelector((state) => state.schedules.doctorSchedules);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">My Schedule</h1>
      <div className="space-y-4">
        {/* schedules.map((slot) => (
          <div key={slot.id} className="p-4 bg-white rounded shadow">{slot.date} - {slot.time}</div>
        )) */}
        <p className="text-gray-500">No schedule set yet.</p>
      </div>
    </div>
  );
}
