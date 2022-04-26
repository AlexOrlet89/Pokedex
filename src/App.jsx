import { useEffect, useState } from 'react';
import Search from './components/Search';
import { fetchPokemon } from './services/pokemon';
import Home from './views/Home';

export default function App() {
  //'.map is not a function' means you're trying to map an object, you should be mapping and array!!!
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello Pokemon</h1>
      <Search setSearchedPokemon={setSearchedPokemon} />
      <Home pokemon={pokemon} searchedPokemon={searchedPokemon} />
    </>
  );
}
