import { configureStore } from '@reduxjs/toolkit'
import leituraReducer from './slices/leituraSlice'

export const store = configureStore({
  reducer: {
    leitura: leituraReducer
  }
})