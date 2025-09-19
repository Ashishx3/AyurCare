"use client";

import { useState } from "react";
import { Loader2, Upload } from "lucide-react";
import Header from "@/components/PatientComponents/Header";

export default function CompleteProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    dosha: "",
    lifestyle: "",
    diet: "",
    healthGoals: "",
    medicalHistory: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsCompleted(true);
    }, 2000);
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-300 via-white to-purple-400">
      {!isCompleted ? (
        <div className="max-w-6xl mx-auto py-14 px-6">
          <h1 className="text-5xl font-extrabold text-purple-900 mb-12 text-center drop-shadow-lg">
            Complete Your Ayurvedic Profile 🌿
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/70 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-purple-200"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />
            <select
              name="dosha"
              value={formData.dosha}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none"
            >
              <option value="">Your Dominant Dosha</option>
              <option>Vata</option>
              <option>Pitta</option>
              <option>Kapha</option>
              <option>Mixed</option>
            </select>
            <textarea
              name="lifestyle"
              placeholder="Describe Your Lifestyle (e.g., Active, Sedentary, Balanced)"
              value={formData.lifestyle}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none md:col-span-2"
              rows="2"
            />
            <textarea
              name="diet"
              placeholder="Your Usual Diet (e.g., Vegetarian, Non-Vegetarian, Ayurvedic, Mixed)"
              value={formData.diet}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none md:col-span-2"
              rows="2"
            />
            <textarea
              name="healthGoals"
              placeholder="Your Health Goals (e.g., Weight Loss, Better Sleep, Stress Relief)"
              value={formData.healthGoals}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none md:col-span-2"
              rows="2"
            />
            <textarea
              name="medicalHistory"
              placeholder="Medical History (if any)"
              value={formData.medicalHistory}
              onChange={handleChange}
              className="p-4 rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-600 outline-none md:col-span-2"
              rows="2"
            />
            <button
              type="submit"
              disabled={isSaving}
              className="md:col-span-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 text-lg shadow-lg"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" /> Saving...
                </>
              ) : (
                "Save Profile"
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-14 px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl font-bold text-purple-900 mb-8 border-b-2 border-purple-300 pb-4">
              My Profile
            </h2>
            <div className="space-y-5 text-gray-800 text-lg">
              {Object.entries(formData).map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold capitalize">{key}:</span>{" "}
                  {value || "Not provided"}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl font-bold text-purple-900 mb-8 border-b-2 border-purple-300 pb-4">
              Your Reports & Records
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Upload your medical reports, hospital parchis, and history here.
            </p>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-purple-400 rounded-2xl p-10 cursor-pointer hover:bg-purple-50 transition">
              <Upload className="h-12 w-12 text-purple-600 mb-3" />
              <span className="text-purple-700 font-semibold text-lg">
                Click to Upload Files
              </span>
              <input type="file" multiple className="hidden" onChange={handleUpload} />
            </label>
            {uploadedFiles.length > 0 && (
              <div className="mt-8 space-y-3">
                <h3 className="font-semibold text-purple-800 text-xl">
                  Uploaded Files:
                </h3>
                <ul className="list-disc list-inside text-gray-800">
                  {uploadedFiles.map((file, idx) => (
                    <li key={idx} className="text-lg">{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
