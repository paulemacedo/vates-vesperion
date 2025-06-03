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
    <motion.section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden px-2 sm:px-10 max-w-[1100px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

          {/* Coluna Direita: Foto */}
          <motion.div
        className="relative mb-6 sm:mb-8 md:mb-0 md:w-1/2 mt-5 flex justify-center items-center"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {/* Mystical Ring Animation */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/30 
            w-50 h-48 xs:w-56 xs:h-64 sm:w-60 sm:h-72 md:w-64 md:h-80 lg:w-93 lg:h-90 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20 
            w-45 h-44 xs:w-52 xs:h-60 sm:w-56 sm:h-68 md:w-60 md:h-76 lg:w-88 lg:h-88 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        {/* Enhanced Image Container */}
        <div className="relative p-1 sm:p-2 rounded-full bg-gradient-to-br from-gold/30 to-purple-500/30 backdrop-blur-sm">
          <motion.img
            src={tframe}
            alt="Vates Vesperion"
            className="w-40 h-40 xs:w-56 xs:h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {/* Inner Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>
      
      {/* Coluna Esquerda: Texto */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-full sm:max-w-2xl mx-auto px-2 md:w-1/2">
        {/* Title */}
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold mb-2 sm:mb-4"
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
          className="relative text-primary/70 mb-6 xs:mb-8 text-bsase xs:text-xl sm:text-2xl flex items-center justify-center md:justify-start w-full min-w-[20ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
            {/* Texto invisível para reservar espaço */}
          <GiMoonBats className="mr-2 text-primary/70 text-2xl sm:text-4xl" />
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
              minWidth: '20ch',
            }}
            repeat={Infinity}
            cursor={false}
          />
          {/* Decorative Elements */}
          <motion.div
            className="hidden xs:block absolute -left-4 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-6 h-px bg-gradient-to-r from-gold to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
          <motion.div
            className="hidden xs:block absolute -right-4 sm:-right-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-6 h-px bg-gradient-to-l from-gold to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg xs:text-xl sm:text-2xl text-primary/70 font-light "
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Aconselhamento e autoconhecimento através de oráculos.
        </motion.p>
        {/* Espaço entre CTA e Social Media */}
        <div className="h-6" />
        {/* Social Media Links */}
              
        {/* CTA button + Social Media Links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-6 sm:mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {/* CTA Button */}
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
                className="px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gold/50"
              >
                Agendar Consulta
              </Button>
            </a>
            
          </motion.div>
        
          {/* Social Media Icons
          <motion.div
            className="flex gap-4 mt-4 sm:mt-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
          >
            <a href="wa.me/5521969079474" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-gold text-2xl sm:text-3xl hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/vatesvesperion/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gold text-2xl sm:text-3xl hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a href="https://www.tiktok.com/@vatesvesperion" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-gold text-2xl sm:text-3xl hover:text-yellow-300 transition-colors duration-300" />
            </a>
            <a href="https://www.youtube.com/@vatesvesperion" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gold text-2xl sm:text-3xl hover:text-yellow-300 transition-colors duration-300" />
            </a>
          </motion.div> */}
        </motion.div>
        
      </div>
  
  


      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-8 flex flex-col items-center w-50 sm:w-100 px-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        {/* Subtitle for mobile: show above scroll indicator */}
        <motion.h3
          className="block sm:text-2xl font-vollkorn text-bA xs:text-lg text-gold/70 font-light tracking-wide mb-3 text-center pointer-events-none w-full"
          style={{ maxWidth: '320px', width: '100%' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          A Noite revela o que o Sol não ousa dizer
        </motion.h3>
        <motion.div
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gold/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 sm:h-3 bg-gold/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero