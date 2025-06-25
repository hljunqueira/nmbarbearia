import React, { useEffect, useState } from 'react'

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-800 border-t border-white">
      <div className="container-custom">
        <div className="py-6 text-center">
          <p className="text-white text-sm">
            &copy; {currentYear} All Rights Reserved By Henrique Junqueira
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer