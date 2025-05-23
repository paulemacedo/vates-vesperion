import { motion } from 'framer-motion'

const Card = ({
  title,
  description,
  price,
  originalPrice,
  icon,
  variant = 'preco', // 'preco' ou 'servico'
  className = '',
}) => {
  return (
    <motion.div
      className={`border border-gold rounded-lg p-6 text-center bg-midnight transition-shadow ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)' }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        scale: { duration: 0.3 }, 
        boxShadow: { duration: 0.3 }, 
      }}
      viewport={{ once: true }}
    >
      {variant === 'servico' && icon && (
        <div className="mb-4 text-gold">
          {icon}
        </div>
      )}

      <h3 className="text-gold text-sm font-montserrat uppercase tracking-wide mb-2">
        {title}
      </h3>

      {variant === 'preco' && (
        <div className="mb-6 relative inline-block">
          {/* Preço original (maior e riscado) */}
          <p className="text-5xl text-gold/20 line-through">
            {originalPrice}
          </p>
          {/* Preço com desconto (posicionado por cima) */}
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xl text-primary shadow-md font-bold ">
            {price}
          </p>
        </div>
      )}

      {description && (
        <p className="text-sm text-primary leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}

export default Card