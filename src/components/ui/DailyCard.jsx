import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDailyCardFromStorage } from '../../redux/slices/dailyCardSlice'

const DailyCard = ({ 
  className = "",
  showTitle = true,
  autoRotateAdvice = true,
  adviceInterval = 4000
}) => {
  const dispatch = useDispatch()
  const { currentCard } = useSelector(state => state.dailyCard)
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  // Carregar carta diária ao montar componente
  useEffect(() => {
    dispatch(loadDailyCardFromStorage())
  }, [dispatch])

  // Rotacionar conselhos automaticamente
  useEffect(() => {
    if (!autoRotateAdvice || !currentCard) return
    
    const interval = setInterval(() => {
      setCurrentAdviceIndex(prev => 
        (prev + 1) % currentCard.conselhos.length
      )
    }, adviceInterval)
    
    return () => clearInterval(interval)
  }, [currentCard, autoRotateAdvice, adviceInterval])

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  const handleAdviceClick = (e) => {
    e.stopPropagation()
    setCurrentAdviceIndex(prev => 
      (prev + 1) % currentCard.conselhos.length
    )
  }

  if (!currentCard) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
      </div>
    )
  }

  return (
    <div className={`perspective-1000 ${className}`}>
      {showTitle && (
        <motion.h3 
          className="text-lg md:text-xl font-bold text-center mb-4 text-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          🔮 Carta do Dia
        </motion.h3>
      )}
      
      <motion.div
        className="daily-card-container"
        onClick={handleCardClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div
          className="daily-card-flip"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Frente da Carta - Imagem */}
          <div className="daily-card-front">
            <div className="relative w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 p-4 flex flex-col items-center justify-center">
              {currentCard.img ? (
                <img 
                  src={currentCard.img} 
                  alt={currentCard.nome}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    console.log('Erro ao carregar imagem:', currentCard.img)
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              
              {/* Fallback quando não há imagem */}
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-purple-500/20 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-4xl">🔮</span>
              </div>
              
              {/* Nome da carta na frente */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center">
                <h4 className="font-bold text-sm">{currentCard.nome}</h4>
              </div>
            </div>
          </div>

          {/* Verso da Carta - Informações */}
          <div className="daily-card-back">
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 p-6 flex flex-col justify-between text-white">
              {/* Header */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">{currentCard.nome}</h4>
                <div className="text-sm opacity-80 mb-4">
                  {currentCard.simbolo}
                </div>
              </div>
              
              {/* Conselho do dia */}
              <div className="flex-1 flex items-center justify-center">
                <div 
                  className="text-center cursor-pointer p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  onClick={handleAdviceClick}
                >
                  <div className="text-xs uppercase tracking-wide mb-2 opacity-70">
                    Conselho {currentAdviceIndex + 1} de {currentCard.conselhos.length}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentAdviceIndex}
                      className="text-sm md:text-base leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      "{currentCard.conselhos[currentAdviceIndex]}"
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Footer */}
              <div className="text-center text-xs opacity-60">
                Clique para virar • Toque no conselho para alternar
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DailyCard