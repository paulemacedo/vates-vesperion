import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CategoryFilter from '../../components/ui/CategoryFilter'

// Mock do framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
}))

const mockCategories = [
  { id: 'tarot', name: 'Tarot' },
  { id: 'cigano', name: 'Baralho Cigano' },
  { id: 'sibilla', name: 'Sibilla' },
  { id: 'runas', name: 'Runas Nórdicas' }
]

describe('CategoryFilter Component', () => {
  const mockOnCategoryChange = vi.fn()
  
  const defaultProps = {
    categories: mockCategories,
    activeCategory: 'tarot',
    onCategoryChange: mockOnCategoryChange
  }

  beforeEach(() => {
    mockOnCategoryChange.mockClear()
  })

  it('deve renderizar todas as categorias', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    mockCategories.forEach(category => {
      expect(screen.getByText(category.name)).toBeInTheDocument()
    })
  })

  it('deve destacar a categoria ativa', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const activeButton = screen.getByRole('button', { name: /tarot/i })
    expect(activeButton).toHaveClass('bg-gold', 'text-midnight', 'border-gold', 'font-semibold')
  })

  it('deve aplicar estilos corretos para categorias inativas', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const inactiveButton = screen.getByRole('button', { name: /baralho cigano/i })
    expect(inactiveButton).toHaveClass('border-gold/30', 'text-gold')
    expect(inactiveButton).not.toHaveClass('bg-gold', 'text-midnight')
  })

  it('deve chamar onCategoryChange ao clicar em uma categoria', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const ciganoButton = screen.getByRole('button', { name: /baralho cigano/i })
    fireEvent.click(ciganoButton)
    
    expect(mockOnCategoryChange).toHaveBeenCalledWith('cigano')
    expect(mockOnCategoryChange).toHaveBeenCalledTimes(1)
  })

  it('deve mostrar badge "Em breve" para sibilla', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const sibillaContainer = screen.getByRole('button', { name: /sibilla/i })
    const badge = sibillaContainer.querySelector('.absolute')
    
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent('Em breve')
    expect(badge).toHaveClass('bg-gold', 'text-midnight')
  })

  it('deve mostrar badge "Em breve" para runas', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const runasContainer = screen.getByRole('button', { name: /runas nórdicas/i })
    const badge = runasContainer.querySelector('.absolute')
    
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent('Em breve')
    expect(badge).toHaveClass('bg-gold', 'text-midnight')
  })

  it('não deve mostrar badge "Em breve" para tarot e cigano', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const tarotContainer = screen.getByRole('button', { name: /tarot/i })
    const ciganoContainer = screen.getByRole('button', { name: /baralho cigano/i })
    
    expect(tarotContainer.querySelector('.absolute')).not.toBeInTheDocument()
    expect(ciganoContainer.querySelector('.absolute')).not.toBeInTheDocument()
  })

  it('deve renderizar todos os botões como clickáveis', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    mockCategories.forEach(category => {
      const button = screen.getByRole('button', { name: category.name })
      expect(button).toBeEnabled()
    })
  })

  it('deve mudar categoria ativa ao clicar em diferentes categorias', () => {
    const { rerender } = render(<CategoryFilter {...defaultProps} />)
    
    // Clicar em cigano
    const ciganoButton = screen.getByRole('button', { name: /baralho cigano/i })
    fireEvent.click(ciganoButton)
    
    expect(mockOnCategoryChange).toHaveBeenCalledWith('cigano')
    
    // Simular mudança de activeCategory
    rerender(
      <CategoryFilter 
        {...defaultProps} 
        activeCategory="cigano" 
      />
    )
    
    // Verificar se cigano está agora ativo
    const activeCiganoButton = screen.getByRole('button', { name: /baralho cigano/i })
    expect(activeCiganoButton).toHaveClass('bg-gold', 'text-midnight')
    
    // Verificar se tarot não está mais ativo
    const tarotButton = screen.getByRole('button', { name: /tarot/i })
    expect(tarotButton).not.toHaveClass('bg-gold', 'text-midnight')
  })

  it('deve funcionar com array vazio de categorias', () => {
    const props = {
      ...defaultProps,
      categories: []
    }
    
    render(<CategoryFilter {...props} />)
    
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('deve aplicar classes de posicionamento para badges corretamente', () => {
    render(<CategoryFilter {...defaultProps} />)
    
    const sibillaContainer = screen.getByRole('button', { name: /sibilla/i })
    const badge = sibillaContainer.querySelector('.absolute')
    
    expect(badge).toHaveClass('-top-4', '-right-3', 'rounded-full', 'text-xs', 'px-2', 'py-1', 'font-bold')
  })
})
