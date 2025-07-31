import Header from './components/Header'
import Hero from './components/Hero'
import Leituras from './components/Leituras'
import Sobre from './components/Sobre'
import FAQ from './components/FAQ'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import Particles from './components/ui/Particles'
import './index.css'
import { useState } from 'react'

const sections = [
  { Component: Hero },
  { Component: Leituras },
  { Component: FAQ },
  { Component: Depoimentos },
];

const bgClasses = ['bg-midnight', 'bg-purple-dark'];

function App() {
  return (
    <div className="bg-midnight text-text-primary">
      <Particles />
      <Header />
      {sections.map(({ Component }, idx) => (
        <div key={idx} className={bgClasses[idx % bgClasses.length]}>
          <Component />
        </div>
      ))}
      <Footer />    
    </div>
  )
}

export default App