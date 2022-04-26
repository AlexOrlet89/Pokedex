import React from 'react';
import PokemonList from './PokemonList';

export default function Home({ pokemon }) {
  return (
    <>
      <h2>Pokedex</h2>
      <PokemonList pokemon={pokemon} />
    </>
  );
}
