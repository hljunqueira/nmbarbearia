import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
    </div>
  )
}

export default App