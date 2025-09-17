import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Font Awesome quote icon

const testimonials = [
  {
    name: "Dr. Smith",
    rating: 5,
    text: "Dr. Smith has been amazing! The care and attention received were above my expectations.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Dr. Johnson",
    rating: 5,
    text: "Amazing experience! The doctor was professional and truly caring throughout the process.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

const StarRating = ({ rating }) => (
  <div className="flex space-x-1 text-yellow-400 mt-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 fill-current ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <polygon points="10 1.5 12.95 7.5 19.51 7.5 14 12 16 18 10 14.5 4 18 6 12 0.49 7.5 7.05 7.5" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center w-full md:w-1/3">
    {/* Quote Icon on top */}
    <FaQuoteLeft className="text-gray-300 text-4xl mb-4" />
    
    <p className="text-gray-700 mb-4 text-sm">{testimonial.text}</p>
    
    <div className="w-full mb-4">
      <video
        controls
        className="rounded-xl shadow-md w-full aspect-video object-contain"
      >
        <source src={testimonial.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <div>
      <span className="font-semibold text-gray-800">{testimonial.name}</span>
      <StarRating rating={testimonial.rating} />
    </div>
  </div>
);

const CommunitySection = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Community Says</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10"> {/* Increased gap */}
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
