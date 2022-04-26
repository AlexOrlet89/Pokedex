import React from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  //   fetchPokemon();
  const pokemon = fetchPokemon();
  return (
    <>
      <div>PokemonList</div>
      {/* <ul>
        {pokemon.map((poke) => (
          <li key={poke.id}>{poke.pokemon} </li>
        ))}
      </ul> */}
    </>
  );
}
