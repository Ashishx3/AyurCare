"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function DoctorFeedback() {
  const feedbacks = useSelector((state) => state.feedback.feedbackList); // <-- slice ke hisaab se change karo

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        Patient Feedback
      </h1>

      {feedbacks && feedbacks.length > 0 ? (
        <div className="space-y-4">
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow border border-purple-100"
            >
              <p className="text-lg font-semibold text-purple-800">{f.name}</p>
              <p className="text-sm text-gray-500">{f.email}</p>
              <p className="mt-2 text-gray-700">{f.message}</p>
              <p className="mt-2 font-medium text-yellow-600">
                ⭐ {f.rating}/5
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No feedback yet.</p>
      )}
    </div>
  );
}
