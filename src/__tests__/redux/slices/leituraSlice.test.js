import { describe, it, expect } from 'vitest'
import leituraReducer, { setActiveCategory } from '../../../redux/slices/leituraSlice'

describe('leituraSlice', () => {
  const initialState = {
    activeCategory: 'tarot'
  }

  it('deve retornar o estado inicial', () => {
    const result = leituraReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual(initialState)
  })

  it('deve retornar o estado inicial quando action type é desconhecido', () => {
    const result = leituraReducer(initialState, { type: 'UNKNOWN_ACTION' })
    expect(result).toEqual(initialState)
  })

  describe('setActiveCategory', () => {
    it('deve alterar a categoria ativa para cigano', () => {
      const action = setActiveCategory('cigano')
      const result = leituraReducer(initialState, action)
      
      expect(result.activeCategory).toBe('cigano')
    })

    it('deve alterar a categoria ativa para sibilla', () => {
      const action = setActiveCategory('sibilla')
      const result = leituraReducer(initialState, action)
      
      expect(result.activeCategory).toBe('sibilla')
    })

    it('deve alterar a categoria ativa para runas', () => {
      const action = setActiveCategory('runas')
      const result = leituraReducer(initialState, action)
      
      expect(result.activeCategory).toBe('runas')
    })

    it('deve manter outras propriedades do estado intactas', () => {
      const stateWithExtraProps = {
        ...initialState,
        someOtherProp: 'test'
      }
      
      const action = setActiveCategory('cigano')
      const result = leituraReducer(stateWithExtraProps, action)
      
      expect(result.activeCategory).toBe('cigano')
      expect(result.someOtherProp).toBe('test')
    })

    it('deve funcionar com valores undefined ou null', () => {
      const actionWithUndefined = setActiveCategory(undefined)
      const resultUndefined = leituraReducer(initialState, actionWithUndefined)
      
      const actionWithNull = setActiveCategory(null)
      const resultNull = leituraReducer(initialState, actionWithNull)
      
      expect(resultUndefined.activeCategory).toBeUndefined()
      expect(resultNull.activeCategory).toBeNull()
    })

    it('deve funcionar em cadeia de actions', () => {
      let state = initialState
      
      // Mudar para cigano
      state = leituraReducer(state, setActiveCategory('cigano'))
      expect(state.activeCategory).toBe('cigano')
      
      // Mudar para sibilla
      state = leituraReducer(state, setActiveCategory('sibilla'))
      expect(state.activeCategory).toBe('sibilla')
      
      // Voltar para tarot
      state = leituraReducer(state, setActiveCategory('tarot'))
      expect(state.activeCategory).toBe('tarot')
    })
  })

  describe('action creators', () => {
    it('setActiveCategory deve criar a action correta', () => {
      const category = 'cigano'
      const expectedAction = {
        type: 'leitura/setActiveCategory',
        payload: category
      }
      
      expect(setActiveCategory(category)).toEqual(expectedAction)
    })

    it('setActiveCategory deve funcionar com diferentes tipos de payload', () => {
      expect(setActiveCategory('tarot')).toEqual({
        type: 'leitura/setActiveCategory',
        payload: 'tarot'
      })

      expect(setActiveCategory('')).toEqual({
        type: 'leitura/setActiveCategory',
        payload: ''
      })

      expect(setActiveCategory(123)).toEqual({
        type: 'leitura/setActiveCategory',
        payload: 123
      })
    })
  })
})
