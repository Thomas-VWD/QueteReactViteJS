import PropTypes from "prop-types";

function PokemonCard(props) {
    const pokemons = props.pokemonList.map((pokemon) => {
        if (!pokemon.imgSrc) {
            return (
                <figure>
                    <p>???</p>
                    <figcaption>{pokemon.name}</figcaption>
                </figure>
            );
        }
        else {
            return (
                <figure>
                    <img src={pokemon.imgSrc} />
                    <figcaption>{pokemon.name}</figcaption>
                </figure>
            );
        }
    }
    );

    return <div>{pokemons}</div>
}

PokemonCard.PropTypes = {
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string
        })
    ).isRequired
}

export default PokemonCard;