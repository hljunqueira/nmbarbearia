import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const InfoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gray-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-xl font-semibold mb-6 uppercase">
                  Visite a Barbearia N&M
                </h5>
                <p className="text-gray-300 leading-relaxed">
                  Venha nos visitar e faça parte da nossa história! Na N&M Barbearia, você encontrará 
                  um ambiente acolhedor e descontraído, onde a tradição se encontra com a modernidade. 
                  Nossos barbeiros experientes estão prontos para cuidar do seu visual com atenção e 
                  profissionalismo. Esperamos por você!
                </p>
              </div>
              
              <div>
                <h5 className="text-xl font-semibold mb-6 uppercase">
                  Atendimento ao Cliente
                </h5>
                <p className="text-gray-300 leading-relaxed">
                  Na Barbearia N&M, o atendimento funciona por ordem de chegada, o que significa que 
                  não é necessário agendar um horário com antecedência. Basta comparecer à barbearia 
                  durante o horário de funcionamento e aguardar sua vez.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <h5 className="text-xl font-semibold mb-6 uppercase">
              Rede Social
            </h5>
            <div className="flex justify-center lg:justify-end">
              <motion.a
                href="https://www.instagram.com/nmbarbearia1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection