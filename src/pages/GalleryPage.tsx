import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Lightbox from '../components/Lightbox'

const GalleryPage: React.FC = () => {
  const galleryImages = [
    { src: '/images/nonatoemaicon2.jpg', alt: 'Nonato e Maicon' },
    { src: '/images/aparelhodecortes.png', alt: 'Aparelho de cortes' },
    { src: '/images/espacointerno.jpeg', alt: 'Espaço interno' },
    { src: '/images/nike.webp', alt: 'Corte Nike' },
    { src: '/images/barba3.jpg', alt: 'Serviço de barba' },
    { src: '/images/nonatofazendobarba.jpg', alt: 'Nonato fazendo barba' },
    { src: '/images/navalhadodesenho.jpg', alt: 'Navalha de desenho' },
    { src: '/images/aniver1.webp', alt: 'Aniversário 1' },
    { src: '/images/aniver2.webp', alt: 'Aniversário 2' },
    { src: '/images/aniver3.webp', alt: 'Aniversário 3' },
    { src: '/images/aniver4.webp', alt: 'Aniversário 4' },
    { src: '/images/aniver5.webp', alt: 'Aniversário 5' },
    { src: '/images/aniver6.webp', alt: 'Aniversário 6' },
    { src: '/images/aniver7.webp', alt: 'Aniversário 7' },
    { src: '/images/aniver8.webp', alt: 'Aniversário 8' },
    { src: '/images/aniver9.webp', alt: 'Aniversário 9' },
    { src: '/images/aniver10.webp', alt: 'Aniversário 10' },
    { src: '/images/cortev.webp', alt: 'Corte V' },
    { src: '/images/nonatoeamigo.webp', alt: 'Nonato e amigo' },
    { src: '/images/café.jpeg', alt: 'Café' },
    { src: '/images/espacointernocliente.jpeg', alt: 'Espaço interno com cliente' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="heading-primary">Nossa Galeria Completa</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira mais fotos de nossos serviços realizados!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/"
              className="btn-primary text-lg font-semibold"
            >
              Voltar para a Página Inicial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage