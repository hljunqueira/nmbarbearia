import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/5 -skew-x-12 transform origin-top-right"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">Sobre <span className="text-primary-400">Nós</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left relative"
          >
            <div className="relative inline-block group">
              <img
                src="/images/fundo2.png"
                alt="Sobre a N&M Barbearia"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-sm shadow-2xl relative z-10 filter sepia-[.2] group-hover:sepia-0 transition-all duration-700"
              />
              {/* Gold frame effect */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-500/30 rounded-sm -z-0 group-hover:top-4 group-hover:left-4 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500 rounded-sm -z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-styled bg-dark-800 border-l-4 border-primary-400 shadow-xl p-8 rounded-r-lg relative">
              <span className="absolute -top-6 left-0 text-6xl text-primary-500 opacity-20 font-serif">"</span>
              <h3 className="text-2xl font-oswald text-white mb-4 uppercase tracking-wide">Tradição & Amizade</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Inaugurada em 2017, a Barbearia N&M, anteriormente conhecida como 'Arco da Velha',
                passou a se chamar N&M Barbearia em 2020 e desde então se consolidou como um espaço
                de tradição e amizade em nossa comunidade. Após a saída de um sócio, Nonato e Maicon
                assumiram, fortalecendo a parceria e dando continuidade a este projeto.
              </p>
              <p className="text-gray-300 font-light leading-relaxed mt-4">
                A barbearia oferece serviços de qualidade em ambiente acolhedor, buscando criar laços com os clientes.
                Convidamos você a conhecer a N&M Barbearia e a fazer parte da nossa história.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('service')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Conheça Nossos Serviços
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection