"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ResultsPage() {
  const results = useSelector((state) => state.quiz.results);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-purple-950 text-white p-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Your Dosha Results</h1>

        {results && results.length > 0 ? (
          <div className="space-y-4">
            {results.map((res, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-purple-700 shadow-lg"
              >
                <h2 className="text-2xl font-semibold">{res.dosha}</h2>
                <p className="mt-2 text-lg">{res.explanation}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl mb-6">
            No results yet. Take the quiz to discover your dosha!
          </div>
        )}
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/aidoshaquiz")}
        className="mt-10 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-lg font-semibold shadow-lg"
      >
        Take the Quiz
      </motion.button>
    </div>
  );
}
