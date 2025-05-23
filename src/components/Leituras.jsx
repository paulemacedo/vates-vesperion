import React from 'react'
import Button from './ui/Button'
import { motion } from 'framer-motion'


const Leituras = () => {
  const handleButtonClick = () => {
    const faqSection = document.getElementById('faq')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="leituras"
      className="py-12 px-4 sm:py-16 md:py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gold mb-4 sm:mb-6 uppercase tracking-wide">
          Leituras Oraculares
        </h2>

        <p className="text-primary text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
          Descubra os segredos que as estrelas guardam para você. Como Vates Vesperion,
          ofereço leituras oraculares que iluminam o caminho quando a luz do dia não é suficiente para guiá-lo.
        </p>

        <p className="text-primary text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
          Cada consulta é realizada com profundo respeito às artes místicas, conectando-se com as energias celestiais
          que nos cercam e revelando verdades ocultas nas sombras.
        </p>

        <p className="text-primary text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">
          Nem tudo o que importa é visível à luz do dia. Às vezes, precisamos abraçar a escuridão para encontrar as
          respostas que buscamos.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            variant="default"
            size="md"
            className="w-full sm:w-auto"
            onClick={handleButtonClick}
          >
            Saiba mais sobre as leituras
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Leituras
