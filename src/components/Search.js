import React from 'react';

export default function Search({ setSearchedPokemon }) {
  return (
    <>
      Filter By Name
      <input onChange={(e) => setSearchedPokemon(e.target.value)}></input>
    </>
  );
}
