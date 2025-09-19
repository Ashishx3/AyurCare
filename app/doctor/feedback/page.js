"use client";
import React from "react";
// import { useSelector } from "react-redux"; // Redux

export default function DoctorFeedback() {
  // const feedbacks = useSelector((state) => state.feedback.doctorFeedback);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Feedback</h1>
      <div className="space-y-4">
        {/* feedbacks.map((f) => (
          <div key={f.id} className="p-4 bg-white rounded shadow">{f.comment}</div>
        )) */}
        <p className="text-gray-500">No feedback yet.</p>
      </div>
    </div>
  );
}
