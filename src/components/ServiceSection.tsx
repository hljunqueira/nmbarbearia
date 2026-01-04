import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Service {
  id: number
  title: string
  description: string
  image: string
}

const ServiceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services: Service[] = [
    {
      id: 1,
      title: 'Cabelo',
      description: 'A N&M Barbearia é sinônimo de tradição e qualidade em cortes de cabelo masculinos. Nossos barbeiros, Maicon e Nato, combinam técnicas clássicas com as últimas tendências para criar um visual único e personalizado para cada cliente.',
      image: '/images/nike.webp'
    },
    {
      id: 2,
      title: 'Barba',
      description: 'Na N&M Barbearia, você encontra barbeiros experientes e apaixonados, prontos para cuidar da sua barba com técnicas precisas e produtos de alta qualidade.',
      image: '/images/barba3.jpg'
    },
    {
      id: 3,
      title: 'Barba e Cabelo',
      description: 'Oferecemos serviços completos de corte de cabelo e barba, criando um visual harmonioso e personalizado para você. Do clássico ao moderno, utilizamos técnicas precisas e produtos de alta qualidade para garantir um resultado impecável e duradouro.',
      image: '/images/nonatofazendobarba.jpg'
    },
    {
      id: 4,
      title: 'Degradê Navalhado',
      description: 'O degradê navalhado é a escolha perfeita para quem busca um visual moderno e marcante. Na N&M Barbearia, nossos barbeiros dominam a técnica, criando um degradê impecável com a precisão da navalha. O resultado é um corte com transição suave e um acabamento nítido, que destaca o seu estilo.',
      image: '/images/navalhadodesenho.jpg'
    },
    {
      id: 5,
      title: 'Sobrancelhas',
      description: 'Na N&M Barbearia, cuidamos de cada detalhe do seu visual, incluindo suas sobrancelhas. Nossos profissionais experientes utilizam técnicas precisas para modelar e definir suas sobrancelhas, realçando o seu olhar e harmonizando o seu rosto. Do design clássico ao moderno, garantimos um resultado natural e impecável.',
      image: '/images/sombracelha.png'
    }
  ]

  return (
    <section id="service" className="section-padding bg-dark-900 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">Nossos <span className="text-primary-400">Serviços</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 font-light">
            Experiência completa de barbearia com profissionais de elite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-800 rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-primary-900/20 transition-all duration-500 group border border-white/5 hover:border-primary-500/30"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-oswald font-bold text-white group-hover:text-primary-400 transition-colors duration-300 uppercase tracking-wider">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
                {/* Button removed as per user request */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection