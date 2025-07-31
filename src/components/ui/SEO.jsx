import { useEffect } from 'react'

const SEO = ({ 
  title = "Vates Vesperion", 
  description = "Leituras oraculares. Descubra mensagens, orientações e reflexões através de Vates Vesperion.",
  image = "/Meta.png",
  url = "https://vatesvesperion.vercel.app"
}) => {
  useEffect(() => {
    // Atualizar título
    document.title = title
    
    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
    
    // Atualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    
    if (ogTitle) ogTitle.setAttribute('content', title)
    if (ogDescription) ogDescription.setAttribute('content', description)
    if (ogImage) ogImage.setAttribute('content', `${url}${image}`)
    if (ogUrl) ogUrl.setAttribute('content', url)
    
    // Atualizar Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    
    if (twitterTitle) twitterTitle.setAttribute('content', title)
    if (twitterDescription) twitterDescription.setAttribute('content', description)
    if (twitterImage) twitterImage.setAttribute('content', `${url}${image}`)
  }, [title, description, image, url])

  return null
}

export default SEO