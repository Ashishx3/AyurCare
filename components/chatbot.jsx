"use client";

import React, { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Bot reply
    setTimeout(() => {
      const botMsg = { text: "Currently coming soon…", sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-24 right-6 w-96 h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-4 flex justify-between items-center">
              <h2 className="font-bold text-lg">Ayur Care</h2>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-green-100 text-gray-800 self-end ml-auto"
                      : "bg-gray-200 text-gray-700 self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center border-t border-gray-200 p-3 bg-white">
              <input
                type="text"
                value={input}
                placeholder="How may I help you?"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={handleSend}
                className="ml-2 p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
