import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <motion.a
            href="#"
            onClick={() => scrollToSection('home')}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/images/Logo1.png"
              alt="Logo N&M Barbearia"
              className="w-16 h-16 rounded-full object-cover"
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Início', id: 'home' },
              { label: 'Sobre', id: 'about' },
              { label: 'Serviços', id: 'service' },
              { label: 'Galeria', id: 'gallery' },
              { label: 'Contato', id: 'contact' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-primary-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-black bg-opacity-95"
        >
          <div className="py-4 space-y-4">
            {[
              { label: 'Início', id: 'home' },
              { label: 'Sobre', id: 'about' },
              { label: 'Serviços', id: 'service' },
              { label: 'Galeria', id: 'gallery' },
              { label: 'Contato', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white text-sm font-medium uppercase tracking-wide hover:text-primary-400 transition-colors duration-300 px-4 py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header