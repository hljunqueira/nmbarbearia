import React, { useEffect, useState } from 'react'

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-dark-900 border-t border-white/10 relative z-10">
      <div className="container-custom">
        <div className="py-8 text-center">
          <p className="text-gray-400 text-sm font-light tracking-wide">
            &copy; {currentYear} <span className="text-primary-400 font-medium">N&M Barbearia</span>. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Desenvolvido por Henrique Junqueira
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer