import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    if (!pokemon.imgSrc) {
        return (
            <figure className="card">
                <p>???</p>
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        );
    }
    else {
        return (
            <figure className="card">
                <img src={pokemon.imgSrc} className="card-img"/>
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