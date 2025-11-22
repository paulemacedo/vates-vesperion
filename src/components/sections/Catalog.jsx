import React, { useState } from 'react'
import { servicesData } from '../../data/servicesData'
import Card from '../common/Card'
import Carousel from '../common/Carousel'
import { renderIcon } from '../../utils/iconHelper'
import CategoryFilter from '../common/CategoryFilter'

const categories = [...new Set(servicesData.map(s => s.category))]


function extractOracleField(card, field) {
  // Se card.oracles existe, pega menor valor entre price/discount/originalPrice
  if (card.oracles && typeof card.oracles === 'object') {
    let values = []
    for (const key in card.oracles) {
      if (card.oracles[key] && typeof card.oracles[key] === 'object' && card.oracles[key][field]) {
        values.push(card.oracles[key][field])
      } else if (card.oracles[key] && typeof card.oracles[key] === 'string' && field === 'price') {
        values.push(card.oracles[key])
      }
    }
    // Se valores são strings tipo 'R$ 10,00', pega o menor
    if (values.length) {
      const nums = values.map(v => parseFloat(String(v).replace(/[^\d,]/g, '').replace(',', '.')))
      const min = Math.min(...nums)
      return `R$ ${min.toFixed(2).replace('.', ',')}`
    }
  }
  return ''
}

function extractOracleDiscount(card) {
  if (card.oracles && typeof card.oracles === 'object') {
    let values = []
    for (const key in card.oracles) {
      if (card.oracles[key] && typeof card.oracles[key] === 'object' && card.oracles[key].discount) {
        values.push(card.oracles[key].discount)
      }
    }
    if (values.length) {
      const nums = values.map(v => parseFloat(String(v).replace(/[^\d,]/g, '').replace(',', '.')))
      const min = Math.min(...nums)
      return min
    }
  }
  return ''
}

const Catalog = () => {
  return (
    <section id="store" className="mt-7 md:mt-5 mx-2 md:mx-16 py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-8xl mx-auto">
        {categories.map(category => {
          // Filtra os serviços da categoria
          const cards = servicesData.filter(s => s.category === category)
          // Extrai subcategorias únicas e adiciona "Todos"
          const subcategoriesBase = [
            ...new Set(cards.map(s => s.subcategory).filter(Boolean))
          ].map(sc => ({ id: sc, name: sc }))
          
          const subcategories = subcategoriesBase.length > 0 
            ? [{ id: '', name: 'Todos' }, ...subcategoriesBase]
            : []
          // Estado do filtro de subcategoria
          const [activeSubcategory, setActiveSubcategory] = useState('')
          // Filtra os cards pela subcategoria selecionada
          const filteredCards = activeSubcategory
            ? cards.filter(s => s.subcategory === activeSubcategory)
            : cards

          // Ordenação dos cards
          const sortedCards = filteredCards.sort((a, b) => {
            // "Sim ou não?" sempre primeiro
            if (a.title.toLowerCase().includes('sim ou não')) return -1
            if (b.title.toLowerCase().includes('sim ou não')) return 1
            // Menor preço (preferencialmente cigano)
            let priceA = 0, priceB = 0
            if (a.oracles) priceA = parseFloat(extractOracleField(a, 'price').replace(/[^\d,]/g, '').replace(',', '.'))
            else if (a.cigano) priceA = parseFloat(a.cigano.price.replace(/[^\d,]/g, '').replace(',', '.'))
            else if (a.tarot) priceA = parseFloat(a.tarot.price.replace(/[^\d,]/g, '').replace(',', '.'))
            if (b.oracles) priceB = parseFloat(extractOracleField(b, 'price').replace(/[^\d,]/g, '').replace(',', '.'))
            else if (b.cigano) priceB = parseFloat(b.cigano.price.replace(/[^\d,]/g, '').replace(',', '.'))
            else if (b.tarot) priceB = parseFloat(b.tarot.price.replace(/[^\d,]/g, '').replace(',', '.'))
            return priceA - priceB
          })

          return (
            <div key={category} className="mb-16 max-w-7xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 text-gold  uppercase tracking-wide font-vollkorn">
                {category}
              </h3>
              {subcategories.length > 0 && (
                <CategoryFilter
                  items={subcategories}
                  activeItem={activeSubcategory}
                  onItemChange={setActiveSubcategory}
                />
              )}
              <div className="relative flex items-start mt-6 max-h-[700px]">
                <Carousel slidesToShow={4} >
                {sortedCards.map(card => {
                  let price = '', originalPrice = '', discount = ''
                  if (card.oracles) {
                    price = extractOracleField(card, 'price')
                    originalPrice = '' // Se quiser mostrar original, pode adaptar
                    discount = extractOracleDiscount(card)
                  } else if (card.cigano) {
                    price = card.cigano.price
                    originalPrice = ''
                    discount = card.cigano.discount || ''
                  } else if (card.tarot) {
                    price = card.tarot.price
                    originalPrice = ''
                    discount = card.tarot.discount || ''
                  }
                  return (
                    <div className="h-full flex items-start justify-start py-2" key={card.title}>
                      <Card
                        title={card.title}
                        description={card.description}
                        price={price}
                        originalPrice={originalPrice}
                        discount={discount}
                        icon={card.icon ? renderIcon(card.icon, { size: 32, className: "text-gold mb-2" }) : null}
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
                  )
                })}
                </Carousel>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Catalog