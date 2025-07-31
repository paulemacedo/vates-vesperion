import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from '../redux/slices/leituraSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, oracleData } from '../data/oracleData'
import CategoryFilter from './ui/CategoryFilter'
import OracleImageSlider from './ui/OracleImageSlider'
import OracleInfo from './ui/OracleInfo'
import OracleServices from './ui/OracleServices'
import SEO from './ui/SEO'

const Leituras = ({ hidePromotions = false }) => {
  const activeCategory = useSelector(state => state.leitura.activeCategory)
  const dispatch = useDispatch()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentOracle = oracleData[activeCategory]

  const nextImage = () => {
    const images = currentOracle.images
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
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
      <SEO
        title="Vates Vesperion - Leituras Oraculares Personalizadas"
        description="Consultas de Tarot, Baralho Cigano e oráculos. Descubra mensagens do universo com Vates Vesperion."
      />
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
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
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
                <OracleImageSlider
                  images={currentOracle.images}
                  currentIndex={currentImageIndex}
                  onNext={nextImage}
                  onPrev={prevImage}
                  onIndexChange={setCurrentImageIndex}
                />
              </div>

              {/* Informações do Oráculo */}
              <div className="order-1 lg:order-2">
                <OracleInfo 
                  oracle={currentOracle}
                  activeCategory={activeCategory}
                />
              </div>
            </div>

            {/* Serviços do Oráculo */}
            <OracleServices 
              oracle={currentOracle}
              activeCategory={activeCategory}
              hidePromotions={hidePromotions}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    </>
  )
}

export default Leituras