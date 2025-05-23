import React from 'react'
import Card from './ui/Card'
import Carousel from './ui/Carousel'
import { GiHeraldicSun, GiEclipse, GiEclipseFlare, GiCrystalBall, GiMoon, GiMoonBats, GiGlowingHands, GiHammerSickle, GiCardJoker, GiCardPlay} from 'react-icons/gi'
import { FaStarOfDavid, FaMoon } from 'react-icons/fa'
import { BsMoonStarsFill } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";

const Servicos = () => {
  const servicos = [
    {
      title: 'Tarot',
      icon: <GiHeraldicSun size={40} className="text-gold mx-auto m-4" />,
      description: 'Leitura do tarot para orientação e clareza em momentos da vida. Bom olhar profundo sobre situações complexas e caminhos possíveis.',
    },
    {
      title: 'Baralho Cigano',
      icon: <GiMoonBats size={40} className="text-gold mx-auto m-4" />,
      description: 'Leitura do baralho cigano direcionada mais direta. Ideal para temas bem específicos e práticos com respostas imediatas.',
    },
    {
      title: 'Sibilla',
      icon: <GiEclipseFlare size={40} className="text-gold mx-auto m-4" />,
      description: 'Leitura do Sibilla, um baralho com cartas que falam sobre amor, dinheiro e saúde. Uma leitura mais direta e prática.',
      indisponivel: true,
    },
    {
      title: 'Feitiços e Rituais',
      icon: <GiEclipse size={40} className="text-gold mx-auto m-4" />,
      description: 'Feitiços e rituais para proteção, amor, prosperidade e outros temas. Trabalhos energéticos para potencializar sua energia.',
      indisponivel: true,
    },
    {
      title: 'Astrologia vedica',
      icon: <BsMoonStarsFill size={40} className="text-gold mx-auto m-4" />,
      description: 'Análise astrológica com base na astrologia védica. Uma leitura profunda e detalhada sobre sua vida e personalidade.',
      indisponivel: true,
    },
  ]

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 uppercase tracking-wide">
          Serviços Místicos
        </h2>

        <Carousel>
          {servicos.map((servico, index) => (
            <Card
              icon={servico.icon}
              key={index}
              title={servico.title}
              description={servico.description}
              variant='servico'
              indisponivel={servico.indisponivel}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              whileHover={servico.indisponivel ? {} : { scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)' }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                scale: { duration: 0.3 },
                boxShadow: { duration: 0.3 },
              }}
              viewport={{ once: true }}
            >
              {servico.icon}
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Servicos
