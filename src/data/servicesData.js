export const servicesData = [
  // Respostas Rápidas
  {
    title: 'Sim ou não?',
    category: 'Respostas Rápidas',
    description: "Você recebe uma resposta direta (Sim, Não ou Talvez) e o direcionamento de uma carta-conselho.",
    icon: 'FaQuestion',
    oracles: {
      dados: {
        price: 'R$ 4,00',
        ProgressiveDiscount: 'R$ 1,00',
        maxDiscount: 'R$ 2,00',
      }
    }
  },
  {
    title: 'Leitura Focada',
    category: 'Respostas Rápidas',
    description: "Para aquelas questões que pedem mais do que um 'sim' ou 'não', oferecendo uma análise detalhada com insights e conselhos práticos.",
    icon: 'BsBullseye',
    cigano: {
      price: 'R$ 10,00',
      ProgressiveDiscount: 'R$ 1,00',
      maxDiscount: 'R$ 10,00'
    },
    tarot: {
      price: 'R$ 12,00',
      ProgressiveDiscount: 'R$ 1,00',
      maxDiscount: 'R$ 10,00'
    },
  },
  {
    title: 'Sim ou Não 3x',
    category: 'Respostas Rápidas',
    description: 'Você recebe respostas diretas (Sim, Não ou Talvez) e o direcionamento de uma carta-conselho para cada pergunta.',
    icon: 'FaQuestion',
    oracles: {
      dados: {
        price: 'R$ 12,00',
        discount: 'R$ 2,00',
      },    },
  },
  {
    title: 'Leitura Focada 3x',
    category: 'Respostas Rápidas',
    description: 'Três perguntas de Leitura Focada respondidas com uma análise detalhada e insights práticos.',
    icon: 'BsBullseye',
    oracles: {
      cigano: {
        price: 'R$ 30,00',
        discount: 'R$ 4,00',
      },
      tarot: {
        price: 'R$ 36,00',
        discount: 'R$ 4,00',
      },
    },
  },
  {
    title: 'Leitura Focada 5x',
    category: 'Respostas Rápidas',
    description: 'Cinco perguntas de Leitura Focada respondidas com uma análise detalhada e insights práticos.',
    icon: 'BsBullseye',
    oracles: {
      cigano: {
        price: 'R$ 50,00',
        discount: 'R$ 6,00',
      },
      tarot: {
        price: 'R$ 60,00',
        discount: 'R$ 6,00',
      },
    },
    destacado: true
  },
  {
    title: 'Leitura Focada 10x',
    category: 'Respostas Rápidas',
    description: 'Dez perguntas de Leitura Focada respondidas com uma análise detalhada e insights práticos.',
    icon: 'BsBullseye',
    oracles: {
      tarot: {
        price: 'R$ 110,00',
        discount: 'R$ 11,00',
      },
      cigano: {
        price: 'R$ 90,00',
        discount: 'R$ 11,00',
      },
    },
  },

  // Tiragens Especiais
  {
    title: 'Bússola Semanal',
    category: 'Tiragens Especiais',
    subcategory: 'Planejamento & Visão Global',
    description: 'Seu guia para os próximos 7 dias. Receba clareza sobre a energia da semana, o principal desafio e o melhor conselho para navegar sua jornada com consciência.',
    icon: 'FaCompass',
    oracles: {
      tarot: {
        price: 'R$ 20,00',
      },
      cigano: {
        price: 'R$ 18,00',
      },
    },
  },
  {
    title: 'Bússola Mensal',
    category: 'Tiragens Especiais',
    subcategory: 'Planejamento & Visão Global',
    description: 'Um planejamento completo para o seu mês. Revele a energia central, as oportunidades e desafios, e receba conselhos focados para as áreas do amor e da prosperidade.',
    icon: 'BsCalendarMonth',
    oracles: {
      tarot: {
        price: 'R$ 40,00',
      },
      cigano: {
        price: 'R$ 35,00',
      },
    },
  },
  {
    title: 'Mandala da Vida',
    category: 'Tiragens Especiais',
    subcategory: 'Planejamento & Visão Global',
    description: 'Leitura completa de 12 áreas da vida para clareza, equilíbrio e direcionamento.',
    icon: 'GiHeraldicSun',
    oracles: {
      tarot: {
        price: 'R$ 65,00',
      },
      cigano: {
        price: 'R$ 60,00',
      },
    },
  },
  {
    title: 'Templo de Afrodite',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'Investiga sentimentos, intenções e futuro amoroso entre você e outra pessoa.',
    icon: 'GiGreekTemple',
    oracles: {
      tarot: {
        price: 'R$ 35,00',
      },
      cigano: {
        price: 'R$ 30,00',
      },
    },
  },
  {
    title: 'Coração Aberto',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'Para entender sua energia atual no amor e qual o próximo passo para se abrir a novas conexões.',
    icon: 'RiHeartAddLine',
    oracles: {
      tarot: {
        price: 'R$ 35,00',
      },
      cigano: {
        price: 'R$ 30,00',
      },
    },
  },
  {
    title: 'O Grande Mapa do Amor',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'A análise mais profunda para casais (15 cartas), revelando a dinâmica e o futuro da união.',
    icon: 'FaMapMarkedAlt',
    oracles: {
      tarot: {
        price: 'R$ 60,00',
      },
      cigano: {
        price: 'R$ 55,00'
      },
    },
  },
  {
    title: 'O Despertar para o Amor',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'Revela seus bloqueios, os caminhos e os potenciais para você encontrar um novo amor.',
    icon: 'BsSunrise',
    oracles: {
      tarot: {
        price: 'R$ 60,00',
      },
      cigano: {
        price: 'R$ 55,00'
      },
    },
  },
  {
    title: 'Templo do Diabo',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'Explora desejos ocultos, obsessões, tentações e lições nas relações e na vida.',
    icon: 'FaFire',
    oracles: {
      tarot: {
        price: 'R$ 50,00',
      },
      cigano: {
        price: 'R$ 45,00'
      },
    },
  },
  {
    title: 'Ficar ou Partir?',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'Análise clara e sem rodeios para te ajudar na difícil decisão de permanecer ou sair de uma relação. Revela os prós, contras e os futuros de cada caminho.',
    icon: 'GiCrossroad',
    oracles: {
      tarot: {
        price: 'R$ 40,00',
      },
      cigano: {
        price: 'R$ 35,00'
      },
    },
  },
  {
    title: 'A Ponte entre Almas',
    category: 'Tiragens Especiais',
    subcategory: 'Amor',
    description: 'Existe chance de volta? Esta leitura analisa o motivo da separação, os sentimentos atuais de ambos e o potencial real para uma reconciliação.',
    icon: 'GiBridge',
    oracles: {
      tarot: {
        price: 'R$ 50,00',
      },
      cigano: {
        price: 'R$ 45,00'
      },
    },
  },
  {
    title: 'Espelho da Confiança',
    category: 'Tiragens Especiais',
    subcategory: 'Autoconhecimento & Relações',
    description: 'Revela o que a pessoa aparenta ser, quem ela realmente é, suas motivações e suas verdadeiras intenções.',
    icon: 'GiMirrorMirror',
    oracles: {
      tarot: {
        price: 'R$ 35,00',
      },
      cigano: {
        price: 'R$ 30,00'
      },
    },
  },
  {
    title: 'Escolha de Caminhos',
    category: 'Tiragens Especiais',
    subcategory: 'Autoconhecimento & Relações',
    description: 'Mostra vantagens, desafios e resultados de cada opção para ajudar sua decisão.',
    icon: 'FaDirections',
    oracles: {
      tarot: {
        price: 'R$ 35,00',
      },
      cigano: {
        price: 'R$ 30,00'
      },
    },
  },
  {
    title: 'Leitura Profunda',
    category: 'Tiragens Especiais',
    subcategory: 'Autoconhecimento & Relações',
    description: 'Uma análise completa sobre qualquer área da vida, revelando passado, presente, futuro, desafios e o melhor caminho.',
    icon: 'FaBookOpen',
    oracles: {
      tarot: {
        price: 'R$ 70,00',
      },
      cigano: {
        price: 'R$ 65,00'
      },
    },
  },
  {
    title: 'O Portal do Novo Ciclo',
    category: 'Tiragens Especiais',
    subcategory: 'Financeiro & Carreiras',
    description: 'Avalia adaptação, ambiente, desafios e potencial de crescimento.',
    icon: 'GiPortal',
    oracles: {
      tarot: {
        price: 'R$ 35,00',
      },
      cigano: {
        price: 'R$ 30,00'
      },
    },
  },
  {
    title: 'O Despertar da Vocação',
    category: 'Tiragens Especiais',
    subcategory: 'Financeiro & Carreiras',
    description: 'Sente que sua carreira travou? Esta leitura revela seus talentos, bloqueios e os próximos passos para destravar seu crescimento profissional.',
    icon: 'FaLightbulb',
    oracles: {
      tarot: {
        price: 'R$ 45,00',
      },
      cigano: {
        price: 'R$ 40,00'
      },
    },
  },
  {
    title: 'Caminho da Fortuna',
    category: 'Tiragens Especiais',
    subcategory: 'Financeiro & Carreiras',
    description: 'Investiga sua jornada financeira, revelando desafios, lições e os próximos passos para o sucesso.',
    icon: 'FaMoneyBillWave',
    oracles: {
      tarot: {
        price: 'R$ 55,00',
      },
      cigano: {
        price: 'R$ 50,00'
      },
    },
  },
  {
    title: 'A Bússola do Empreendedor',
    category: 'Tiragens Especiais',
    subcategory: 'Financeiro & Carreiras',
    description: 'A clareza que todo empreendedor precisa. Uma análise focada para destravar o potencial do seu negócio e tomar decisões mais assertivas.',
    icon: 'FaBriefcase',
    oracles: {
      tarot: {
        price: 'R$ 45,00',
      },
      cigano: {
        price: 'R$ 40,00'
      },
    },
  },
  {
    title: 'O Salto do Empreendedor',
    category: 'Tiragens Especiais',
    subcategory: 'Financeiro & Carreiras',
    description: 'Pensando em abrir seu próprio negócio? Esta leitura avalia a viabilidade da sua ideia, os desafios, o potencial de sucesso e se este é o momento certo para o seu salto.',
    icon: 'FaRocket',
    oracles: {
      tarot: {
        price: 'R$ 45,00',
      },
      cigano: {
        price: 'R$ 40,00'
      },
    },
  },
];