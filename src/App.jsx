import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Particles from './components/ui/Particles'
import MainPage from './pages/MainPage'
import CatalogPage from './pages/CatalogPage'
import './index.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDailyCardFromStorage } from './redux/slices/dailyCardSlice'



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
            <Route path="/" element={<MainPage />} />
            <Route path="/shop" element={<CatalogPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App