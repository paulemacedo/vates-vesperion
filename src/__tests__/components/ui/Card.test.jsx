import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Card from '../../components/ui/Card'

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

describe('Card Component', () => {
  const defaultProps = {
    title: 'Teste Card',
    description: 'Descrição do teste',
    variant: 'preco',
    price: 'R$ 50,00'
  }

  it('deve renderizar título e descrição', () => {
    render(<Card {...defaultProps} />)
    
    expect(screen.getByText('Teste Card')).toBeInTheDocument()
    expect(screen.getByText('Descrição do teste')).toBeInTheDocument()
  })

  it('deve mostrar preço quando variant é "preco"', () => {
    render(<Card {...defaultProps} />)
    
    expect(screen.getByText('R$ 50,00')).toBeInTheDocument()
  })

  it('deve mostrar desconto quando hasDiscount é true', () => {
    const props = {
      ...defaultProps,
      hasDiscount: true,
      originalPrice: 'R$ 60,00'
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('De R$ 60,00')).toBeInTheDocument()
    expect(screen.getByText('OFERTA')).toBeInTheDocument()
  })

  it('deve mostrar badge de indisponível com texto customizado', () => {
    const props = {
      ...defaultProps,
      indisponivel: true,
      badgeText: 'Em breve'
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('Em breve')).toBeInTheDocument()
  })

  it('deve mostrar badge de indisponível com texto padrão', () => {
    const props = {
      ...defaultProps,
      indisponivel: true
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('indisponivel')).toBeInTheDocument()
  })

  it('deve mostrar badge "Mais Popular" quando destacado', () => {
    const props = {
      ...defaultProps,
      destacado: true
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('⭐ Mais Popular')).toBeInTheDocument()
  })

  it('deve mostrar texto personalizado para badge popular', () => {
    const props = {
      ...defaultProps,
      destacado: true,
      popularText: '🏆 Melhor Escolha'
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('🏆 Melhor Escolha')).toBeInTheDocument()
  })

  it('deve renderizar ícone quando fornecido', () => {
    const mockIcon = <div data-testid="card-icon">🔮</div>
    const props = {
      ...defaultProps,
      icon: mockIcon
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByTestId('card-icon')).toBeInTheDocument()
    expect(screen.getByText('🔮')).toBeInTheDocument()
  })

  it('deve aplicar classe customizada', () => {
    const props = {
      ...defaultProps,
      className: 'custom-class'
    }
    
    const { container } = render(<Card {...props} />)
    const cardElement = container.firstChild
    
    expect(cardElement).toHaveClass('custom-class')
  })

  it('deve mostrar tanto badge de desconto quanto badge popular quando ambos estão ativos', () => {
    const props = {
      ...defaultProps,
      destacado: true,
      hasDiscount: true,
      originalPrice: 'R$ 60,00'
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('⭐ Mais Popular')).toBeInTheDocument()
    expect(screen.getByText('OFERTA')).toBeInTheDocument()
  })

  it('não deve mostrar badge de desconto quando card está indisponível', () => {
    const props = {
      ...defaultProps,
      hasDiscount: true,
      indisponivel: true,
      originalPrice: 'R$ 60,00'
    }
    
    render(<Card {...props} />)
    
    expect(screen.queryByText('OFERTA')).not.toBeInTheDocument()
    expect(screen.getByText('indisponivel')).toBeInTheDocument()
  })

  it('deve aplicar classes de destaque quando destacado é true', () => {
    const props = {
      ...defaultProps,
      destacado: true
    }
    
    const { container } = render(<Card {...props} />)
    const cardElement = container.firstChild
    
    expect(cardElement).toHaveClass('border-2', 'border-gold/80')
  })

  it('deve aplicar classes de indisponível quando indisponivel é true', () => {
    const props = {
      ...defaultProps,
      indisponivel: true
    }
    
    const { container } = render(<Card {...props} />)
    const cardElement = container.firstChild
    
    expect(cardElement).toHaveClass('opacity-60', 'saturate-50')
  })

  it('não deve mostrar preço quando variant não é "preco"', () => {
    const props = {
      ...defaultProps,
      variant: 'info',
      price: 'R$ 50,00'
    }
    
    render(<Card {...props} />)
    
    expect(screen.queryByText('R$ 50,00')).not.toBeInTheDocument()
  })

  it('deve renderizar sem descrição quando não fornecida', () => {
    const props = {
      title: 'Só Título',
      variant: 'preco',
      price: 'R$ 25,00'
    }
    
    render(<Card {...props} />)
    
    expect(screen.getByText('Só Título')).toBeInTheDocument()
    expect(screen.getByText('R$ 25,00')).toBeInTheDocument()
  })
})
