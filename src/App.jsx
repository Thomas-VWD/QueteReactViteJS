import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const incrementPokemonIndex = () => setPokemonIndex(pokemonIndex + 1);
  const decrementPokemonIndex = () => setPokemonIndex(pokemonIndex - 1);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        <p>Pokedex !{pokemonIndex}</p>
        <button onClick={incrementPokemonIndex}>Next Pokemon</button>
        <button onClick={decrementPokemonIndex}>Previous Pokemon</button>
      </div>
    </div>
  )
}

export default App;
