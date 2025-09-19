"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { sendQuizResult } from "../redux/slice";
import Navbar from "@/components/Navbar"; // 👈 Navbar import

export default function DoshaQuizPage() {
  const dispatch = useDispatch();

  // ✅ More detailed quiz questions
  const questions = [
    {
      id: 1,
      text: "How would you describe your body type?",
      options: ["Slim & Light", "Medium & Balanced", "Strong & Solid"],
    },
    {
      id: 2,
      text: "What best describes your skin?",
      options: ["Dry & Rough", "Warm & Sensitive", "Oily & Thick"],
    },
    {
      id: 3,
      text: "How is your digestion?",
      options: ["Irregular", "Strong but sensitive", "Slow but steady"],
    },
    {
      id: 4,
      text: "What is your sleep pattern?",
      options: ["Light, interrupted", "Moderate, sometimes disturbed", "Heavy, deep"],
    },
    {
      id: 5,
      text: "Which quality describes your mind most?",
      options: ["Creative & Quick", "Focused & Ambitious", "Calm & Stable"],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finalDosha, setFinalDosha] = useState(null);
  const [loadingResult, setLoadingResult] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      // show loader first
      setLoadingResult(true);

      setTimeout(() => {
        // calculate dosha result
        const vata = newAnswers.filter((a) =>
          ["Slim & Light", "Dry & Rough", "Irregular", "Light, interrupted", "Creative & Quick"].includes(a)
        ).length;
        const pitta = newAnswers.filter((a) =>
          ["Medium & Balanced", "Warm & Sensitive", "Strong but sensitive", "Moderate, sometimes disturbed", "Focused & Ambitious"].includes(a)
        ).length;
        const kapha = newAnswers.filter((a) =>
          ["Strong & Solid", "Oily & Thick", "Slow but steady", "Heavy, deep", "Calm & Stable"].includes(a)
        ).length;

        let result = "Vata";
        if (pitta > vata && pitta > kapha) result = "Pitta";
        else if (kapha > vata && kapha > pitta) result = "Kapha";

        setFinalDosha(result);
        dispatch(sendQuizResult({ answers: newAnswers, result }));
        setLoadingResult(false);
      }, 2000); // 2s loader
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 overflow-hidden">
      <Navbar />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-32 right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      {/* Quiz Box */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-2xl w-full bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center">
          <h1 className="text-4xl font-extrabold mb-8 text-purple-800">
            ✨ Discover Your Dosha
          </h1>

          {/* Quiz / Result */}
          <AnimatePresence mode="wait">
            {!finalDosha && !loadingResult && (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {questions[currentQ].text}
                </h2>
                <div className="grid gap-4">
                  {questions[currentQ].options.map((opt, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-purple-600 hover:bg-purple-800 text-white font-medium py-3 rounded-xl shadow-lg transition"
                      onClick={() => handleAnswer(opt)}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
                <div className="mt-4 text-sm text-purple-900">
                  Question {currentQ + 1} of {questions.length}
                </div>
              </motion.div>
            )}

            {/* Loader */}
            {loadingResult && (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="w-12 h-12 border-4 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-lg font-medium text-purple-900">
                  Analyzing your Dosha...
                </p>
              </motion.div>
            )}

            {/* Result Box */}
            {finalDosha && !loadingResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-purple-900">
                  🎉 Your Dominant Dosha is: {finalDosha}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/login")}
                  className="px-6 py-3 bg-green-600 hover:bg-green-800 text-white font-semibold rounded-xl shadow-lg"
                >
                  Book Appointment Now
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scrollable Dosha Info Cards */}
      <div className="relative z-10 py-16 px-6 bg-white/20 backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">
          🌿 The Three Doshas Explained
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vata */}
          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Vata</h3>
            <p className="text-gray-700">
              Vata is associated with air & space. People with dominant Vata are
              energetic, creative, but prone to anxiety and irregular digestion.
            </p>
          </div>
          {/* Pitta */}
          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-3">Pitta</h3>
            <p className="text-gray-700">
              Pitta represents fire & water. Pittas are strong-willed, focused,
              and ambitious, but may suffer from overheating, anger, or acidity.
            </p>
          </div>
          {/* Kapha */}
          <div className="p-6 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-bold text-green-700 mb-3">Kapha</h3>
            <p className="text-gray-700">
              Kapha is grounded in earth & water. Calm, stable, and compassionate,
              but may struggle with lethargy and weight gain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
