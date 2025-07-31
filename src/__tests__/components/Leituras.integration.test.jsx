import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { describe, it, expect, vi } from 'vitest'
import Leituras from '../../components/Leituras'
import leituraReducer from '../../redux/slices/leituraSlice'

// Mock dos componentes para focar na lógica de integração
vi.mock('../../components/ui/CategoryFilter', () => ({
  default: ({ categories, activeCategory, onCategoryChange }) => (
    <div data-testid="category-filter">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={activeCategory === cat.id ? 'active' : ''}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}))

vi.mock('../../components/ui/OracleImageSlider', () => ({
  default: ({ oracle, currentImageIndex }) => (
    <div data-testid="oracle-image-slider">
      {`Slider for ${oracle?.title || 'Unknown'} - Image ${currentImageIndex}`}
    </div>
  )
}))

vi.mock('../../components/ui/OracleInfo', () => ({
  default: ({ oracle }) => (
    <div data-testid="oracle-info">
      {`${oracle?.title || 'Unknown'} Info`}
    </div>
  )
}))

vi.mock('../../components/ui/OracleServices', () => ({
  default: ({ oracle, hidePromotions }) => (
    <div data-testid="oracle-services">
      {`Services for ${oracle?.title || 'Unknown'} - Hide Promotions: ${hidePromotions.toString()}`}
    </div>
  )
}))

vi.mock('../../components/ui/SEO', () => ({
  default: ({ title, description }) => (
    <div data-testid="seo">
      SEO: {title} - {description}
    </div>
  )
}))

// Mock do framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
    h2: ({ children, className, ...props }) => (
      <h2 className={className} {...props}>
        {children}
      </h2>
    ),
    p: ({ children, className, ...props }) => (
      <p className={className} {...props}>
        {children}
      </p>
    ),
  },
  AnimatePresence: ({ children }) => <div>{children}</div>,
}))

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      leitura: leituraReducer
    },
    preloadedState: {
      leitura: { activeCategory: 'tarot', ...initialState }
    }
  })
}

describe('Leituras Component Integration', () => {
  it('deve renderizar com estado inicial correto', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    expect(screen.getByText('Leituras Oraculares')).toBeInTheDocument()
    expect(screen.getByTestId('category-filter')).toBeInTheDocument()
    expect(screen.getByTestId('oracle-image-slider')).toBeInTheDocument()
    expect(screen.getByTestId('oracle-info')).toBeInTheDocument()
    expect(screen.getByTestId('oracle-services')).toBeInTheDocument()
  })

  it('deve mostrar dados do tarot inicialmente', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    expect(screen.getByText('Slider for Tarot - Image 0')).toBeInTheDocument()
    expect(screen.getByText('Tarot Info')).toBeInTheDocument()
    expect(screen.getByText('Services for Tarot - Hide Promotions: false')).toBeInTheDocument()
  })

  it('deve mudar categoria quando botão é clicado', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    // Verificar estado inicial
    expect(screen.getByText('Services for Tarot - Hide Promotions: false')).toBeInTheDocument()
    
    // Clicar no botão do Baralho Cigano
    const ciganoButton = screen.getByText('Baralho Cigano')
    fireEvent.click(ciganoButton)
    
    // Verificar mudança
    expect(screen.getByText('Services for Baralho Cigano - Hide Promotions: false')).toBeInTheDocument()
  })

  it('deve resetar índice da imagem quando categoria muda', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    // Estado inicial - imagem 0
    expect(screen.getByText('Slider for Tarot - Image 0')).toBeInTheDocument()
    
    // Mudar categoria
    const ciganoButton = screen.getByText('Baralho Cigano')
    fireEvent.click(ciganoButton)
    
    // Verificar se imagem volta para 0
    expect(screen.getByText('Slider for Baralho Cigano - Image 0')).toBeInTheDocument()
  })

  it('deve passar hidePromotions corretamente', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras hidePromotions={true} />
      </Provider>
    )
    
    expect(screen.getByText('Services for Tarot - Hide Promotions: true')).toBeInTheDocument()
  })

  it('deve funcionar com diferentes categorias iniciais', () => {
    const store = createTestStore({ activeCategory: 'cigano' })
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    expect(screen.getByText('Services for Baralho Cigano - Hide Promotions: false')).toBeInTheDocument()
    expect(screen.getByText('Baralho Cigano Info')).toBeInTheDocument()
  })

  it('deve atualizar store quando categoria muda', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    // Estado inicial
    expect(store.getState().leitura.activeCategory).toBe('tarot')
    
    // Mudar categoria
    const sibillaButton = screen.getByText('Sibilla')
    fireEvent.click(sibillaButton)
    
    // Verificar store atualizado
    expect(store.getState().leitura.activeCategory).toBe('sibilla')
  })

  it('deve renderizar componente SEO com props corretas', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    const seoComponent = screen.getByTestId('seo')
    expect(seoComponent).toBeInTheDocument()
    expect(seoComponent).toHaveTextContent('SEO: Vates Vesperion - Leituras Oraculares Personalizadas')
  })

  it('deve funcionar sem erros quando store não tem estado de leitura', () => {
    const emptyStore = configureStore({
      reducer: {
        leitura: leituraReducer
      }
    })
    
    expect(() => {
      render(
        <Provider store={emptyStore}>
          <Leituras />
        </Provider>
      )
    }).not.toThrow()
  })

  it('deve mostrar todas as categorias no filtro', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    expect(screen.getByText('Tarot')).toBeInTheDocument()
    expect(screen.getByText('Baralho Cigano')).toBeInTheDocument()
    expect(screen.getByText('Sibilla')).toBeInTheDocument()
    expect(screen.getByText('Runas Nórdicas')).toBeInTheDocument()
  })

  it('deve manter sincronização entre componentes', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Leituras />
      </Provider>
    )
    
    // Verificar sincronização inicial
    const tarotButton = screen.getByText('Tarot')
    expect(tarotButton).toHaveClass('active')
    
    // Mudar categoria e verificar sincronização
    const runasButton = screen.getByText('Runas Nórdicas')
    fireEvent.click(runasButton)
    
    expect(screen.getByText('Services for Runas Nórdicas - Hide Promotions: false')).toBeInTheDocument()
    expect(runasButton).toHaveClass('active')
    expect(tarotButton).not.toHaveClass('active')
  })
})
