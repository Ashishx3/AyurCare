import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Preeti Chopra (B.A.M.S, MD)",
    rating: 5,
    text: "She has had an amazing experience with our app AyurCare and was helped with many problems. ",
    video: "/whtcommunity/first.mp4",
  },
  {
    name: "Dr. Pradeep Mishra (B.A.M.S, MD) ",
    rating: 5,
    text: "Amazing experience! The doctor was professional and truly caring throughout the process.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex space-x-1 mt-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <polygon points="10 1.5 12.95 7.5 19.51 7.5 14 12 16 18 10 14.5 4 18 6 12 0.49 7.5 7.05 7.5" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="relative bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl p-6 flex flex-col items-center text-center w-full md:w-1/3 transition transform hover:scale-105 hover:shadow-2xl border border-purple-100">
    {/* Decorative gradient ring */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-purple-300 via-indigo-300 to-teal-200 rounded-full blur-2xl opacity-30 -z-10"></div>

    <FaQuoteLeft className="text-purple-400 text-4xl mb-4 drop-shadow-md" />

    <p className="text-gray-700 mb-4 text-base italic leading-relaxed">
      {testimonial.text}
    </p>

    <div className="w-full mb-4 rounded-xl overflow-hidden">
      <video
        controls
        className="rounded-xl shadow-md w-full aspect-video object-contain  "
      >
        <source src={testimonial.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="mt-2">
      <span className="font-semibold text-lg bg-gradient-to-r from-purple-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
        {testimonial.name}
      </span>
      <StarRating rating={testimonial.rating} />
    </div>
  </div>
);

const CommunitySection = () => (
  <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-indigo-50">
    <div className=" mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent drop-shadow-md">
        What Our Community Says
      </h2>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-10">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
