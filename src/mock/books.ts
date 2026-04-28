export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'Em busca de sentido: Um psicólogo no campo de concentração',
    author: 'Viktor E. Frankl',
    description: 'O livro é uma autobiografia e uma reflexão sobre a experiência do autor como prisioneiro em campos de concentração. Frankl descreve sua jornada para sobreviver e encontrar significado em meio às condições terríveis e desumanas do campo de concentração, e como isso influenciou sua teoria da logoterapia, um ramo da psicologia que se concentra no significado e propósito da vida.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.1cY2xtvXnOnWa7pknhA5hwHaJ2?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 2,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    description: 'Bentinho e Capitu são amigos de infância que se apaixonam. No entanto, a dúvida sobre uma possível traição de Capitu assombra Bentinho por toda a vida. O romance é uma obra-prima da literatura brasileira que explora ciúmes, memória e a ambiguidade entre realidade e imaginação. Até hoje os leitores debatem: Capitu traiu ou não Bentinho?',
    image: 'https://2.bp.blogspot.com/-T1kPOrbpFvg/WcKAd7KW3VI/AAAAAAAAWr0/iRvcW10NOgUNEjkITk6A2iYVwoBLBmrrQCLcBGAs/s1600/Dom-Casmurro-Capa-do-Livro-1-machado_de_assis.jpg'
  },
  {
    id: 3,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    description: 'Harry descobre que é um bruxo no seu 11º aniversário e ingressa na Escola de Magia e Bruxaria de Hogwarts. Lá ele faz amigos como Rony e Hermione, aprende feitiços e descobre a verdade sobre a morte de seus pais. Com a ajuda de seus amigos, Harry enfrenta o maligno Lord Voldemort para proteger a lendária Pedra Filosofal.',
    image: 'https://th.bing.com/th/id/R.dfe07f3d579dffb4ffa68db99c8ecd3f?rik=4tyiimvmvTLtBQ&riu=http%3a%2f%2fdeusmelivro.com%2fwp-content%2fuploads%2f2014%2f11%2fCAPA_Harry_Potter_Pedra_Filosofal.jpg&ehk=zGUMq8DOGuh9a1vmVjRf3ZCGzzg4QgudUeu9Kj6lu1M%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    description: 'Em um futuro distópico, Winston Smith vive sob o regime totalitário do Grande Irmão, que controla todos os aspectos da vida, inclusive os pensamentos. Ao se rebelar e tentar buscar a verdade, Winston descobre os limites da liberdade e o preço da traição. Uma obra que alerta sobre vigilância, manipulação e poder absoluto.',
    image: 'https://th.bing.com/th/id/R.f1b4e91832c4615a43955f2d0f5d1795?rik=MW2%2bzNXYZBR9hw&riu=http%3a%2f%2fwww.bookerworm.com%2fimages%2f1984.jpg&ehk=l8MIFhiWt69hsoMix5qeAYOzlObLECDEUWhhsiywKk4%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 5,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    description: 'Um piloto cai no deserto e conhece um pequeno príncipe vindo de outro planeta. Através de suas viagens por asteroides, o principezinho encontra personagens excêntricos que ensinam lições sobre amor, amizade e o que realmente importa na vida. Uma fábula poética e filosófica para crianças e adultos.',
    image: 'https://th.bing.com/th/id/R.a1075df1e36b545766f346cfd6fdfb8e?rik=JsGraMpcI8bc7Q&pid=ImgRaw&r=0'
  },
  {
    id: 6,
    title: 'A Culpa é das Estrelas',
    author: 'John Green',
    description: 'Hazel Grace Lancaster tem câncer terminal e vive isolada. Em um grupo de apoio, ela conhece Augustus Waters, um rapaz carismático que também enfrenta a doença. Juntos, eles embarcam em uma jornada emocionante, buscando respostas sobre a vida, o amor e o significado da existência. Uma história emocionante que ficou no coração de milhões.',
    image: 'https://m.media-amazon.com/images/I/51M9IbBqxCL._SL1000_.jpg'
  },
  {
    id: 7,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    description: 'Elizabeth Bennet é uma jovem inteligente que enfrenta pressões sociais para se casar. Quando conhece o rico e orgulhoso Sr. Darcy, ela o rejeita baseada em preconceitos. Ao longo do romance, ambos aprendem a superar seus defeitos e a reconhecer o verdadeiro amor. Uma crítica social e um clássico do romance inglês.',
    image: 'https://aventurasnahistoria.com.br/wp-content/uploads/amazon/30orgulhoepreconceito1.jpg'
  },
  {
    id: 8,
    title: 'Duna',
    author: 'Frank Herbert',
    description: 'Paul Atreides, herdeiro de uma nobre família, vai para o planeta desértico Arrakis, o único lugar onde existe a especiaria mais valiosa do universo. Envolvido em intrigas políticas, traições e profecias, Paul precisa liderar os nativos Fremen em uma guerra épica. Uma obra de ficção científica monumental, cheia de ecologia, religião e poder.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.njmY1T-RC5s6QCx1h2F55wHaKp?rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];