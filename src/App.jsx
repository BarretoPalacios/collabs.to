import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Services from './pages/Services'
import Campañas from './pages/Campañas'
// import Portafolio from './pages/Portafolio'
import Convocatoria from './pages/Convocatoria'
import Contacto from './pages/Contacto'
import LoaderInitial from './components/LoaderInitial' // Importa el loader
import CuentoMinimal from './components/CuentoScroll'
import Test from './components/Test'
import Index from './pages/Index'

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) return <LoaderInitial />

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Index />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/campañas" element={<Campañas />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/convocatoria" element={<Convocatoria />} />
        <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </Router>
  )
}

export default App