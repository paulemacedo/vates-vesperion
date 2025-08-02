import React from 'react'

const OracleInfo = ({ oracle, activeCategory }) => {
  // Adicionar verificação se oracle existe
  if (!oracle) {
    return null
  }

  const hasServices = oracle.services && oracle.services.length > 0

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl md:text-4xl text-gold font-vollkorn font-bold mb-4">
          {oracle.title}
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-gold font-semibold mb-2">O que é:</h4>
            <p className="text-primary text-sm md:text-base leading-relaxed">
              {oracle.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-gold font-semibold mb-2">Para que é útil:</h4>
            <p className="text-primary text-sm md:text-base leading-relaxed">
              {oracle.usage}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm">
            {(activeCategory === 'sibilla' || activeCategory === 'runas') ? (
              <>🔮 Em desenvolvimento</>
            ) : (
              <>✨ {hasServices ? oracle.services.length : 0} serviços disponíveis</>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OracleInfo