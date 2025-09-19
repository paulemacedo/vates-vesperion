import React from 'react'
import { motion } from 'framer-motion'

const Sobre = () => {
  return (
    <>
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Sobre mim
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-shrink-0 flex justify-center md:justify-center w-full md:w-auto md:items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-full border-4 border-gold overflow-hidden flex items-center justify-center bg-white/50 md:w-84 md:h-84 w-64 h-64">
              <img
                src="/Vesperion.png"
                alt="Vates Vesperion"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl md:text-3xl text-gold mb-6 ">Minha Jornada</h4>
            <p className="text-primary text-base md:text-lg mb-4">
              "Sempre senti que a noite sussurrava verdades que o mundo ignorava. Com o tempo, aprendi a escutá-la."
            </p>
            <p className="text-primary text-base md:text-lg mb-4">
              Meu caminho nas artes divinatórias começou há mais de 15 anos, quando percebi minha sensibilidade natural para captar energias e mensagens do universo. Desde então, dediquei-me ao estudo profundo dos oráculos, buscando aperfeiçoar minha conexão com o mundo espiritual.
            </p>
            <p className="text-primary text-base md:text-lg mb-8">
              Como Vates Vesperion (aquele que profetiza ao entardecer), minha missão é trazer luz às sombras que obscurecem seu caminho, revelando verdades que, muitas vezes, já existem dentro de você.
            </p>
            <motion.button
              className="mt-4 px-8 py-3 border border-gold rounded-full text-gold font-bold tracking-wider hover:bg-gold hover:text-purple-dark transition self-center md:self-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Agende uma consulta
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Sobre