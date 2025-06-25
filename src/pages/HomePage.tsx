import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import TimingSection from '../components/TimingSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="hero_area bg-hero-pattern bg-cover bg-center min-h-screen flex flex-col">
        <Header />
        <HeroSection />
      </div>
      <AboutSection />
      <ServiceSection />
      <TimingSection />
      <GallerySection />
      <ContactSection />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default HomePage