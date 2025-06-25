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
    <section id="home" className="flex-1 flex items-center justify-center relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-black bg-opacity-75 p-8 md:p-12 border-4 border-primary-500 rounded-lg max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase text-shadow"
            >
              Bem-vindo à N&M Barbearia
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Desde 2017, a N&M Barbearia oferece serviços de barbearia de alta qualidade para homens e meninos. 
              Nossos barbeiros são especialistas em cortes de cabelo, barbas e bigodes. 
              Nós nos esforçamos para fornecer um serviço excepcional a todos os nossos clientes.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => scrollToSection('about')}
              className="btn-primary text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça Nossa História
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection