import { configureStore } from '@reduxjs/toolkit'
import leituraReducer from './slices/leituraSlice'
import dailyCardReducer from './slices/dailyCardSlice'

export const store = configureStore({
  reducer: {
    leitura: leituraReducer,
    dailyCard: dailyCardReducer
  },
  // Adicionar middleware para debug
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

console.log('🏪 Redux store criado:', store.getState())