import React from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Home() {
  fetchPokemon();

  return (
    <div>
      {/* we are gonna want a list of pokemon and a search function, thats one view
      we'll call PokemonList, a fetch to fetch at least ten pokemon in services,
      and another fetch to return the pokemon. This will be step one,
      afterwards, we will focus on testing. */}
    </div>
  );
}
