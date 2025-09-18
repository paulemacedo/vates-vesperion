import React, { useState } from 'react'
import { servicesData } from '../data/servicesData'
import Card from './ui/Card'
import Carousel from './ui/Carousel'
import { renderIcon } from '../utils/iconHelper'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const categories = [...new Set(servicesData.map(s => s.category))]

function getLowestPrice(price) {
  if (typeof price === 'string') return price
  if (price.cigano) return price.cigano
  if (price.tarot) return price.tarot
  return ''
}

// Adicione função para originalPrice
function getLowestOriginalPrice(originalPrice) {
  if (!originalPrice) return ''
  if (typeof originalPrice === 'string') return originalPrice
  if (originalPrice.cigano) return originalPrice.cigano
  if (originalPrice.tarot) return originalPrice.tarot
  return ''
}

const Shop = () => {
  return (
    <section id="store" className="mt-13 md:mt-7 mx-2 md:mx-16 py-12 px-4 sm:py-16 md:py-20 bg-midnight">
      <div className="max-w-8xl mx-auto">
        {categories.map(category => {
          // Filtra os serviços da categoria
          const cards = servicesData
            .filter(s => s.category === category)
            .sort((a, b) => {
              // "Sim ou não?" sempre primeiro
              if (a.title.toLowerCase().includes('sim ou não')) return -1
              if (b.title.toLowerCase().includes('sim ou não')) return 1
              // Menor preço (preferencialmente cigano)
              const priceA = parseFloat(getLowestPrice(a.price).replace(/[^\d,]/g, '').replace(',', '.'))
              const priceB = parseFloat(getLowestPrice(b.price).replace(/[^\d,]/g, '').replace(',', '.'))
              return priceA - priceB
            })

          return (
            <div key={category} className="mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-gold mb-2 uppercase tracking-wide font-vollkorn">
                {category}
              </h3>
              <div className="relative flex items-center">
                <Carousel slidesToShow={5} >
                {cards.map(card => (
                    <div className="h-100 flex items-center justify-center p-4" key={card.title}>
                      <Card
                        title={card.title}
                        description={card.description}                    
                        price={getLowestPrice(card.price)}
                        originalPrice={getLowestOriginalPrice(card.originalPrice)}
                        icon={card.icon ? renderIcon(card.icon, { size: 32, className: "text-gold mb-2" }) : null}
                        hasDiscount={!!card.hasDiscount}
                        destacado={!!card.destacado}
                        badgeText={card.badgeText}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)' }}
                        transition={{
                          duration: 0.7,
                          delay: 0.1,
                          scale: { duration: 0.3 },
                          boxShadow: { duration: 0.3 },
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Shop