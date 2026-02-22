import React from 'react'
import HeroSection from './HeroSection'
import { BrandTrust } from './BrandTrust'
import TalentsSection from './TalentsSection'
import StrategySection from './StrategySection'
import TestimonialsSection from './TestimonialsSection'
import ContactSection from './ContactSection'
import ImpactSection from './ImpactSection'

function Index() {
  return (
    <div>
        <HeroSection/>
        {/* <BrandTrust/> */}
        <TalentsSection/>
        <ImpactSection/>
        <StrategySection/>
        <TestimonialsSection/>
        <ContactSection/>
    </div>
  )
}

export default Index