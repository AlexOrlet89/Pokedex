import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <>
      <div>PokemonList</div>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.id}>{poke.pokemon} </li>
        ))}
      </ul>
    </>
  );
}
