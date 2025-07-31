import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import tframe from '../assets/images/TransparentFrame.png'
import frame from '../assets/images/Frame.png'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react'
import { GiCrystalBall, GiCardJoker, GiPentacle, GiDragonfly, GiMoonBats } from 'react-icons/gi'
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";
import star from '../assets/images/stars.gif'
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube} from 'react-icons/fa';
import SEO from './ui/SEO'

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const texts = [
    'Consultas de Tarot',
    'Consultas de Baralho Cigano',
    'Magias e Rituais'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [texts.length])
  
  return (
     <>
      <SEO 
        title="Vates Vesperion - Leituras Oraculares Personalizadas"
        description="Consultas de Tarot, Baralho Cigano e oráculos. Descubra mensagens do universo com Vates Vesperion."
        image="/hero-banner.png"
      />
    <motion.section
      id="hero"
      className="relative flex flex-col lg:flex-row-reverse items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-8 lg:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Coluna Esquerda: Texto */}
      <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1 px-4 lg:px-0 lg:pr-8">
        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold mb-3 sm:mb-4 lg:mb-6 leading-tight"
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
          }}
        >
          VATES VESPERION
        </motion.h1>
  
        {/* Typewriter */}
        <motion.div
          className="relative text-primary/70 mb-6 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex items-center justify-center lg:justify-start w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <GiMoonBats className="mr-2 text-primary/70 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex-shrink-0" />
          <TypeAnimation
            sequence={[
              ...texts.map(t => [t, 2000, '', 300]).flat()
            ]}
            wrapper="span"
            speed={50}
            style={{
              color: 'var(--primary)',
              fontFamily: 'var(--font-vollkorn)',
              fontSize: 'inherit',
              display: 'inline-block',
              minWidth: '250px',
            }}
            repeat={Infinity}
            cursor={false}
          />
          {/* Decorative Elements */}
          <motion.div
            className="hidden xl:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-r from-gold to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
          <motion.div
            className="hidden xl:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-l from-gold to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/70 font-light mb-6 lg:mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Aconselhamento e autoconhecimento através de oráculos.
        </motion.p>
        
        {/* CTA button */}
        <motion.div
          className="mb-8 lg:mb-0"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <a
              href="https://wa.me/5521972592555?text=Olá%2C+gostaria+de+agendar+uma+consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10"
            >
              <Button
                variant="primary"
                size="lg"
                className="px-6 sm:px-8 lg:px-10 xl:px-12 py-3 lg:py-3 xl:py-4 text-sm sm:text-base lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gold/50"
              >
                Agendar Consulta
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Coluna Direita: Foto */}
      <motion.div
        className="relative mb-6 sm:mb-8 lg:mb-0 lg:w-1/2 mt-5 flex justify-center items-center order-1 lg:order-2"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* Mystical Ring Animation */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/30 
            w-50 h-48 xs:w-56 xs:h-64 sm:w-60 sm:h-72 md:w-64 md:h-80 lg:w-83 lg:h-80 xl:w-93 xl:h-90 pointer-events-none z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20 
            w-45 h-44 xs:w-52 xs:h-60 sm:w-56 sm:h-68 md:w-60 md:h-76 lg:w-78 lg:h-78 xl:w-88 xl:h-88 pointer-events-none z-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        {/* Enhanced Image Container */}
        <div className="relative p-1 sm:p-2 rounded-full bg-gradient-to-br from-gold/30 to-purple-500/30 backdrop-blur-sm z-10">
          <motion.img
            src={tframe}
            alt="Vates Vesperion"
            className="w-40 h-40 xs:w-56 xs:h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-70 lg:h-70 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {/* Inner Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-6 lg:bottom-8 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.h3
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-vollkorn text-gold/70 font-light tracking-wide mb-3 text-center max-w-xs sm:max-w-sm lg:max-w-md"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          A Noite revela o que o Sol não ousa dizer
        </motion.h3>
        <motion.div
          className="w-4 sm:w-5 lg:w-6 h-6 sm:h-8 lg:h-10 border-2 border-gold/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 sm:h-3 bg-gold/70 rounded-full mt-1 sm:mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  </>
  )
}

export default Hero