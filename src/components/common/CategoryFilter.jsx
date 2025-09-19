import React from 'react'
import { motion } from 'framer-motion'

const CategoryFilter = ({ items = [], activeItem, onItemChange, badgeCondition, className = '' }) => {
  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemChange(item.id)}
          className={`px-4 py-1 rounded-full border transition-all duration-300 relative ${
            activeItem === item.id
              ? 'bg-gold text-midnight border-gold font-semibold'
              : 'border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5'
          }`}
        >
          {item.name}
          {badgeCondition && badgeCondition(item) && (
            <span className="absolute -top-4 -right-3 bg-gold text-midnight text-xs px-2 py-1 rounded-full font-bold">
              Em breve
            </span>
          )}
        </button>
      ))}
    </motion.div>
  )
}

export default CategoryFilter