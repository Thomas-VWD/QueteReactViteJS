function NavBar({ pokemonIndex, setPokemonIndex }) {
    const incrementPokemonIndex = () => setPokemonIndex(pokemonIndex + 1);
    const decrementPokemonIndex = () => setPokemonIndex(pokemonIndex - 1);
    return (
        <div>
            <p>Pokedex !</p>
            <button onClick={decrementPokemonIndex}>Previous Pokemon</button>
            <button onClick={incrementPokemonIndex}>Next Pokemon</button>
        </div>
    )
}
export default NavBar