import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import SEO from '../../components/ui/SEO'

describe('SEO Component', () => {
  beforeEach(() => {
    // Limpar o head antes de cada teste
    document.head.innerHTML = `
      <title></title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta property="og:type" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
    `
  })

  afterEach(() => {
    // Limpar scripts estruturados
    const script = document.getElementById('structured-data')
    if (script) script.remove()
  })

  it('deve atualizar o título da página com valores padrão', () => {
    render(<SEO />)
    
    expect(document.title).toBe('Vates Vesperion - Leituras Oraculares')
  })

  it('deve atualizar o título da página com valor customizado', () => {
    const customTitle = 'Teste de Título - Vates Vesperion'
    render(<SEO title={customTitle} />)
    
    expect(document.title).toBe(customTitle)
  })

  it('deve atualizar meta tag de descrição', () => {
    const description = 'Descrição personalizada para teste'
    render(<SEO description={description} />)
    
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription?.getAttribute('content')).toBe(description)
  })

  it('deve atualizar todas as meta tags Open Graph', () => {
    const props = {
      title: 'Teste OG Title',
      description: 'Teste OG Description',
      url: 'https://teste.com',
      image: '/teste.jpg',
      type: 'article'
    }
    
    render(<SEO {...props} />)
    
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(props.title)
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe(props.description)
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(`${props.url}${props.image}`)
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(props.url)
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe(props.type)
  })

  it('deve atualizar todas as meta tags Twitter', () => {
    const props = {
      title: 'Teste Twitter Title',
      description: 'Teste Twitter Description',
      url: 'https://teste.com',
      image: '/twitter-teste.jpg'
    }
    
    render(<SEO {...props} />)
    
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe(props.title)
    expect(document.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe(props.description)
    expect(document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe(`${props.url}${props.image}`)
    expect(document.querySelector('meta[name="twitter:url"]')?.getAttribute('content')).toBe(props.url)
  })

  it('deve criar script estruturado com dados corretos', () => {
    const props = {
      title: 'Teste Structured Data',
      description: 'Teste Description',
      url: 'https://teste.com',
      image: '/structured-teste.jpg'
    }
    
    render(<SEO {...props} />)
    
    const script = document.getElementById('structured-data')
    expect(script).toBeTruthy()
    expect(script?.type).toBe('application/ld+json')
    
    const structuredData = JSON.parse(script?.textContent || '{}')
    expect(structuredData['@context']).toBe('https://schema.org')
    expect(structuredData['@type']).toBe('WebSite')
    expect(structuredData.name).toBe('Vates Vesperion')
    expect(structuredData.description).toBe(props.description)
    expect(structuredData.url).toBe(props.url)
    expect(structuredData.image).toBe(`${props.url}${props.image}`)
    expect(structuredData.author['@type']).toBe('Person')
    expect(structuredData.author.name).toBe('Vates Vesperion')
  })

  it('deve remover script estruturado existente antes de criar novo', () => {
    // Criar um script existente
    const existingScript = document.createElement('script')
    existingScript.id = 'structured-data'
    existingScript.type = 'application/ld+json'
    existingScript.textContent = JSON.stringify({ old: 'data' })
    document.head.appendChild(existingScript)
    
    expect(document.getElementById('structured-data')).toBeTruthy()
    
    // Renderizar componente SEO
    render(<SEO title="Novo título" />)
    
    // Verificar se só existe um script e se é o novo
    const scripts = document.querySelectorAll('#structured-data')
    expect(scripts.length).toBe(1)
    
    const newStructuredData = JSON.parse(scripts[0].textContent || '{}')
    expect(newStructuredData.old).toBeUndefined()
    expect(newStructuredData.name).toBe('Vates Vesperion')
  })

  it('deve usar valores padrão quando props não são fornecidas', () => {
    render(<SEO />)
    
    const script = document.getElementById('structured-data')
    const structuredData = JSON.parse(script?.textContent || '{}')
    
    expect(structuredData.description).toBe('Leituras oraculares. Descubra mensagens, orientações e reflexões através de Vates Vesperion.')
    expect(structuredData.url).toBe('https://vatesvesperion.vercel.app')
    expect(structuredData.image).toBe('https://vatesvesperion.vercel.app/hero-banner.png')
  })

  it('não deve atualizar meta tag se elemento não existir', () => {
    // Remover uma meta tag específica
    const metaToRemove = document.querySelector('meta[name="description"]')
    if (metaToRemove) {
      metaToRemove.remove()
    }
    
    // Renderizar SEO - não deve dar erro
    expect(() => render(<SEO description="Teste sem meta tag" />)).not.toThrow()
  })

  it('deve re-renderizar quando props mudarem', () => {
    const { rerender } = render(<SEO title="Título inicial" />)
    
    expect(document.title).toBe('Título inicial')
    
    rerender(<SEO title="Título atualizado" />)
    
    expect(document.title).toBe('Título atualizado')
  })
})
