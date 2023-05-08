import PropTypes from "prop-types";

const card = {
    width: "200px",
    padding: "1rem",
    backgroundColor: "lightsalmon",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px gray",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
}

function PokemonCard({ pokemon }) {
    if (!pokemon.imgSrc) {
        return (
            <figure style={card}>
                <p>???</p>
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        );
    }
    else {
        return (
            <figure style={card}>
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