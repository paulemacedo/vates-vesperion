import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const perguntas = [
  {
    question: 'Como são realizadas as consultas?',
    answer: 'As consultas são realizadas por texto, áudio ou chamada de vídeo, de acordo com sua preferência. Para cada modalidade, reservo um tempo dedicado exclusivamente à sua questão, estabelecendo uma conexão energética para obter as mensagens mais claras e precisas.',
  },
  {
    question: 'Qual a diferença entre "Respostas Rápidas" e "Tiragens Especiais"?',
    answer: 'As Respostas Rápidas incluem consultas diretas como "Sim ou Não" e "Leitura Focada", ideais para questões pontuais e decisões imediatas. As Tiragens Especiais são leituras mais complexas e aprofundadas, organizadas por temas como Amor, Autoconhecimento, Carreira e Planejamento, oferecendo análises completas e detalhadas.',
  },
  {
    question: 'Quanto tempo demora para receber a resposta?',
    answer: 'Para Respostas Rápidas (Sim/Não e Leitura Focada), o retorno é enviado em até 24 horas após a confirmação do pagamento. Para Tiragens Especiais, devido à profundidade da análise, o prazo varia entre 24h a 3 dias, dependendo da complexidade da leitura escolhida.',
  },
  {
    question: 'Como funcionam os descontos progressivos?',
    answer: 'Oferecemos descontos progressivos para algumas consultas. Quanto mais você consulta, maior o desconto acumulado! Por exemplo, na Leitura Focada, você ganha R$ 1,00 de desconto a cada consulta, até o desconto máximo de R$ 10,00. É nossa forma de valorizar clientes fiéis.',
  },
  {
    question: 'Qual a diferença entre Tarot, Baralho Cigano e Dados?',
    answer: 'O Tarot trabalha com símbolos arquetípicos profundos, ideal para autoconhecimento e questões espirituais. O Baralho Cigano oferece respostas mais diretas e práticas, perfeito para decisões cotidianas. Os Dados são utilizados para respostas objetivas de "Sim ou Não", fornecendo clareza imediata com uma carta-conselho.',
  },
  {
    question: 'O que é a "Mandala da Vida"?',
    answer: 'A Mandala da Vida é uma leitura completa que mapeia 12 áreas essenciais da sua vida: amor, carreira, saúde, família, espiritualidade, finanças, amizades, criatividade e muito mais. É ideal para quem busca uma visão panorâmica completa e direcionamento para equilibrar todas as áreas.',
  },
  {
    question: 'Quais são as leituras de amor disponíveis?',
    answer: 'Temos várias opções especializadas em amor: "Templo de Afrodite" (analisa relacionamentos), "Coração Aberto" (para quem busca amor), "O Grande Mapa do Amor" (análise profunda de casais), "O Despertar para o Amor" (desbloqueio amoroso), "A Ponte entre Almas" (possibilidade de volta), e "Ficar ou Partir?" (decisões sobre relacionamentos).',
  },
  {
    question: 'Como escolher entre múltiplas consultas (3x, 5x, 10x)?',
    answer: 'Os pacotes múltiplos oferecem desconto e são ideais para diferentes situações. O 3x é perfeito para questões relacionadas; o 5x (destacado) é nossa opção mais popular, ideal para análise completa de várias áreas; o 10x é para quem precisa de orientação abrangente e acompanhamento prolongado.',
  },
  {
    question: 'O que preciso informar para a consulta?',
    answer: 'Para uma leitura mais precisa, é importante compartilhar seu nome completo, data de nascimento e a intenção clara da consulta. Para leituras de relacionamento, podem ser necessárias informações adicionais da outra pessoa. Para consultas profissionais, contextualize sua situação atual.',
  },
  {
    question: 'Posso fazer perguntas sobre outras pessoas?',
    answer: 'Sim, mas sempre com respeito e intenção positiva. Para leituras que envolvem terceiros, é importante ter uma conexão genuína com a pessoa e buscar orientação para o bem de todos os envolvidos. Algumas tiragens como "Espelho da Confiança" são especificamente para isso.',
  },
  {
    question: 'As consultas têm garantia?',
    answer: 'Acredito na transparência energética. Se por algum motivo você não se conectar com a leitura, conversamos para encontrar a melhor forma de te ajudar, seja com uma nova abordagem ou ajuste na interpretação. Seu bem-estar e satisfação são fundamentais.',
  },
  {
    question: 'Como funcionam as leituras para empreendedores?',
    answer: 'Temos leituras específicas para o mundo dos negócios: "A Bússola do Empreendedor" (orientação para negócios existentes), "O Salto do Empreendedor" (avaliação para novos negócios), "Caminho da Fortuna" (jornada financeira) e "O Despertar da Vocação" (desbloqueio profissional). Todas focadas em decisões estratégicas e crescimento.',
  }
]


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <>
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