import React from 'react'
import Card from './ui/Card'
import Carousel from './ui/Carousel'

const Precos = () => {
  const planos = [
    {
      title: '1 PERGUNTA',
      price: 'R$ 5,00',
      originalPrice: 'R$ 7,00',
      description: 'Resposta direta para uma dúvida específica',
      indisponivel: false, // ou true para marcar como indisponível
    },
    {
      title: '5 PERGUNTAS',
      price: 'R$ 20,00',
      originalPrice: 'R$ 35,00',
      description: 'Consulta mais completa para múltiplas questões',
      indisponivel: false,
    },
    {
      title: 'MANDALA DA VIDA',
      price: 'R$ 50,00',
      originalPrice: 'R$ 70,00',
      description: 'Leitura completa abrangendo todos os aspectos da vida',
      indisponivel: false,
    },
  ]

  return (
    <section id="precos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 uppercase tracking-wide">
          Tabela de Preços
        </h2>

        <Carousel>
          {planos.map((plano, index) => (
            <Card
              key={index}
              title={plano.title}
              price={plano.price}
              originalPrice={plano.originalPrice}
              description={plano.description}
              icon={plano.icon}
              variant="preco"
              indisponivel={plano.indisponivel}
            />
          ))}
        </Carousel>
        <p className="text-gray-500 mt-8">
          * Promoção válida por tempo limitado. Consulte as condições.
        </p>
      </div>
    </section>
  )
}

export default Precos
