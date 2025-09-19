import React, { useEffect, useRef } from 'react'

const Arrow = ({ direction, onClick, disabled }) => {
  if (disabled) return null
  return (
    <button
      className={`oracle-arrow ${direction === "left" ? "oracle-arrow-left" : "oracle-arrow-right"}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
      tabIndex={0}
    >
      {direction === "left" ? (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M28 36L16 22L28 8" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M16 8L28 22L16 36" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}

/**
 * Componente Slider de Imagens reutilizável
 * @param {Array} images - Array de objetos {src, caption}
 * @param {number} currentIndex - Índice atual
 * @param {function} onNext - Função para avançar
 * @param {function} onPrev - Função para voltar
 * @param {function} onIndexChange - Função para mudar índice
 * @param {boolean} autoPlay - Ativa autoplay
 * @param {number} autoPlaySpeed - Intervalo do autoplay
 * @param {boolean} showArrows - Mostra setas de navegação
 * @param {ReactNode} fallback - Elemento para fallback de imagem
 */
const ImageSlider = ({ 
  images = [], 
  currentIndex = 0, 
  onNext, 
  onPrev, 
  onIndexChange,
  autoPlay = true,
  autoPlaySpeed = 4000,
  showArrows = false,
  fallback = null
}) => {
  const intervalRef = useRef(null)

  if (!images || !Array.isArray(images) || images.length === 0) {
    return fallback || (
      <div className="w-full h-64 bg-gold/10 rounded-lg flex items-center justify-center">
        <p className="text-gold/60">Nenhuma imagem disponível</p>
      </div>
    )
  }

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      intervalRef.current = setInterval(() => {
        onNext()
      }, autoPlaySpeed)
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, autoPlaySpeed, onNext, images.length])

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }
  const handleMouseLeave = () => {
    if (autoPlay && images.length > 1) {
      intervalRef.current = setInterval(() => {
        onNext()
      }, autoPlaySpeed)
    }
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-gold/20 to-purple-dark/50 rounded-2xl border border-gold/30 overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          className="w-full h-full object-cover"
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🔮</div>
            <p className="text-gold text-lg font-semibold mb-2">
              {images[currentIndex].caption}
            </p>
            <p className="text-gold/50 text-sm">📸 Foto em breve</p>
          </div>
        </div>
      </div>
      {showArrows && (
        <>
          <Arrow direction="left" onClick={onPrev} disabled={images.length <= 1} />
          <Arrow direction="right" onClick={onNext} disabled={images.length <= 1} />
        </>
      )}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`w-2 h-2 rounded-full transition ${currentIndex === index ? 'bg-gold' : 'bg-gold/30'}`}
          />
        ))}
      </div>
      <p className="text-center text-gold/80 text-sm mt-3 font-medium">
        {images[currentIndex]?.caption || 'Sem legenda'}
      </p>
    </div>
  )
}

export default ImageSlider
