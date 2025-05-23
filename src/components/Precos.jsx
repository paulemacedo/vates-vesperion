import React from 'react'
import Card from './ui/Card'

const Precos = () => {
  const planos = [
    {
      title: '1 PERGUNTA',
      price: 'R$ 5,00',
      originalPrice: 'R$ 10,00',
      description: 'Resposta direta para uma dúvida específica',
    },
    {
      title: '5 PERGUNTAS',
      price: 'R$ 25,00',
      originalPrice: 'R$ 45,00',
      description: 'Consulta mais completa para múltiplas questões',
    },
    {
      title: 'MANDALA DA VIDA',
      price: 'R$ 50,00',
      originalPrice: 'R$ 75,00',
      description: 'Leitura completa abrangendo todos os aspectos da vida',
    },
  ]

  return (
    <section id="precos" className="bg-midnight py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 uppercase tracking-wide">
          Tabela de Preços
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {planos.map((plano, index) => (
            <Card
              key={index}
              title={plano.title}
              price={plano.price}
              originalPrice={plano.originalPrice}
              description={plano.description}
              icon={plano.icon}
              variant="preco"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Precos
