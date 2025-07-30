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
}) => {
  const badge = badgeText !== undefined ? badgeText : 'indisponivel'
  
  return (
    <motion.div
      className={[
        'relative bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[20rem] flex flex-col h-80',
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
              boxShadow: '0 20px 40px -12px rgba(255, 215, 0, 0.3)',
              borderColor: 'rgba(255, 215, 0, 0.4)'
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
      {/* Badge para serviços indisponíveis */}
      {indisponivel && (
        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-gold to-yellow-500 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {badge}
        </span>
      )}

      {/* Badge de desconto */}
      {hasDiscount && !indisponivel && (
        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
          OFERTA
        </span>
      )}

      {/* Ícone */}
      <div className="flex flex-col items-center mb-6">
        {icon && (
          <div className="text-gold flex justify-center rounded-full w-fit mx-auto ">
            {icon}
          </div>
        )}

        {/* Título */}
        <h3 className="text-gold text-xl font-vollkorn font-semibold tracking-wide text-center">
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
              <p className="text-3xl text-gold font-bold">
                {price}
              </p>
            </div>
          ) : (
            <p className="text-3xl text-gold font-bold">
              {price}
            </p>
          )}
        </div>
      )}

      {/* Descrição */}
      {description && (
        <p className="text-sm text-primary/80 leading-relaxed text-center">
          {description}
        </p>
      )}

      {/* Efeito decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-t-2xl"></div>
    </motion.div>
  )
}

export default Card