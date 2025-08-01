import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const HeroImage = ({
  src,
  alt,
  showAnimatedRings = true,
  className = "",
  enableEasterEgg = true
}) => {
  const { currentCard } = useSelector(state => state.dailyCard)
  const [showCard, setShowCard] = useState(false)
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const [clickTimeout, setClickTimeout] = useState(null)

  useEffect(() => {
    console.log('🎭 Estado showCard mudou:', showCard)
    if (showCard) {
      console.log('🔮 Carta sendo exibida:', currentCard)
    }
  }, [showCard, currentCard])

  // Trigger do easter egg: 3 cliques consecutivos
  const handleImageClick = () => {
    console.log('Clique detectado!', { enableEasterEgg, currentCard: !!currentCard, clickCount })
    
    if (!enableEasterEgg || !currentCard) {
      console.log('Easter egg não ativado ou carta não carregada')
      return
    }
    
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
    
    if (newClickCount === 3) {
      console.log('🎉 TERCEIRO CLIQUE! Ativando Easter Egg!')
      setShowCard(true)
      setClickCount(0)
    } else {
      console.log(`👆 ${newClickCount}/3 cliques`)
      const timeout = setTimeout(() => {
        setClickCount(0)
      }, 2000)
      setClickTimeout(timeout)
    }
  }

  // Alterna conselhos a cada 4 segundos quando carta está visível
  useEffect(() => {
    if (!showCard || !currentCard) return
    
    const interval = setInterval(() => {
      setCurrentAdviceIndex(prev => 
        (prev + 1) % currentCard.conselhos.length
      )
    }, 4000)
    
    return () => clearInterval(interval)
  }, [showCard, currentCard])

  // Volta para imagem após 15 segundos
  useEffect(() => {
    if (!showCard) return
    
    const timeout = setTimeout(() => {
      setShowCard(false)
      setCurrentAdviceIndex(0)
    }, 15000)
    
    return () => clearTimeout(timeout)
  }, [showCard])

  // Cleanup timeout ao desmontar
  useEffect(() => {
    return () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout)
      }
    }
  }, [clickTimeout])

  return (
    <motion.div
      className={`relative mb-6 sm:mb-8 lg:mb-0 lg:w-1/2 mt-5 flex justify-center items-center order-1 lg:order-2 ${className}`}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        {!showCard ? (
          // ESTADO NORMAL: Imagem + Anéis
          <motion.div
            key="profile-container"
            className="relative"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              rotateY: -90
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Anéis Místicos Animados */}
            {showAnimatedRings && (
              <>
                {/* Yellow Ring */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/30 
                    w-50 h-48 xs:w-56 xs:h-64 md:w-56 md:h-64 lg:w-83 lg:h-80 xl:w-93 xl:h-90 pointer-events-none z-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                {/* Purple Ring */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20 
                    w-45 h-44 md:w-52 md:h-60 lg:w-78 lg:h-78 xl:w-88 xl:h-88 pointer-events-none z-0"
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
                className={`w-40 h-40 md:w-56 md:h-56 lg:w-70 lg:h-70 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl ${
                  enableEasterEgg && currentCard ? 'cursor-pointer hover:shadow-gold/20' : ''
                }`}
                whileHover={{ scale: enableEasterEgg && currentCard ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={handleImageClick}
              />
              
              {/* Brilho Interno */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
              
              {/* Indicador de Easter Egg */}
              {enableEasterEgg && clickCount > 0 && currentCard && (
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-sm font-bold text-purple-900 shadow-lg border-2 border-white"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1, 
                    rotate: [0, 360],
                    boxShadow: clickCount === 2 ? ['0 0 0 0 rgba(251, 191, 36, 0.7)', '0 0 0 10px rgba(251, 191, 36, 0)'] : '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  exit={{ scale: 0 }}
                  transition={{ 
                    duration: 0.3,
                    boxShadow: { duration: 1, repeat: clickCount === 2 ? Infinity : 0 }
                  }}
                >
                  {clickCount}
                </motion.div>
              )}

              {/* Dica visual quando está próximo - VERSÃO ELEGANTE COM CSS */}
              {enableEasterEgg && clickCount === 2 && currentCard && (
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 easter-egg-hint"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      🔮
                    </motion.div>
                    <span>Mais um toque...</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ✨
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          // ESTADO EASTER EGG: Carta de Tarot
          <motion.div
            key="tarot-container"
            className="relative"
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              rotateY: 90 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              rotateY: 90 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Carta de Tarot - Formato Retangular */}
            <motion.div
              className="relative w-48 h-80 md:w-56 md:h-96 lg:w-64 lg:h-104 rounded-xl shadow-2xl 
                bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden cursor-pointer
                border-4 border-gold/80"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                console.log('🖱️ Clicou na carta! Voltando para imagem...')
                setShowCard(false)
              }}
              style={{ perspective: '1000px' }}
            >
              {/* Imagem da Carta */}
              {currentCard?.img && (
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img 
                    src={currentCard.img} 
                    alt={currentCard.nome}
                    className="w-full h-full object-cover"
                    onLoad={() => console.log('✅ Imagem carregada:', currentCard.img)}
                    onError={(e) => {
                      console.log('❌ Erro ao carregar imagem:', currentCard.img)
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              )}

               {/* Fallback Pattern - MENOR Z-INDEX */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center -z-10">
                <div className="text-6xl opacity-20">🔮</div>
              </div>
              
              {/* Header da Carta */}
              <div className="absolute top-0 left-0 right-0 tarot-card-header p-4 text-center">
                <h3 className="tarot-card-title text-sm md:text-base mb-1">
                  {currentCard?.nome}
                </h3>
                <div className="tarot-card-symbol text-xs">
                  {currentCard?.simbolo}
                </div>
              </div>
              
              {/* Footer com Conselho */}
              <div className="absolute bottom-0 left-0 right-0 tarot-card-footer p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAdviceIndex}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-xs text-gold/60 mb-2">
                      Conselho {currentAdviceIndex + 1} de {currentCard?.conselhos?.length}
                    </div>
                    <div className="tarot-card-advice text-xs md:text-sm">
                      "{currentCard?.conselhos[currentAdviceIndex]}"
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Brilho mágico */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Borda pulsante */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-gold/50 pointer-events-none"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 20px rgba(251, 191, 36, 0.3)',
                    '0 0 40px rgba(251, 191, 36, 0.6)',
                    '0 0 20px rgba(251, 191, 36, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Partículas místicas ao redor da carta */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gold rounded-full"
                  style={{
                    left: `${10 + (i % 4) * 25}%`,
                    top: `${10 + Math.floor(i / 4) * 30}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Indicador Easter Egg - VERSÃO ELEGANTE COM CSS
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 easter-egg-activated"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  🔮
                </motion.div>
                
                <span className="tracking-wide">Carta Revelada</span>
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>
              </div>
              
              // Partículas douradas pequenas 
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="easter-egg-particle"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: '50%',
                    }}
                    animate={{
                      y: [-8, 8, -8],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default HeroImage