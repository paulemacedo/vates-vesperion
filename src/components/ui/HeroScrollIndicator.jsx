import { motion } from 'framer-motion'

const HeroScrollIndicator = ({ 
  text = "Role para baixo", 
  show = true,
  className = ""
}) => {
  if (!show) return null

  return (
    <motion.div
      className={`absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-6 lg:bottom-8 flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <motion.h3
        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-vollkorn text-gold/70 font-light tracking-wide mb-3 text-center max-w-xs sm:max-w-sm lg:max-w-md"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {text}
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
  )
}

export default HeroScrollIndicator