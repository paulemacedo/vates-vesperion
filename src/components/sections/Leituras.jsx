import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from '../../redux/slices/leituraSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, oracleData } from '../../data/oracleData'
import { servicesData } from '../../data/servicesData'
import CategoryFilter from '../common/CategoryFilter'
import ImageSlider from '../common/ImageSlider'
import OracleServices from '../Arquivado/OracleServices'

const Leituras = ({ hidePromotions = false }) => {
  const activeCategory = useSelector(state => state.leitura.activeCategory)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentOracle = oracleData[activeCategory]

  // Função para contar serviços disponíveis por oráculo
  const getServicesCount = (oracleType) => {
    let count = 0
    
    servicesData.forEach(service => {
      // Verifica se o serviço tem o oráculo especificado
      if (service.oracles) {
        // Para serviços com estrutura oracles.{tipo}
        if (service.oracles[oracleType]) {
          count++
        }
      } else if (service[oracleType]) {
        // Para serviços com estrutura direta {tipo}
        count++
      }
    })
    
    return count
  }

  const nextImage = () => {
    if (!currentOracle || !currentOracle.images) return
    const images = currentOracle.images
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    if (!currentOracle || !currentOracle.images) return
    const images = currentOracle.images
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategory(categoryId))
  }

  React.useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeCategory])

  return (
    <>
    <section id="leituras" className="py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gold mb-6 uppercase tracking-wide font-vollkorn">
            Leituras Oraculares
          </h2>
          <p className="text-primary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Escolha seu oráculo e descubra os serviços disponíveis para cada tradição.
          </p>
        </motion.div>

        {/* Filtro de Categorias */}
        <CategoryFilter 
          items={categories}
          activeItem={activeCategory}
          onItemChange={handleCategoryChange}
          badgeCondition={item => item.id === 'sibilla' || item.id === 'runas'}
          className="mb-12"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Seção do Oráculo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
              {/* Slideshow */}
              <div className="order-2 lg:order-1">
                {currentOracle && currentOracle.images && (
                  <ImageSlider
                    images={currentOracle.images}
                    currentIndex={currentImageIndex}
                    onNext={nextImage}
                    onPrev={prevImage}
                    onIndexChange={setCurrentImageIndex}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    showArrows={false}
                  />
                )}
              </div>

              {/* Informações do Oráculo */}
              <div className="order-1 lg:order-2">
                {currentOracle && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl text-gold font-vollkorn font-bold mb-4">
                        {currentOracle.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-gold font-semibold mb-2">O que é:</h4>
                          <p className="text-primary text-sm md:text-base leading-relaxed">
                            {currentOracle.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-gold font-semibold mb-2">Para que é útil:</h4>
                          <p className="text-primary text-sm md:text-base leading-relaxed">
                            {currentOracle.usage}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm">
                          {(activeCategory === 'sibilla' || activeCategory === 'runas') ? (
                            <>🔮 Em desenvolvimento</>
                          ) : (
                            <>✨ {getServicesCount(activeCategory)} serviços disponíveis</>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA para loja de serviços */}
            <div className="flex justify-center mt-8">
              <a
                href="/shop"
                className="inline-block px-6 py-3 bg-gold text-purple-dark font-semibold rounded-full shadow-lg hover:bg-gold/80 transition text-lg"
                style={{ textDecoration: 'none' }}
              >
                Ver todos os serviços na loja
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    </>
  )
}

export default Leituras