import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { GiMoonBats } from 'react-icons/gi'
import Button from './Button'

const HeroContent = ({
  title,
  subtitle,
  typewriterTexts,
  ctaText,
  ctaLink,
  titleVariant = "gradient",
  showDecorative = true
}) => {
  return (
    <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1 px-4 lg:px-0 lg:pr-8">
      
      {/* Título Principal */}
      <motion.h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight ${
          titleVariant === "gradient" 
            ? "text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold"
            : "text-gold"
        }`}
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        style={{
          filter: titleVariant === "gradient" ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' : 'none'
        }}
      >
        {title}
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.div
        className="relative text-primary/70 mb-6 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex items-center justify-center lg:justify-start w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <GiMoonBats className="mr-2 text-primary/70 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex-shrink-0" />
        <TypeAnimation
          sequence={typewriterTexts.map(text => [text, 2000, '', 300]).flat()}
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
        
        {/* Elementos Decorativos */}
        {showDecorative && (
          <>
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
          </>
        )}
      </motion.div>

      {/* Subtítulo */}
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/70 font-light mb-6 lg:mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {subtitle}
      </motion.p>
      
      {/* Call to Action */}
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
            className="absolute inset-0 rounded-full blur-xl bg-gold/30"
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
          <Button
            as="a"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="relative z-10 px-6 sm:px-8 lg:px-10 xl:px-12 py-3 lg:py-3 xl:py-4 text-sm sm:text-base lg:text-base xl:text-lg font-semibold"
          >
            {ctaText}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroContent