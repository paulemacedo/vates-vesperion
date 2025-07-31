import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from './ui/SEO'

const perguntas = [
  {
    question: 'Como são realizadas as consultas?',
    answer: 'As consultas são realizadas por texto, áudio ou chamada de vídeo, de acordo com sua preferência. Para cada modalidade, reservo um tempo dedicado exclusivamente à sua questão, estabelecendo uma conexão energética para obter as mensagens mais claras e precisas.',
  },
  {
    question: 'Quanto tempo demora para receber a resposta?',
    answer: 'Para consultas pontuais (1 a 5 perguntas), o retorno é enviado em até 24 horas. Para leituras mais complexas como a Mandala da Vida e Amor Revelado, o prazo é de até 3 dias, devido à profundidade da análise realizada.',
  },
  {
    question: 'O que preciso informar para a consulta?',
    answer: 'Para uma leitura mais precisa, é importante compartilhar seu nome completo, data de nascimento e a intenção clara da consulta. Para leituras de relacionamento, podem ser necessárias informações adicionais da outra pessoa.',
  },
  {
    question: 'Qual a diferença entre Tarot e Baralho Cigano?',
    answer: 'O Tarot trabalha com símbolos arquetípicos profundos, ideal para autoconhecimento e questões espirituais. O Baralho Cigano oferece respostas mais diretas e práticas, perfeito para decisões imediatas e situações cotidianas.',
  },
  {
    question: 'O que é a Mandala da Vida?',
    answer: 'A Mandala da Vida é uma leitura completa que mapeia todas as áreas da sua vida: amor, carreira, saúde, família, espiritualidade e finanças. Utiliza diferentes oráculos para criar um panorama energético abrangente, revelando bloqueios e potenciais.',
  },
  {
    question: 'Como funciona o "Amor Revelado"?',
    answer: 'O Amor Revelado é uma leitura especializada na área amorosa que serve tanto para pessoas em relacionamento quanto solteiras. Para casais, analisa a dinâmica energética entre duas pessoas, revelando sentimentos ocultos e caminhos para harmonização. Para solteiros, identifica padrões amorosos, bloqueios emocionais e orientações para atrair o amor ideal.',
  },
  {
    question: 'Posso fazer perguntas sobre outras pessoas?',
    answer: 'Sim, mas sempre com respeito e intenção positiva. Para leituras que envolvem terceiros, é importante ter uma conexão genuína com a pessoa e buscar orientação para o bem de todos os envolvidos.',
  },
  {
    question: 'As consultas têm garantia?',
    answer: 'Acredito na transparência energética. Se por algum motivo você não se conectar com a leitura, conversamos para encontrar a melhor forma de te ajudar, seja com uma nova abordagem ou ajuste na interpretação.',
  }
]


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <>
    <SEO
        title="Perguntas Frequentes - Vates Vesperion"
        description="Tire suas dúvidas sobre consultas oraculares, preços, prazos e métodos de leitura."
        image="/images/faq-banner.jpg"
    />
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-vollkorn text-gold mb-12 text-center uppercase tracking-wide">
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
    </>
  )
}

export default FAQ