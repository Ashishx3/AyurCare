"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MessageSquare, Send, User, Mail, Star } from "lucide-react";
import { addFeedback } from "@/app/redux/slice"; // <-- slice se import

export default function FeedbackForm() {
  const dispatch = useDispatch();
  const [storeFeedback, setStoreFeedback] = useState({
    name: "",
    email: "",
    message: "",
    rating: "5",
  });

  const handleChange = (e) => {
    setStoreFeedback({ ...storeFeedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback(storeFeedback));
    setStoreFeedback({ name: "", email: "", message: "", rating: "5" });
    alert("✅ Thank you! Feedback submitted successfully.");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-600/90 via-indigo-600/80 to-purple-800/90 shadow-2xl text-white backdrop-blur-md border border-white/10">
      <h2 className="text-3xl font-extrabold flex items-center gap-2 mb-6">
        <MessageSquare className="w-7 h-7 text-yellow-300" /> We Value Your
        Feedback
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-300 w-5 h-5" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={storeFeedback.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 placeholder-gray-300 focus:bg-white/20 border border-white/20 focus:border-purple-300 outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-300 w-5 h-5" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={storeFeedback.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 placeholder-gray-300 focus:bg-white/20 border border-white/20 focus:border-purple-300 outline-none transition"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Write your feedback..."
          value={storeFeedback.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/10 placeholder-gray-300 focus:bg-white/20 border border-white/20 focus:border-purple-300 outline-none transition resize-none"
        ></textarea>

        {/* Rating */}
        <div className="flex items-center gap-4">
          <label className="font-semibold flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400" /> Rate us:
          </label>
          <select
            name="rating"
            value={storeFeedback.rating}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg bg-purple-200 text-black border border-purple-400 focus:border-yellow-400 outline-none shadow-sm"
          >
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Terrible</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 px-6 rounded-xl shadow hover:from-yellow-300 hover:to-orange-300 transition"
        >
          <Send className="w-5 h-5" /> Submit Feedback
        </button>
      </form>
    </div>
  );
}
