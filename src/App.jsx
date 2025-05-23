import Header from './components/Header'
import Hero from './components/Hero'
import Leituras from './components/Leituras'
import Precos from './components/Precos'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import FAQ from './components/FAQ'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import Particles from './components/ui/Particles'
import './index.css'
import { useState } from 'react'

function App() {
  return (
    <div className="bg-midnight text-text-primary">
      <Particles />
      <Header />
      <Hero />
      <Leituras />
      <Precos />
      <Servicos />
      {/* <Sobre /> */}
      <FAQ />
      <Depoimentos />
      <Footer />    
    </div>
  )
}

export default App
