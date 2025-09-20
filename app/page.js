import DoshaShowcase from '@/components/AboutDosha'
import Panchakarma from '@/components/AboutPanchakarma'
import Chatbot from '@/components/chatbot'
import Footer from '@/components/footer'

import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'

import CommunitySection from '@/components/WhtOurCommunitySays'
import React from 'react'

const Homepage = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gradient-to-b">
    <Navbar/>
      <HeroSection />
      
      <Panchakarma/>
      <DoshaShowcase/>

      <CommunitySection/>
      <Chatbot/>
      <Footer/>
      
    </div>
  )
}

export default Homepage
