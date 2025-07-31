import { useEffect } from 'react'

const SEO = ({ 
  title = "Vates Vesperion - Leituras Oraculares", 
  description = "Leituras oraculares. Descubra mensagens, orientações e reflexões através de Vates Vesperion.",
  image = "/hero-banner.png",
  url = "https://vatesvesperion.vercel.app",
  type = "website"
}) => {
  useEffect(() => {
    // Atualizar título
    document.title = title
    
    // Função helper para atualizar meta tags
    const updateMetaTag = (selector, attribute, value) => {
      const element = document.querySelector(selector)
      if (element && value) {
        element.setAttribute(attribute, value)
      }
    }
    
    // Atualizar meta tags básicas
    updateMetaTag('meta[name="description"]', 'content', description)
    
    // Atualizar Open Graph
    updateMetaTag('meta[property="og:title"]', 'content', title)
    updateMetaTag('meta[property="og:description"]', 'content', description)
    updateMetaTag('meta[property="og:image"]', 'content', `${url}${image}`)
    updateMetaTag('meta[property="og:url"]', 'content', url)
    updateMetaTag('meta[property="og:type"]', 'content', type)
    
    // Atualizar Twitter
    updateMetaTag('meta[name="twitter:title"]', 'content', title)
    updateMetaTag('meta[name="twitter:description"]', 'content', description)
    updateMetaTag('meta[name="twitter:image"]', 'content', `${url}${image}`)
    updateMetaTag('meta[name="twitter:url"]', 'content', url)
    
    // Adicionar meta tags estruturadas para melhor SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vates Vesperion",
      "description": description,
      "url": url,
      "image": `${url}${image}`,
      "author": {
        "@type": "Person",
        "name": "Vates Vesperion"
      }
    }
    
    // Remover script existente se houver
    const existingScript = document.getElementById('structured-data')
    if (existingScript) {
      existingScript.remove()
    }
    
    // Adicionar novo script estruturado
    const script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
  }, [title, description, image, url, type])

  return null
}

export default SEO