import React from 'react';
import PropTypes from 'prop-types'
import { addFavoritePokemon, removeFavoritePokemon } from '../../actions/pokemonActions'  
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux'; 
import classNames  from "classnames"
import { AiFillStar } from "react-icons/ai"
import Card from '../Card/Card'
import {IconContext} from "react-icons"

const COLORS = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#f5f5f5'
}

const PokeCard = ({ pokemon, addFavoritePokemon, isFavorite, removeFavoritePokemon, showFavoriteButton }) => {

    const handleClick = () => {
        !isFavorite ? addFavoritePokemon(pokemon.id) : removeFavoritePokemon(pokemon.id)
    }

    const favoriteButton = classNames('favorite-button', { 'is-favorite': isFavorite})
    const cardBackground = COLORS[pokemon.types[0].type.name]


    return <Card className="poke-card" background={cardBackground}>
        <div className="photo-wrapper">
            <div className="circle">
                <img alt="poke imagen" src={"https://pokeres.bastionbot.org/images/pokemon/" + pokemon.id + ".png" } className="photo"/>
            </div>
        </div>
        <div className="info-wrapper">
            <span className="id">#00{pokemon.id}</span>
            <span className="name">{pokemon.name}</span>
            <span className="type">Type: {pokemon.types[0].type.name}</span>
        </div>
        { showFavoriteButton ?  
            <div className={favoriteButton} onClick={handleClick}>
                <AiFillStar />
            </div>  
        : null }
    </Card>
}


const mapStateToProps = (state, ownProps) => {
    const pokemon = state.pokemon.favoritePokemons.find( element => element === ownProps.pokemon.id) 
    return { isFavorite: pokemon > 0 }
}

const mapDispatchToProps = {addFavoritePokemon, removeFavoritePokemon} 

PokeCard.propTypes = {
    pokemon: PropTypes.object,
    addFavoritePokemon: PropTypes.func, 
    isFavorite: PropTypes.bool, 
    removeFavoritePokemon: PropTypes.func, 
    showFavoriteButton: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokeCard));