import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
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

PokemonCard.PropTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    }).isRequired
}

export default PokemonCard;