import { motion } from 'framer-motion'

const Card = ({
  title,
  description,
  price,
  originalPrice,
  icon,
  variant = 'preco',
  className = '',
  indisponivel = false,
  hasDiscount = false,
  badgeText,
  destacado = false,
  popularText = '⭐ Mais Popular',
}) => {
  const badge = badgeText !== undefined ? badgeText : 'indisponivel'
  
  return (
    <motion.div
      className={[
        'relative bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[18rem] flex flex-col',
        destacado 
          ? 'border-2 border-gold/80 border-pulse-animation bg-gradient-to-br from-gold/10 via-purple-dark/20 to-gold/10' 
          : 'border-gold/20',
        indisponivel && 'opacity-60 saturate-50',
        className,
      ].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={
        indisponivel
          ? {}
          : { 
              scale: 1.02, 
              boxShadow: destacado 
                ? '0 25px 50px -12px rgba(255, 215, 0, 0.4)' 
                : '0 20px 40px -12px rgba(255, 215, 0, 0.3)',
              borderColor: destacado 
                ? 'rgba(255, 215, 0, 1)' 
                : 'rgba(255, 215, 0, 0.4)'
            }
      }
      transition={{
        duration: 0.7,
        delay: 0.1,
        scale: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      }}
      viewport={{ once: true }}
    >
      {/* Container de Badges no Topo */}
      <div className="absolute -top-3 left-0 right-0 flex justify-center items-center gap-2 z-10">
        {/* Badge Mais Popular */}
        {destacado && (
          <span className="bg-gold-gradient text-midnight px-3 py-1 rounded-full text-xs font-montserrat font-semibold uppercase tracking-wider shadow-lg">
            {popularText}
          </span>
        )}

        {/* Badge de Desconto */}
        {hasDiscount && !indisponivel && (
          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
            OFERTA
          </span>
        )}

        {/* Badge Indisponível */}
        {indisponivel && (
          <span className="bg-gradient-to-r from-gold to-yellow-500 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Ícone */}
      <div className="flex flex-col items-center mb-6 mt-2">
        {icon && (
          <div className="text-gold flex justify-center rounded-full w-fit mx-auto">
            {icon}
          </div>
        )}

        {/* Título */}
        <h3 className={`text-xl font-vollkorn font-semibold tracking-wide text-center ${
          destacado ? 'text-gold' : 'text-gold'
        }`}>
          {title}
        </h3>
      </div>

      {/* Preço */}
      {price && variant === 'preco' && (
        <div className="mb-6 text-center">
          {hasDiscount ? (
            <div className="space-y-1">
              <p className="text-sm text-primary/60 line-through">
                De {originalPrice}
              </p>
              <p className={`text-3xl font-bold ${
                destacado ? 'text-gold' : 'text-gold'
              }`}>
                {price}
              </p>
            </div>
          ) : (
            <p className={`text-3xl font-bold ${
              destacado ? 'text-gold' : 'text-gold'
            }`}>
              {price}
            </p>
          )}
        </div>
      )}

      {/* Descrição */}
      {description && (
        <p className={`text-sm leading-relaxed text-center ${
          destacado ? 'text-primary/90 font-medium' : 'text-primary/80'
        }`}>
          {description}
        </p>
      )}

      {/* Efeito decorativo */}
      <div className={`absolute top-0 left-1  h-1 rounded-t-2xl ${
        destacado 
          ? 'bg-gradient-to-r border-top-pulse from-gold/50 w-[97%]  via-gold to-gold/50' 
          : 'bg-gradient-to-r from-transparent w-full via-gold/30 to-transparent'
      }`}></div>
    </motion.div>
  )
}

export default Card