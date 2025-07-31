import React from 'react'
import { motion } from 'framer-motion'

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-1 rounded-full border transition-all duration-300 relative ${
            activeCategory === category.id
              ? 'bg-gold text-midnight border-gold font-semibold'
              : 'border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5'
          }`}
        >
          {category.name}
          {/* Badge "Em breve" para Sibilla e Runas */}
          {(category.id === 'sibilla' || category.id === 'runas') && (
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