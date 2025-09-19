"use client";
import React, { useState } from "react";
import SymptomReportModal from "@/components/symptomscontainer"; // adjust path

export default function AddSymptomsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
      >
        Open Symptom Report
      </button>

      {/* Modal */}
      <SymptomReportModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}