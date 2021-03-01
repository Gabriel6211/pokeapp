import React from 'react';
import { addFavoritePokemon, removeFavoritePokemon } from '../../actions/pokemonActions'  
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux'; 
import _, { remove } from 'lodash'
import classNames  from "classnames"
import { AiFillStar } from "react-icons/ai"

import './pokeCard.scss'

const PokeCard = ({pokemon, id, addFavoritePokemon, isFavorite, removeFavoritePokemon}) => {

    const handleClick = () => {
        console.log(isFavorite)
        !isFavorite ? addFavoritePokemon(id) : removeFavoritePokemon(id)
    }

    const favoriteButton = classNames('favorite-button', { 'is-favorite': isFavorite})

    return <div className="poke-card">
        <div className="poke-photo">
            <img src={"https://pokeres.bastionbot.org/images/pokemon/" + id + ".png" } className="photo"/>
        </div>
        <div className="poke-description">
            <p className="poke-name">{pokemon.name}</p>
            <p className="poke-data">Hola me llamo bulbasur soy de hoja y me hago la paja</p>
        </div>

        <button className={favoriteButton} onClick={handleClick}> <AiFillStar /> </button>

    </div>
}


const mapStateToProps = (state, ownProps) => {
    const pokemon = state.pokemon.favoritePokemons.find( element => element === ownProps.id) 
    return { isFavorite: pokemon > 0 }
}

const mapDispatchToProps = {addFavoritePokemon, removeFavoritePokemon} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokeCard));