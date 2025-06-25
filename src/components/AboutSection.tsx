import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Sobre Nós</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <img
                src="/images/fundo2.png"
                alt="Sobre a N&M Barbearia"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary-500 rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-styled">
              Inaugurada em 2017, a Barbearia N&M, anteriormente conhecida como 'Arco da Velha', 
              passou a se chamar N&M Barbearia em 2020 e desde então se consolidou como um espaço 
              de tradição e amizade em nossa comunidade. Após a saída de um sócio, Nonato e Maicon 
              assumiram, fortalecendo a parceria e dando continuidade a este projeto. A barbearia 
              oferece serviços de qualidade em ambiente acolhedor, buscando criar laços com os clientes. 
              Convidamos você a conhecer a N&M Barbearia e a fazer parte da nossa história.
            </p>
            
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection