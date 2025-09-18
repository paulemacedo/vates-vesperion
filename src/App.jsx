import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Leituras from './components/Leituras'
import Sobre from './components/Sobre'
import FAQ from './components/FAQ'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import Particles from './components/ui/Particles'
import Shop from './components/Shop'
import './index.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDailyCardFromStorage } from './redux/slices/dailyCardSlice'


const sections = [
  { Component: Hero },
  { Component: Leituras },
  { Component: FAQ },
  { Component: Depoimentos },
];

const bgClasses = ['bg-midnight', 'bg-purple-dark'];

function App() {
  const dispatch = useDispatch()
    const { currentCard } = useSelector(state => state.dailyCard)


  // Carregar carta diária na inicialização
  useEffect(() => {
    dispatch(loadDailyCardFromStorage())
  }, [dispatch])

  // Debug do estado
  useEffect(() => {
    console.log('📱 Estado da carta no App:', currentCard)
  }, [currentCard])
  
return (
  <Router>
    <div className="bg-midnight text-text-primary min-h-screen flex flex-col">
      <Particles />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              {sections.map(({ Component }, idx) => (
                <div key={idx} className={bgClasses[idx % bgClasses.length]}>
                  <Component />
                </div>
              ))}
            </>
          } />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
)
}

export default App