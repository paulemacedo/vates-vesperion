import React from 'react'
import Card from './ui/Card'
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
      title: 'Feitiços e Rituais',
      icon: <GiEclipse size={40} className="text-gold mx-auto m-4" />,
      description: 'Feitiços e rituais para proteção, amor, prosperidade e outros temas. Trabalhos energéticos para potencializar sua energia.',
    }
  ]

  return (
    <section id="servicos" className="bg-purple-dark py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-vollkorn text-gold mb-12 uppercase tracking-wide">
          Serviços Místicos
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {servicos.map((servico, index) => (
            <Card
              icon={servico.icon}
              key={index}
              title={servico.title}
              description={servico.description}
              variant='servico'
              className="pt-0"
            >
              {servico.icon}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos
