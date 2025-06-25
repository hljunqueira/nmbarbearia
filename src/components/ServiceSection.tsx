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
      title: 'Sombracelhas',
      description: 'Na N&M Barbearia, cuidamos de cada detalhe do seu visual, incluindo suas sobrancelhas. Nossos profissionais experientes utilizam técnicas precisas para modelar e definir suas sobrancelhas, realçando o seu olhar e harmonizando o seu rosto. Do design clássico ao moderno, garantimos um resultado natural e impecável.',
      image: '/images/sombracelha.png'
    }
  ]

  return (
    <section id="service" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Oferecemos uma ampla gama de serviços para cuidar do seu visual com excelência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-sm"
                >
                  Saiba Mais
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection