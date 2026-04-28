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
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Bolseiro é um hobbit que vive tranquilamente no Condado até que o mago Gandalf e uma companhia de anões o convidam para uma aventura. Juntos, eles partem para recuperar o tesouro do dragão Smaug. No caminho, Bilbo encontra Gollum e um anel mágico que muda seu destino para sempre. Uma história sobre coragem, amizade e descoberta de si mesmo.',
    image: 'https://placehold.co/400x600?text=O+Hobbit'
  },
  {
    id: 2,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    description: 'Bentinho e Capitu são amigos de infância que se apaixonam. No entanto, a dúvida sobre uma possível traição de Capitu assombra Bentinho por toda a vida. O romance é uma obra-prima da literatura brasileira que explora ciúmes, memória e a ambiguidade entre realidade e imaginação. Até hoje os leitores debatem: Capitu traiu ou não Bentinho?',
    image: 'https://placehold.co/400x600?text=Dom+Casmurro'
  },
  {
    id: 3,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    description: 'Harry descobre que é um bruxo no seu 11º aniversário e ingressa na Escola de Magia e Bruxaria de Hogwarts. Lá ele faz amigos como Rony e Hermione, aprende feitiços e descobre a verdade sobre a morte de seus pais. Com a ajuda de seus amigos, Harry enfrenta o maligno Lord Voldemort para proteger a lendária Pedra Filosofal.',
    image: 'https://placehold.co/400x600?text=Harry+Potter'
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    description: 'Em um futuro distópico, Winston Smith vive sob o regime totalitário do Grande Irmão, que controla todos os aspectos da vida, inclusive os pensamentos. Ao se rebelar e tentar buscar a verdade, Winston descobre os limites da liberdade e o preço da traição. Uma obra que alerta sobre vigilância, manipulação e poder absoluto.',
    image: 'https://placehold.co/400x600?text=1984'
  },
  {
    id: 5,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    description: 'Um piloto cai no deserto e conhece um pequeno príncipe vindo de outro planeta. Através de suas viagens por asteroides, o principezinho encontra personagens excêntricos que ensinam lições sobre amor, amizade e o que realmente importa na vida. Uma fábula poética e filosófica para crianças e adultos.',
    image: 'https://placehold.co/400x600?text=O+Pequeno+Principe'
  },
  {
    id: 6,
    title: 'A Culpa é das Estrelas',
    author: 'John Green',
    description: 'Hazel Grace Lancaster tem câncer terminal e vive isolada. Em um grupo de apoio, ela conhece Augustus Waters, um rapaz carismático que também enfrenta a doença. Juntos, eles embarcam em uma jornada emocionante, buscando respostas sobre a vida, o amor e o significado da existência. Uma história emocionante que ficou no coração de milhões.',
    image: 'https://placehold.co/400x600?text=A+Culpa+das+Estrelas'
  },
  {
    id: 7,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    description: 'Elizabeth Bennet é uma jovem inteligente que enfrenta pressões sociais para se casar. Quando conhece o rico e orgulhoso Sr. Darcy, ela o rejeita baseada em preconceitos. Ao longo do romance, ambos aprendem a superar seus defeitos e a reconhecer o verdadeiro amor. Uma crítica social e um clássico do romance inglês.',
    image: 'https://placehold.co/400x600?text=Orgulho+Preconceito'
  },
  {
    id: 8,
    title: 'Duna',
    author: 'Frank Herbert',
    description: 'Paul Atreides, herdeiro de uma nobre família, vai para o planeta desértico Arrakis, o único lugar onde existe a especiaria mais valiosa do universo. Envolvido em intrigas políticas, traições e profecias, Paul precisa liderar os nativos Fremen em uma guerra épica. Uma obra de ficção científica monumental, cheia de ecologia, religião e poder.',
    image: 'https://placehold.co/400x600?text=Duna'
  }
];