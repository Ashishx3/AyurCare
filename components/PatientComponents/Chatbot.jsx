"use client";
import { useState } from "react";
import { MessageSquare } from "lucide-react";

export default function Chatbot({ onTakeQuiz }) {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30">
      {chatOpen ? (
        <div className="w-96 h-[28rem] bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-5 flex flex-col border animate-fadeIn">
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="font-bold text-lg text-slate-800">🤖 Health Assistant</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-slate-500 hover:text-pink-500"
            >
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 text-sm text-gray-700 space-y-3">
            <p>👋 Hello! I can help you with appointments, Dosha quiz & doctor chat.</p>
            <div className="bg-indigo-100 rounded-2xl px-3 py-2 w-fit">
              Try starting with “Take Dosha Quiz” 🌿
            </div>
          </div>
          <div className="space-y-2">
            <button
              onClick={onTakeQuiz}
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 rounded-2xl shadow hover:scale-[1.02] transition"
            >
              🌿 Take Dosha Quiz
            </button>
            <button className="w-full bg-gradient-to-r from-blue-400 to-indigo-600 text-white py-3 rounded-2xl shadow hover:scale-[1.02] transition">
              💬 Chat with Doctor
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition"
          onClick={() => setChatOpen(true)}
        >
          <MessageSquare className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}
