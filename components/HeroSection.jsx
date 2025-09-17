import React from 'react'
import "@/styles/lang.css"
const HeroSection = () => {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-purple-50 to-purple-100 py-32 px-6">
      <p className="text-5xl pb-3 md:text-8xl font-extrabold bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
        Ayur Care
      </p>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        Empowering health with the blend of modern science and Ayurveda 🌿  
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 border border-purple-400 text-purple-600 rounded-lg shadow-md hover:bg-purple-50 transition">
          Learn More
        </button>
      </div>
      <div className='text-black lang'>lang</div>
    </section>
  )
}

export default HeroSection
