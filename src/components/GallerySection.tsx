import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Lightbox from './Lightbox'

const GallerySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const galleryImages = [
    { src: '/images/cortev.webp', alt: 'Corte V' },
    { src: '/images/cortecabeloindio.png', alt: 'Corte cabelo índio' },
    { src: '/images/cortenavalhado.png', alt: 'Corte navalhado' },
    { src: '/images/navalhado colorido.webp', alt: 'Navalhado colorido' },
    { src: '/images/nonatoemaicon.jpg', alt: 'Nonato e Maicon' },
    { src: '/images/barba.jpg', alt: 'Serviço de barba' },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">Nossa Galeria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Veja nossos trabalhos realizados!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <Lightbox
                  src={image.src}
                  alt={image.alt}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/galeria"
            className="btn-primary text-lg font-semibold"
          >
            Veja Mais!
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection