/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addFeedback } from "@/app/redux/slice"; // <-- use your current slice


const backdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const sheet = {
  hidden: { y: 40, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
  exit: { y: 30, opacity: 0, transition: { duration: 0.15 } },
};

const quickSymptoms = ["Fever", "Headache", "Cough", "Fatigue", "Nausea", "Cold"];

const SymptomReportModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    symptoms: "",
    onsetDate: "",
    onsetTime: "",
    severity: "Moderate",
    bodyArea: "",
    quickSymptoms: [],
  });

  const toggleQuickSymptom = (sym) => {
    setForm((f) => {
      const exists = f.quickSymptoms.includes(sym);
      return {
        ...f,
        quickSymptoms: exists
          ? f.quickSymptoms.filter((s) => s !== sym)
          : [...f.quickSymptoms, sym],
      };
    });
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

dispatch(addFeedback(form));


    // reset form
    setForm({
      name: "",
      email: "",
      symptoms: "",
      onsetDate: "",
      onsetTime: "",
      severity: "Moderate",
      bodyArea: "",
      quickSymptoms: [],
    });

    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          {/* Modal */}
          <motion.div
            variants={sheet}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-[92vw] max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Report Symptoms
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              {/* Quick Symptom Tags */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Quick symptoms
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickSymptoms.map((sym) => {
                    const active = form.quickSymptoms.includes(sym);
                    return (
                      <button
                        type="button"
                        key={sym}
                        onClick={() => toggleQuickSymptom(sym)}
                        className={`px-3 py-1 rounded-full border text-sm transition ${
                          active
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        + {sym}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom symptoms */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Symptoms summary
                </label>
                <textarea
                  name="symptoms"
                  value={form.symptoms}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  required
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Onset date
                  </label>
                  <input
                    name="onsetDate"
                    type="date"
                    value={form.onsetDate}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Onset time
                  </label>
                  <input
                    name="onsetTime"
                    type="time"
                    value={form.onsetTime}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              {/* Severity + Body area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Severity
                  </label>
                  <select
                    name="severity"
                    value={form.severity}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option>Mild</option>
                    <option>Moderate</option>
                    <option>Severe</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Affected area/body part
                  </label>
                  <input
                    name="bodyArea"
                    value={form.bodyArea}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SymptomReportModal;
