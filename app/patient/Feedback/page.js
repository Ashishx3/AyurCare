"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MessageSquare, Send, User, Mail, Star } from "lucide-react";
import { addFeedback } from "@/app/redux/slice";
import Header from "@/components/PatientComponents/Header";

export default function FeedbackForm() {
  const dispatch = useDispatch();
  const [storeFeedback, setStoreFeedback] = useState({
    name: "",
    email: "",
    message: "",
    rating: "5",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setStoreFeedback({ ...storeFeedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(addFeedback(storeFeedback));

    setTimeout(() => {
      setLoading(false);
      setStoreFeedback({ name: "", email: "", message: "", rating: "5" });
      alert("✅ Thank you! Feedback submitted successfully.");
    }, 2000); // 2 sec timeout
  };

  return (
    <>
    <Header/>
   
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-indigo-200 p-6">
      <div className="w-full max-w-xl p-10 rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl border border-white/40">
        <h2 className="text-4xl font-extrabold flex items-center gap-3 mb-8 text-purple-800 drop-shadow">
          <MessageSquare className="w-8 h-8 text-purple-600" /> Share Your
          Feedback
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-purple-500 w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={storeFeedback.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 placeholder-gray-500 focus:bg-white border border-purple-200 focus:border-purple-400 outline-none transition shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-purple-500 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={storeFeedback.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/70 placeholder-gray-500 focus:bg-white border border-purple-200 focus:border-purple-400 outline-none transition shadow-sm"
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
            className="w-full px-4 py-3 rounded-xl bg-white/70 placeholder-gray-500 focus:bg-white border border-purple-200 focus:border-purple-400 outline-none transition resize-none shadow-sm"
          ></textarea>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <label className="font-semibold flex items-center gap-1 text-purple-700">
              <Star className="w-5 h-5 text-yellow-500" /> Rate us:
            </label>
            <select
              name="rating"
              value={storeFeedback.rating}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-white/80 text-purple-800 border border-purple-300 focus:border-yellow-400 outline-none shadow-sm"
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
            disabled={loading}
            className={`flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-purple-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <Send className="w-5 h-5" />
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
     </>
  );
}
