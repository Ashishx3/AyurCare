"use client";
import React, { useState, useEffect } from "react";
import SymptomReportModal from "@/components/symptomscontainer";

export default function AddSymptomsPage() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ open modal immediately when page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SymptomReportModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
