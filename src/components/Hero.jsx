import { motion } from 'framer-motion'
import HeroContent from './ui/HeroContent'
import HeroImage from './ui/HeroImage'
import HeroScrollIndicator from './ui/HeroScrollIndicator'
import SEO from './ui/SEO'

const Hero = ({
  title = "VATES VESPERION",
  subtitle = "Aconselhamento e autoconhecimento através de oráculos.",
  typewriterTexts = ['Consultas de Tarot', 'Consultas de Baralho Cigano', 'Magias e Rituais'],
  ctaText = "Agendar Consulta",
  ctaLink = "https://wa.me/5521972592555?text=Olá%2C+gostaria+de+agendar+uma+consulta!",
  image = "/images/TransparentFrame.png",
  scrollText = "A Noite revela o que o Sol não ousa dizer",
  seo = {
    title: "Vates Vesperion - Leituras Oraculares Personalizadas",
    description: "Consultas de Tarot, Baralho Cigano e oráculos. Descubra mensagens do universo com Vates Vesperion.",
    image: "/hero-banner.png"
  },
  className = "",
  ...props
}) => {
  return (
    <>
      <SEO {...seo} />
      <motion.section
        id="hero"
        className={`relative flex flex-col lg:flex-row-reverse items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-8 lg:py-0 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        {...props}
      >
        {/* Conteúdo Textual */}
        <HeroContent
          title={title}
          subtitle={subtitle}
          typewriterTexts={typewriterTexts}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />

        {/* Imagem Hero */}
        <HeroImage
          src={image}
          alt={title}
        />

        {/* Indicador de Scroll */}
        <HeroScrollIndicator text={scrollText} />
      </motion.section>
    </>
  )
}

export default Hero