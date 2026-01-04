import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxProps {
  src: string
  alt: string
  className?: string
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = () => setIsOpen(true)
  const closeLightbox = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={openLightbox}
        className={`inline-flex items-center justify-center w-12 h-12 bg-primary-400 text-dark-900 rounded-sm hover:bg-primary-300 transition-all duration-300 shadow-lg ${className}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain rounded-sm shadow-2xl border border-white/10"
              />

              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 text-gray-400 hover:text-primary-400 flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Lightbox