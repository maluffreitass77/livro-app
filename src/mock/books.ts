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
    description: 'Uma aventura inesquecível pela Terra Média, onde Bilbo Bolseiro encontra Gollum e o anel.',
    image: 'https://placehold.co/400x600?text=O+Hobbit'
  },
  {
    id: 2,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    description: 'A dúvida eterna: Capitu traiu ou não Bentinho? Um clássico da literatura brasileira.',
    image: 'https://placehold.co/400x600?text=Dom+Casmurro'
  },
  {
    id: 3,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    description: 'Harry descobre que é um bruxo e entra no mundo mágico de Hogwarts.',
    image: 'https://placehold.co/400x600?text=Harry+Potter'
  }
];