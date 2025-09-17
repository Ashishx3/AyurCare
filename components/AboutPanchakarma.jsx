import React from "react";
import "@/styles/fonts.css"
import Navbar from "@/components/Navbar";
import Image from "next/image";


const Panchakarma = () => {

  const therapies = [
    {
      title: "Vamana",
      desc: "Therapeutic vomiting for removing toxins from the stomach and lungs.",
      img: "/therapies/vamana.png", // replace with your image path
    },
    {
      title: "Virechana",
      desc: "Purgation therapy for detoxifying the liver and intestines.",
      img: "/therapies/virechana.png",
    },
    {
      title: "Basti",
      desc: "Medicated enema therapy to balance Vata and cleanse the colon.",
      img: "/therapies/virechana.png",
    },
    {
      title: "Nasya",
      desc: "Nasal therapy for clearing sinuses, enhancing brain function, and improving breathing.",
      img: "/therapies/virechana.png",
    },
    {
      title: "Raktamokshana",
      desc: "Blood purification therapy for skin diseases and toxin removal.",
      img: "/therapies/virechana.png",
    },
  ];


  return (
    <div className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl HeadingPanch    font-extrabold bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide leading-relaxed">
          About Panchakarma
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Panchakarma is the ancient Ayurvedic practice of cleansing, detoxification, and rejuvenation. 
          At <span className="font-semibold text-purple-700">Ayur Care</span>, our Panchakarma therapies help restore balance, strengthen immunity, and support holistic recovery.
        </p>
      </section>

      {/* Why it Matters */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why it matters?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Dosha Balance</h3>
            <p className="text-gray-600">Helps restore the natural harmony of Vata, Pitta, and Kapha.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Immunity</h3>
            <p className="text-gray-600">Boosts body’s defense system and prevents recurring illness.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Recovery</h3>
            <p className="text-gray-600">Supports faster recovery from stress, fatigue, and chronic conditions.</p>
          </div>
        </div>
      </section>

      {/* Doshas Section */}
      <section className="px-6 md:px-16 py-16 bg-white/70 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">The Three Doshas</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-gradient-to-b from-purple-100 to-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">Vata</h3>
            <p className="text-gray-600">Controls movement, circulation, and nervous system functions.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-indigo-100 to-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Pitta</h3>
            <p className="text-gray-600">Regulates digestion, metabolism, and body temperature.</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-teal-100 to-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-teal-800 mb-2">Kapha</h3>
            <p className="text-gray-600">Provides structure, strength, and stability to the body.</p>
          </div>
        </div>
      </section>

      {/* Therapies Section */}

 
    <section className="px-6 md:px-16 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Panchakarma Therapies
      </h2>

      {/* Cards in grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {therapies.map((therapy, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={therapy.img}
                alt={therapy.title}
                fill
                className="object-cover rounded-full border border-gray-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              {therapy.title}
            </h3>
            <p className="text-gray-600">{therapy.desc}</p>
          </div>
        ))}
      </div>
    </section>





    </div>
  );
};

export default Panchakarma;
