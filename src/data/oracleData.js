export const categories = [
  { id: 'tarot', name: 'Tarot' },
  { id: 'cigano', name: 'Baralho Cigano' },
  { id: 'sibilla', name: 'Sibilla' },
  { id: 'runas', name: 'Runas Nórdicas' }
]

export const oracleData = {
  tarot: {
    title: "Tarot",
    description: "O Tarot é uma ferramenta ancestral de autoconhecimento composta por 78 cartas divididas em Arcanos Maiores e Menores. Cada carta carrega símbolos arquetípicos universais que falam diretamente ao inconsciente, revelando aspectos profundos da psique humana e do caminho espiritual.",
    usage: "Ideal para questões complexas de autoconhecimento, crescimento espiritual, relacionamentos profundos e decisões importantes da vida. O Tarot oferece uma visão panorâmica e profunda da situação, revelando não apenas o que está acontecendo, mas também as energias inconscientes em jogo e os possíveis desdobramentos futuros.",
    images: [
      { src: "/images/tarot-spread-1.jpg", caption: "Rider-Waite - Cruz Celta" },
      { src: "/images/tarot-spread-2.jpg", caption: "Victorian Steampunk - Três Cartas" },
      { src: "/images/tarot-spread-3.jpg", caption: "Ethereal Visions Luna - Mandala" }
    ],
    services: [
      {
        iconType: 'GiCardPlay',
        title: '1 pergunta',
        price: 'R$ 8,00',
        description: 'Leitura focada em uma questão específica com análise profunda.'
      },
      {
        iconType: 'GiCardJoker',
        title: '5 perguntas',
        price: 'R$ 30,00',
        originalPrice: 'R$ 40,00',
        hasDiscount: true,
        destacado: true,
        description: 'Múltiplas questões para uma visão abrangente da situação.'
      },
      {
        iconType: 'FaHeart',
        title: 'Amor Revelado',
        price: 'R$ 40,00',
        originalPrice: 'R$ 45,00',
        hasDiscount: true,
        description: 'Especializada em questões amorosas e relacionamentos.'
      },
      {
        iconType: 'GiHeraldicSun',
        title: 'Mandala da Vida',
        price: 'R$ 60,00',
        originalPrice: 'R$ 65,00',
        hasDiscount: true,
        description: 'Leitura completa: amor, trabalho, saúde e espiritualidade.'
      },
      {
        iconType: 'GiEclipse',
        title: '1h de consulta',
        price: 'R$ 80,00',
        originalPrice: 'R$ 85,00',
        hasDiscount: true,
        description: 'Consulta completa de 1 hora com leitura de tarot, análise de cartas e orientações personalizadas.'
      }
    ]
  },
  cigano: {
    title: "Baralho Cigano",
    description: "O Baralho Cigano é um oráculo prático e direto composto por 36 cartas que representam situações, pessoas e eventos do cotidiano. Originário da tradição cigana europeia, suas imagens são claras e objetivas, oferecendo respostas precisas sem rodeios.",
    usage: "Perfeito para questões práticas do dia a dia, decisões imediatas, situações profissionais, relacionamentos próximos e quando você precisa de respostas diretas e objetivas. Excelente para orientação sobre trabalho, vida social, questões financeiras e escolhas do presente momento.",
    images: [
      { src: "/images/cigano-spread-1.jpg", caption: "Império das Águas - Grande Tableau" },
      { src: "/images/cigano-spread-2.jpg", caption: "Império das Águas - Linha do Tempo" },
      { src: "/images/cigano-spread-3.jpg", caption: "Império das Águas - Casa Astrológica" }
    ],
    services: [
      {
        iconType: 'GiCardPlay',
        title: '1 pergunta',
        price: 'R$ 7,00',
        description: 'Resposta direta e prática para sua dúvida.'
      },
      {
        iconType: 'GiCardJoker',
        title: '5 perguntas',
        price: 'R$ 25,00',
        originalPrice: 'R$ 35,00',
        hasDiscount: true,
        destacado: true,
        description: 'Orientações práticas para múltiplas situações.'
      },
      {
        iconType: 'FaHeart',
        title: 'Amor Revelado',
        price: 'R$ 35,00',
        originalPrice: 'R$ 40,00',
        hasDiscount: true,
        description: 'Dinâmica amorosa com a objetividade cigana.'
      },
      {
        iconType: 'GiHeraldicSun',
        title: 'Mandala da Vida',
        price: 'R$ 50,00',
        originalPrice: 'R$ 55,00',
        hasDiscount: true,
        description: 'Leitura completa com foco em amor, trabalho e vida social.'
      },
      {
        iconType: 'GiEclipse',
        title: '1h de consulta',
        price: 'R$ 70,00',
        originalPrice: 'R$ 75,00',
        hasDiscount: true,
        description: 'Consulta completa de 1 hora com leitura de baralho cigano, análise de cartas e orientações práticas.'
      }
    ]
  },
  sibilla: {
    title: "Sibilla",
    description: "A Sibilla é um oráculo italiano tradicional que carrega a sabedoria das antigas profetisas mediterrâneas. Com imagens diretas e simbologia rica, este oráculo oferece visões claras sobre o destino e as possibilidades futuras, mantendo a tradição divinatória italiana viva.",
    usage: "Excelente para questões sobre destino pessoal, previsões futuras, orientação divina e quando você busca uma perspectiva mais tradicional e profética sobre sua vida. Ideal para compreender o fluxo natural dos acontecimentos e receber orientações ancestrais sobre seu caminho.",
    images: [
      { src: "/images/sibilla-spread-1.jpg", caption: "Sibilla Indovina - Passado, Presente, Futuro" },
      { src: "/images/sibilla-spread-2.jpg", caption: "Sibilla Indovina - Cruz Simples" },
      { src: "/images/sibilla-spread-3.jpg", caption: "Sibilla Indovina - Estrela de 7 Pontas" }
    ],
  },
  runas: {
    title: "Runas Nórdicas",
    description: "As Runas são símbolos ancestrais Vikings esculpidos em madeira, cada uma carregando o poder dos elementos naturais e a sabedoria dos antigos povos nórdicos. Conectam diretamente com as forças primordiais da natureza e a sabedoria ancestral dos guerreiros Vikings.",
    usage: "Ideais para questões sobre força interior, superação de obstáculos, conexão com ancestrais e quando você precisa de coragem para enfrentar desafios. Excelentes para orientação sobre crescimento pessoal, desenvolvimento do poder interior e quando busca despertar sua força guerreira ancestral.",
    images: [
      { src: "/images/runas-spread-1.jpg", caption: "Runas Nórdicas - Lançamento Tradicional" },
      { src: "/images/runas-spread-2.jpg", caption: "Runas Nórdicas - Cruz dos Elementos" },
      { src: "/images/runas-spread-3.jpg", caption: "Runas Nórdicas - Árvore da Vida" }
    ],
  }
}