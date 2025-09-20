"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { MessageSquare, Send, User, Mail, Star } from "lucide-react";
import { addFeedback } from "@/app/redux/slice";
import Header from "@/components/PatientComponents/Header";
import { useRouter } from "next/navigation"; // ✅ import router

export default function FeedbackForm() {
  const dispatch = useDispatch();
  const router = useRouter(); // ✅ init router

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

      // ✅ redirect to patient dashboard after 1.2s
      router.push("/patient/dashboard");
    }, 1200);
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="w-full max-w-xl p-8 rounded-2xl bg-white shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold flex items-center gap-2 mb-8 text-gray-800">
            <MessageSquare className="w-7 h-7 text-purple-600" />
            Share Your Feedback
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={storeFeedback.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 focus:bg-white border border-gray-300 focus:border-purple-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={storeFeedback.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 focus:bg-white border border-gray-300 focus:border-purple-500 outline-none transition"
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
              className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-white border border-gray-300 focus:border-purple-500 outline-none resize-none transition"
            ></textarea>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <label className="font-medium flex items-center gap-1 text-gray-700">
                <Star className="w-5 h-5 text-yellow-500" /> Rate us:
              </label>
              <select
                name="rating"
                value={storeFeedback.rating}
                onChange={handleChange}
                className="px-3 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:border-purple-500 outline-none"
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
              className={`flex items-center justify-center gap-2 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-purple-700 transition ${
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
