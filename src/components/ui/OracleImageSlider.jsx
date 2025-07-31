import React from 'react'

const OracleImageSlider = ({ images, currentIndex, onNext, onPrev, onIndexChange }) => {
  return (
    <div className="relative">
      <div className="aspect-[4/3] bg-gradient-to-br from-gold/20 to-purple-dark/50 rounded-2xl border border-gold/30 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🔮</div>
            <p className="text-gold text-lg font-semibold mb-2">
              {images[currentIndex].caption}
            </p>
            <p className="text-gold/50 text-sm">📸 Foto em breve</p>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button 
        onClick={onPrev} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-midnight/80 border border-gold/30 text-gold p-2 rounded-full hover:bg-gold hover:text-midnight transition"
      >
        ←
      </button>
      <button 
        onClick={onNext} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-midnight/80 border border-gold/30 text-gold p-2 rounded-full hover:bg-gold hover:text-midnight transition"
      >
        →
      </button>

      {/* Indicadores */}
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
        {images[currentIndex].caption}
      </p>
    </div>
  )
}

export default OracleImageSlider