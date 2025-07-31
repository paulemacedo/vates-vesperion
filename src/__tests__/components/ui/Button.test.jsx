import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '../../components/ui/Button'

// Mock do framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    button: ({ children, className, onClick, ...props }) => (
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    ),
    a: ({ children, className, href, ...props }) => (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    ),
  },
}))

describe('Button Component', () => {
  it('deve renderizar como button por padrão', () => {
    render(<Button>Clique aqui</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Clique aqui')
  })

  it('deve renderizar como link quando as="a"', () => {
    render(<Button as="a" href="/test">Link teste</Button>)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent('Link teste')
    expect(linkElement).toHaveAttribute('href', '/test')
  })

  it('deve aplicar classes CSS corretas com variant padrão', () => {
    render(<Button>Botão padrão</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('btn', 'btn-default', 'btn-md')
  })

  it('deve aplicar variant customizado', () => {
    render(<Button variant="primary">Botão primário</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('btn', 'btn-primary', 'btn-md')
  })

  it('deve aplicar size customizado', () => {
    render(<Button size="lg">Botão grande</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('btn', 'btn-default', 'btn-lg')
  })

  it('deve aplicar variant e size customizados juntos', () => {
    render(<Button variant="secondary" size="sm">Botão pequeno</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('btn', 'btn-secondary', 'btn-sm')
  })

  it('deve aplicar className customizado', () => {
    render(<Button className="custom-class">Botão customizado</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('btn', 'btn-default', 'btn-md', 'custom-class')
  })

  it('deve chamar onClick quando clicado', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Botão clicável</Button>)
    
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('deve passar props adicionais para o elemento', () => {
    render(<Button disabled data-testid="disabled-button">Botão desabilitado</Button>)
    
    const buttonElement = screen.getByTestId('disabled-button')
    expect(buttonElement).toBeDisabled()
  })

  it('deve renderizar children complexos', () => {
    render(
      <Button>
        <span>Ícone</span>
        <span>Texto</span>
      </Button>
    )
    
    expect(screen.getByText('Ícone')).toBeInTheDocument()
    expect(screen.getByText('Texto')).toBeInTheDocument()
  })

  it('deve funcionar como link com target e outras props', () => {
    render(
      <Button 
        as="a" 
        href="https://example.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Link externo
      </Button>
    )
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
  })

  describe('Variants disponíveis', () => {
    const variants = ['default', 'primary', 'secondary', 'danger', 'outline']
    
    variants.forEach(variant => {
      it(`deve aplicar variant ${variant} corretamente`, () => {
        render(<Button variant={variant}>Botão {variant}</Button>)
        
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveClass(`btn-${variant}`)
      })
    })
  })

  describe('Sizes disponíveis', () => {
    const sizes = ['sm', 'md', 'lg', 'xl']
    
    sizes.forEach(size => {
      it(`deve aplicar size ${size} corretamente`, () => {
        render(<Button size={size}>Botão {size}</Button>)
        
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toHaveClass(`btn-${size}`)
      })
    })
  })

  it('deve manter acessibilidade correta', () => {
    render(<Button aria-label="Botão de ação">🚀</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('aria-label', 'Botão de ação')
  })

  it('deve funcionar com type submit', () => {
    render(<Button type="submit">Enviar</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })
})
