import React from 'react';

export default function Search({ setSearchedPokemon }) {
  return (
    <>
      Filter By Name
      <input
        type="text"
        onChange={(e) => setSearchedPokemon(e.target.value)}
      ></input>
    </>
  );
}
