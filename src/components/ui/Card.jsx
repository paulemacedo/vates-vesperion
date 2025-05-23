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
  badgeText = 'Em breve',
}) => {
  return (
    <motion.div
      className={`border border-gold rounded-lg m-2 text-center transition-shadow ${className} ${indisponivel ? 'bg-gray-700 opacity-60 grayscale relative pointer-events-none' : 'bg-midnight'} max-w-xs mx-auto`}
      style={{ minHeight: '192px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={indisponivel ? {} : { scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)' }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        scale: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      }}
      viewport={{ once: true }}
    >
      {indisponivel && (
        <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white text-xs px-3 py-1 rounded-full z-10 shadow-lg uppercase font-bold ">
          {badgeText}
        </span>
      )}
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
          <p className="text-5xl text-gold/20 line-through">
            {originalPrice}
          </p>
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