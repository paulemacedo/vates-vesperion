import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const depoimentos = [
  {
    text: 'A leitura foi precisa e acolhedora. Volto sempre que preciso me reconectar com meu propósito. As orientações que recebi trouxeram clareza para decisões importantes.',
    author: 'Ana, São Paulo',
  },
  {
    text: 'Estava muito cético no início, mas a precisão das informações me surpreendeu. As previsões se confirmaram e agora consulto regularmente para orientação profissional.',
    author: 'Carlos, Rio de Janeiro',
  },
  {
    text: 'A Mandala da Vida foi uma experiência transformadora. Consegui entender padrões que estavam me bloqueando há anos e finalmente avançar. Gratidão eterna!',
    author: 'Maria, Belo Horizonte',
  },
]

const Depoimentos = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % depoimentos.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 uppercase tracking-wide">
          Depoimentos
        </h2>

        <div className="relative min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-lg leading-relaxed mb-6 italic">
              <span className="text-gold text-4xl font-serif mr-2">“</span>
              {depoimentos[index].text}
              <span className="text-gold text-4xl font-serif ml-2">”</span>
            </p>
            <p className="text-gold text-sm font-semibold">— {depoimentos[index].author}</p>
          </motion.div>
        </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-gold' : 'bg-gold/30'
              }`}
              aria-label={`Depoimento ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos