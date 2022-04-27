//we need to make a test that will make sure our pokemonlist renders a pokemon when we give it one

import { render, screen } from '@testing-library/react';
import PokemonList from './PokemonList';

const pokemon = [
  {
    id: '15',
    pokemon: 'Pikachu',
  },
];

test('Should render a pokemon as a list item in an unordered list', () => {
  render(<PokemonList pokemon={pokemon} />);
  screen.getByRole('listitem');
  screen.findByText('Pikachu');
});
