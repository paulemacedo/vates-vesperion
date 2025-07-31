import { motion } from 'framer-motion'

const HeroImage = ({
  src,
  alt,
  showAnimatedRings = true,
  className = ""
}) => {
  return (
    <motion.div
      className={`relative mb-6 sm:mb-8 lg:mb-0 lg:w-1/2 mt-5 flex justify-center items-center order-1 lg:order-2 ${className}`}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      {/* Anéis Místicos Animados */}
      {showAnimatedRings && (
        <>
          {/* Yellow Ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/30 
              w-50 h-48 xs:w-56 xs:h-64 sm:w-60 sm:h-72 md:w-73 md:h-76 lg:w-83 lg:h-80 xl:w-93 xl:h-90 pointer-events-none z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          {/* Purple Ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20 
              w-45 h-44 xs:w-52 xs:h-60 sm:w-56 sm:h-68 md:w-71 md:h-78 lg:w-78 lg:h-78 xl:w-88 xl:h-88 pointer-events-none z-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {/* Container da Imagem */}
      <div className="relative p-1 sm:p-2 rounded-full bg-gradient-to-br from-gold/30 to-purple-500/30 backdrop-blur-sm z-10">
        <motion.img
          src={src}
          alt={alt}
          className="w-40 h-40 xs:w-56 xs:h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-70 lg:h-70 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {/* Brilho Interno */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default HeroImage