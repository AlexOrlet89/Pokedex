export async function fetchPokemon() {
  //'https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=10'
  const response = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=10'
  );
  const data = await response.json();
  console.log(data.results, typeof data.results);
  return data.results;
}

export async function fetchFilteredPokemon(searchedPokemon) {
  //use URLSearchParams to query our searchedPokemon
  const params = new URLSearchParams();
  //use a conditional to set pokemon to searched pokemon to prevent and empty value being searched automatically
  if (searchedPokemon) {
    params.set('pokemon', searchedPokemon);
  }
  // set our response to a fetch call with our params.tostring
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=10&${params.toString()}`
  );
  //translate our response from json and return the results...
  const data = await response.json();
  return data.results;
}
