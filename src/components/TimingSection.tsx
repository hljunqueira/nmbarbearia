import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Schedule {
  day: string
  time: string
}

const TimingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const schedule: Schedule[] = [
    { day: 'Segunda', time: '09:00-19:00' },
    { day: 'Terça', time: '09:00-20:00' },
    { day: 'Quarta-Feira', time: '09:00-20:00' },
    { day: 'Quinta-Feira', time: '09:00-20:00' },
    { day: 'Sexta-Feira', time: '09:00-20:00' },
    { day: 'Sábado', time: '09:00-18:00' },
  ]

  return (
    <section className="section-padding bg-timing-pattern bg-cover bg-center bg-fixed">
      <div className="bg-black bg-opacity-50 py-20">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-primary text-white">Horários de Funcionamento</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mt-4">
              "Sem hora marcada, sem complicação! Atendemos por ordem de chegada."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black bg-opacity-50 border-4 border-white rounded-full w-48 h-48 mx-auto flex flex-col items-center justify-center text-center hover:border-primary-400 transition-all duration-300 group"
              >
                <h4 className="text-white text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {item.day}
                </h4>
                <h6 className="text-primary-400 text-sm font-medium">
                  {item.time}
                </h6>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimingSection