import React from 'react'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"></div>
        <div className="absolute inset-0 bg-black/40"></div> {/* Extra darkening layer */}
      </div>

      <div className="container-custom relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Subheading / Tagline */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block text-primary-400 font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base"
          >
            Estilo • Tradição • Excelência
          </motion.span>

          <h1 className="heading-primary text-shadow-lg mb-8">
            Bem-vindo à <span className="text-primary-400">N&M</span> Barbearia
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Desde 2017, definindo o padrão de elegância masculina.
            Especialistas em cortes clássicos e modernos para o homem contemporâneo.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar conosco
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              onClick={() => scrollToSection('about')}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nossa História
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection