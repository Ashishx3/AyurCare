import Panchakarma from '@/components/AboutPanchakarma'

import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import CommunitySection from '@/components/WhtOurCommunitySays'
import React from 'react'

const Homepage = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gradient-to-b">
      <Navbar />
      <HeroSection />
      <Panchakarma/>
      <CommunitySection/>
      
    </div>
  )
}

export default Homepage
