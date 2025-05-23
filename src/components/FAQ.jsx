import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'


const perguntas = [
  {
    question: 'Como são realizadas as consultas?',
    answer: 'As consultas são realizadas por texto, áudio ou chamada de vídeo, de acordo com sua preferência. Para cada modalidade, reservo um tempo dedicado exclusivamente à sua questão, estabelecendo uma conexão energética para obter as mensagens mais claras e precisas.',
  },
  {
    question: 'Quanto tempo demora para receber a resposta?',
    answer: 'Para consultas pontuais (1 a 5 perguntas), o retorno é enviado em até 24 horas. Para a Mandala da Vida, o prazo é de até 3 dias, devido à complexidade e profundidade da análise realizada.',
  },
  {
    question: 'O que preciso informar para a consulta?',
    answer: 'Para uma leitura mais precisa, é importante compartilhar seu nome completo, data de nascimento e a intenção clara da consulta. Quanto mais específica for sua pergunta, mais direcionada será a resposta recebida.',
  },
  {
    question: 'Qual a diferença entre as leituras de Tarot e Baralho Cigano?',
    answer: 'O Tarot trabalha com símbolos mais complexos e arquetípicos, ideal para questões profundas sobre autoconhecimento, padrões de comportamento e jornada espiritual. Já o Baralho Cigano oferece respostas mais diretas e práticas, perfeito para decisões imediatas e situações que requerem clareza objetiva.',
  },
  {
    question: 'O que é a Mandala da Vida?',
    answer: 'A Mandala da Vida é uma leitura completa que integra diferentes oráculos para criar um mapa energético abrangente. Ela analisa as principais áreas da sua vida (amor, carreira, saúde, espiritualidade, etc.), revelando bloqueios, potenciais e caminhos para harmonização.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 text-center uppercase tracking-wide">
          Saiba mais sobre as leituras
        </h2>

        <div className="space-y-4">
          {perguntas.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gold/20 pb-4 cursor-pointer"
              onClick={() => toggle(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center text-gold text-base md:text-lg font-semibold">
                {item.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="text-primary text-sm md:text-base mt-3 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ