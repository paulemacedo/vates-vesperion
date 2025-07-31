import { createSlice } from '@reduxjs/toolkit'

const leituraSlice = createSlice({
  name: 'leitura',
  initialState: {
    activeCategory: 'tarot'
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    }
  }
})

export const { setActiveCategory } = leituraSlice.actions
export default leituraSlice.reducer