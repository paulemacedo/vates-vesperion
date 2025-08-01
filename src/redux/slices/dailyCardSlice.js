import { createSlice } from '@reduxjs/toolkit'
import { tarotCards } from '../../data/tarotData'

// Função para gerar carta baseada na data
const generateDailyCard = (date = new Date()) => {
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
  const seed = dayOfYear + date.getFullYear()
  const index = seed % tarotCards.length
  console.log('🔮 Gerando carta diária:', { dayOfYear, seed, index, carta: tarotCards[index] })
  return tarotCards[index]
}

const getDateString = (date = new Date()) => {
  return date.toISOString().split('T')[0]
}

const initialState = {
  currentCard: null,
  lastGeneratedDate: null,
  isLoading: false
}

const dailyCardSlice = createSlice({
  name: 'dailyCard',
  initialState,
  reducers: {
    loadDailyCardFromStorage: (state) => {
      console.log('📦 Carregando carta do localStorage...')
      const today = getDateString()
      const stored = localStorage.getItem('dailyCard')
      
      console.log('📅 Data de hoje:', today)
      console.log('💾 Dados armazenados:', stored)
      
      if (stored) {
        try {
          const { card, date } = JSON.parse(stored)
          console.log('📊 Carta armazenada:', { card, date })
          
          if (date === today) {
            console.log('✅ Usando carta do dia armazenada')
            state.currentCard = card
            state.lastGeneratedDate = date
          } else {
            console.log('🆕 Gerando nova carta para hoje')
            const newCard = generateDailyCard()
            state.currentCard = newCard
            state.lastGeneratedDate = today
            
            localStorage.setItem('dailyCard', JSON.stringify({
              card: newCard,
              date: today
            }))
          }
        } catch (error) {
          console.error('❌ Erro ao carregar do localStorage:', error)
          const card = generateDailyCard()
          state.currentCard = card
          state.lastGeneratedDate = today
          
          localStorage.setItem('dailyCard', JSON.stringify({
            card,
            date: today
          }))
        }
      } else {
        console.log('🎯 Primeira vez - gerando carta')
        const card = generateDailyCard()
        state.currentCard = card
        state.lastGeneratedDate = today
        
        localStorage.setItem('dailyCard', JSON.stringify({
          card,
          date: today
        }))
      }
      
      console.log('🔮 Estado final do Redux:', { 
        currentCard: state.currentCard, 
        lastGeneratedDate: state.lastGeneratedDate 
      })
    }
  }
})

export const { loadDailyCardFromStorage } = dailyCardSlice.actions
export default dailyCardSlice.reducer