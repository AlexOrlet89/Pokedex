import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function PokemonList() {
  //'.map is not a funciton' means you're trying to map an object, you should be mapping and array!!!
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  //   fetchPokemon();
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
