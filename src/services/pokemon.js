export async function fetchPokemon() {
  //'https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=10'
  const response = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=10'
  );
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
