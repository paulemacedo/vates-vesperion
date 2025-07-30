import React from 'react'
import Card from './ui/Card'
import Carousel from './ui/Carousel'
import { 
  GiHeraldicSun, 
  GiEclipse, 
  GiEclipseFlare,
  GiCrystalBall, 
  GiMoon, 
  GiMoonBats, 
  GiGlowingHands, 
  GiHammerSickle,
  GiCardJoker, 
  GiCardPlay,
  GiRuneStone,
  GiCardAceDiamonds,
} from 'react-icons/gi'
import { BsMoonStarsFill } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { FaOm, FaHeart, FaClock  } from 'react-icons/fa';

  const tarotServicos = [
    {
      icon: <GiCardPlay size={35} className="text-gold mx-auto m-4" />,
      title: '1 pergunta',
      price: 'R$ 8,00',
      description: 'Leitura de uma pergunta específica com foco em respostas diretas e objetivas.',
    },
    {
      icon: <GiCardJoker size={35} className="text-gold mx-auto m-4" />,
      title: '5 perguntas',
      price: 'R$ 30,00',
      originalPrice: 'R$ 40,00',
      hasDiscount: true,
      description: 'Análise para múltiplas dúvidas e seus desdobramentos.',
    },
    {
      icon: <FaHeart size={35} className="text-gold mx-auto m-4" />,
      title: 'Amor Revelado',
      price: 'R$ 40,00',
      description: 'Leitura focada em questões amorosas, revelando sentimentos, intenções e possíveis caminhos.',
    },
    {
      icon: <GiHeraldicSun size={35} className="text-gold mx-auto m-4" />,
      title: 'Mandala da Vida',
      price: 'R$ 60,00',
      description: 'Leitura completa do tarot com foco em todas as áreas da vida: amor, trabalho, saúde e espiritualidade.',
    },
    {
      icon: <GiEclipse size={35} className="text-gold mx-auto m-4" />,
      title: '1h de consulta',
      price: 'R$ 80,00',
      description: 'Consulta completa de 1 hora com leitura de tarot, análise de cartas e orientações personalizadas.',
    },
  ];

  const baralhoCiganoServicos = [
    {
      icon: <GiCardPlay size={35} className="text-gold mx-auto m-4" />,
      title: '1 pergunta',
      price: 'R$ 7,00',
      description: 'Leitura de uma pergunta específica com foco em respostas diretas e objetivas.',
    },
    {
      icon: <GiCardJoker size={35} className="text-gold mx-auto m-4" />,
      title: '5 perguntas',
      price: 'R$ 25,00',
      originalPrice: 'R$ 35,00',
      hasDiscount: true,
      description: 'Múltiplas respostas para entender melhor o momento atual.',
    },
    {
      icon: <FaHeart size={35} className="text-gold mx-auto m-4" />,
      title: 'Amor Revelado',
      price: 'R$ 35,00',
      description: 'Leitura focada em questões amorosas, revelando sentimentos, intenções e possíveis caminhos.',
    },
    {
      icon: <GiHeraldicSun size={35} className="text-gold mx-auto m-4" />,
      title: 'Mandala da Vida',
      price: 'R$ 50,00',
      description: 'Leitura completa do baralho cigano com foco em todas as áreas da vida: amor, trabalho, saúde e espiritualidade.',
    },
    {
      icon: <GiEclipse size={35} className="text-gold mx-auto m-4" />,
      title: '1h de consulta',
      price: 'R$ 70,00',
      description: 'Consulta completa de 1 hora com leitura de baralho cigano, análise de cartas e orientações personalizadas.',
    },
  ];

  const emBreveServicos = [
    {
      title: 'Sibilla',
      icon: <GiEclipseFlare size={35} className="text-gold mx-auto m-4" />,
      description: 'oraculo italiano que traz respostas diretas sobre amor, dinheiro e saúde. Uma leitura mais prática e direta.',
      indisponivel: true,
      badgeText: 'Em breve',
    },
    {
      title: 'Runas',
      icon: <GiRuneStone size={35} className="text-gold mx-auto m-4" />,
      description: 'Leitura de runas para orientação e autoconhecimento. Uma abordagem mais mística e simbólica.',
      indisponivel: true,
      badgeText: 'Em breve',
    },
    {
      title: 'Feitiços e Rituais',
      icon: <GiGlowingHands size={35} className="text-gold mx-auto m-4" />,
      description: 'Feitiços e rituais para proteção, amor, prosperidade e outros temas. Trabalhos energéticos para potencializar sua energia.',
      indisponivel: true,
      badgeText: 'Em breve',
    },
    {
      title: 'Astrologia védica',
      icon: <FaOm size={35} className="text-gold mx-auto m-4" />,
      description: 'Análise astrológica com base na astrologia védica. Uma leitura profunda e detalhada sobre sua vida e personalidade.',
      indisponivel: true,
      badgeText: 'Em breve',
    },
  ];

  // Configuração das seções
  export const secoes = [
    {
      id: 'baralho-cigano',
      titulo: 'Baralho Cigano',
      icone: <GiCardAceDiamonds/>,
      descricao: 'O Baralho Cigano é uma forma de oráculo que traz respostas diretas e práticas sobre questões do dia a dia. Nossas leituras são feitas com cartas ciganas, revelando insights sobre amor, dinheiro e saúde.',
      servicos: baralhoCiganoServicos,
      marginBottom: 'mb-8',
      destacado: true,
      backgroundStyle: 'bg-gradient-to-br from-purple-dark/40 via-gold/10 to-purple-dark/40'
    },
    {
      id: 'tarot',
      titulo: 'Tarot',
      icone: <GiCardJoker/>,
      descricao: 'O Tarot é uma ferramenta poderosa de autoconhecimento e orientação espiritual. Nossas leituras são feitas com cartas tradicionais, revelando insights sobre amor, carreira, saúde e espiritualidade.',
      servicos: tarotServicos,
      marginBottom: 'mb-4',
      backgroundStyle: 'bg-gradient-to-br from-purple-dark/40 via-gold/10 to-purple-dark/40'
    },
    {
      id: 'em-breve',
      titulo: 'Em Breve',
      icone: <FaClock/>,
      descricao: 'Estamos sempre expandindo nossos serviços místicos. Em breve, teremos novas práticas e oráculos disponíveis para você explorar. Fique atento!',
      servicos: emBreveServicos,
      marginBottom: 'mb-12',
      backgroundStyle: 'bg-gradient-to-bl from-gold/5 via-purple-dark/20 to-gold/5'
    }
  ];

  // Componente reutilizável para as seções
  const SecaoServicos = ({ secao }) => (
    <div 
      id={secao.id} 
      className={`mb-24 ${secao.destacado ? 'relative' : ''}`}
      
    >
      {/* Fundo especial para seções destacadas */}
      {secao.destacado && (
        <div className="absolute inset-0 rounded-3xl  z-0" />
      )}
      
      {/* Fundo específico para cada subseção */}
      <div className={`relative rounded-2xl px-6 py-8 ${secao.backgroundStyle || ''} ${secao.destacado ? 'border-2 border-gold/60 border-pulse-animation' : ''}`}>
        <div className={`${secao.destacado ? 'relative z-10' : ''} mb-2`}>
          {secao.destacado && (
            <div className="inline-block bg-gold-gradient text-midnight px-4 py-1 rounded-full text-xs font-montserrat font-semibold uppercase tracking-wider mb-4">
              ⭐ Mais Popular
            </div>
          )}
          <h3 className={`text-2xl md:text-3xl font-vollkorn border-b-1 border-gold/50 ${secao.destacado ? 'text-gold  border-gold/50' : 'text-gold '} ${secao.marginBottom} uppercase tracking-wide flex items-center justify-center gap-4`}>
            {secao.icone}
            {secao.titulo}
            {secao.icone}
          </h3>
          <p className={`${secao.destacado ? 'text-primary/90' : 'text-primary/70'} max-w-xl mx-auto ${secao.destacado ? 'font-medium' : ''}`}>
            {secao.descricao}
          </p>
        </div>
        <div className={secao.destacado ? 'relative z-10' : ''}>
          <Carousel>
            {secao.servicos.map((servico, index) => (
              <div className="h-100 flex items-center justify-center p-4" key={index}>
                <Card
                  key={index}
                  title={servico.title}
                  price={servico.price}
                  originalPrice={servico.originalPrice}
                  hasDiscount={servico.hasDiscount}
                  description={servico.description}
                  icon={servico.icon}
                  indisponivel={servico.indisponivel}
                  badgeText={servico.badgeText}
                  variant='preco'
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    scale: { duration: 0.3 },
                    boxShadow: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );

const Servicos = () => {



  return (
    <section id="servicos" className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto text-center">

        {/* Título da seção */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-vollkorn text-gold mb-4 uppercase tracking-wide">
            Serviços Místicos
          </h2>
          <div className=" mx-auto max-w-xl mb-8">
            <p className="text-primary/70 max-w-2xl mx-auto">
              Descubra nossos serviços místicos, que vão desde leituras de tarot e baralho cigano até práticas de autoconhecimento e espiritualidade. Cada serviço é projetado para oferecer insights profundos e orientações personalizadas.
          </p>
        </div>
      </div>

        {/* Renderização das seções */}
        {secoes.map((secao, index) => (
          <SecaoServicos key={secao.id} secao={secao} />
        ))}

      </div>
    </section>
  )
}

export default Servicos