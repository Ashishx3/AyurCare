"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Flame, Star, Award } from "lucide-react";

// Dummy data for tasks & streaks
const dummyTasks = {
  "2025-09-01": true,
  "2025-09-02": true,
  "2025-09-03": false,
  "2025-09-04": true,
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export default function GamifiedPage() {
  const today = new Date();
  const [year] = useState(today.getFullYear());
  const [month] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);

  // Fake XP & streaks
  const [xp, setXp] = useState(120);
  const [streak, setStreak] = useState(3);

  const handleDayClick = (day) => {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    // Toggle dummy completion
    dummyTasks[dateKey] = !dummyTasks[dateKey];

    if (dummyTasks[dateKey]) {
      setXp(xp + 10);
      setStreak(streak + 1);
    } else {
      setXp(Math.max(0, xp - 10));
      setStreak(Math.max(0, streak - 1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-indigo-50 to-white py-12 px-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent drop-shadow-md"
      >
        AyurCare Daily Quest
      </motion.h1>

      {/* XP + Streak */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-white shadow-xl rounded-2xl p-6 w-72 text-center">
          <Star className="mx-auto text-yellow-400 text-4xl mb-2" />
          <p className="font-semibold text-lg">XP Points</p>
          <p className="text-3xl font-extrabold text-purple-600">{xp}</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-teal-400 h-3 rounded-full transition-all"
              style={{ width: `${Math.min((xp % 100) + 10, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Level {Math.floor(xp / 100) + 1}</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 w-72 text-center">
          <Flame className="mx-auto text-red-500 text-4xl mb-2" />
          <p className="font-semibold text-lg">Current Streak</p>
          <p className="text-3xl font-extrabold text-red-500">{streak} 🔥</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white shadow-lg rounded-3xl p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <CalendarDays className="text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold">
            {today.toLocaleString("default", { month: "long" })} {year}
          </h2>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {Array.from({ length: daysInMonth }).map((_, day) => {
            const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
              day + 1
            ).padStart(2, "0")}`;
            const completed = dummyTasks[dateKey];

            return (
              <motion.div
                whileTap={{ scale: 0.9 }}
                key={day}
                onClick={() => handleDayClick(day + 1)}
                className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border-2 font-semibold transition ${
                  completed
                    ? "bg-gradient-to-r from-purple-500 to-teal-400 text-white border-transparent shadow-lg"
                    : "border-gray-300 text-gray-500 hover:border-purple-400"
                }`}
              >
                {day + 1}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Badges */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6 text-purple-700">Achievements</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 flex flex-col items-center w-40"
          >
            <Award className="text-yellow-500 text-3xl mb-2" />
            <span className="font-semibold">7-Day Streak</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-indigo-100 border-2 border-indigo-400 rounded-xl p-4 flex flex-col items-center w-40"
          >
            <Star className="text-indigo-500 text-3xl mb-2" />
            <span className="font-semibold">Level 2 Achieved</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
