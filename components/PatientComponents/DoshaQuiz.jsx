"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function DoshaQuiz({ onClose, onFinish }) {
  const { data: session } = useSession();

  const questions = [
    { id: 1, text: "Do you often feel hot and sweaty compared to others?" },
    { id: 2, text: "Do you feel anxious or stressed easily?" },
    { id: 3, text: "Do you have digestion issues like bloating or acidity?" },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[current].id]: value });
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleFinish = () => {
    // Dummy result logic (replace later with AI/DB)
    let dosha = "Vata";
    let therapy = "Oil Massage Therapy";

    if (answers[1] === "yes") dosha = "Pitta", therapy = "Cooling Therapy";
    if (answers[2] === "yes") dosha = "Kapha", therapy = "Detox Therapy";

    console.log("Quiz Result:", { dosha, therapy });

    onFinish?.({ dosha, therapy });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        {/* Greeting */}
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Hi {session?.user?.name || "Guest"} 👋
        </h2>

        {/* Question */}
        <p className="text-lg font-medium text-gray-800 text-center mb-6">
          {questions[current].text}
        </p>

        {/* Answer buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => handleAnswer("yes")}
            className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer("no")}
            className="px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600"
          >
            No
          </button>
        </div>

        {/* Progress or Submit */}
        <div className="mt-8 text-center">
          {current === questions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Submit Quiz
            </button>
          ) : (
            <p className="text-gray-500">
              Question {current + 1} of {questions.length}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
