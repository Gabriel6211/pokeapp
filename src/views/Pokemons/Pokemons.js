import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import './pokemons.scss'

import { addFavoritePokemon, removeFavoritePokemon } from '../../actions/pokemonActions'  
import PokeCard from '../../components/PokeCard/PokeCard';

class Pokemons extends Component {

    state = {
        pokemons: []
    }

    async componentDidMount() {

        let pokemonsArray = []

        for(var i = 1; i <= 96 ; i++) {
            const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i)
            pokemonsArray.push(pokemon)
        }
        
        this.setState({ pokemons: pokemonsArray })
    }

    handleClick = id => {
        const { addFavoritePokemon, removeFavoritePokemon, favoritePokemons } = this.props
        const isFavorite = favoritePokemons.find(pokemon => pokemon === id)
        !isFavorite ? addFavoritePokemon(id) : removeFavoritePokemon(id)
    }

    render() {
        if(this.state.pokemons.length === 0) return <h3>Loading...</h3>
        return <div className="pokemon-list">
            {this.state.pokemons.map((value, index) => {
                return <PokeCard key={index} pokemon={value.data} showFavoriteButton={true} /> 
            })}
        </div>
    }   
}

Pokemons.propTypes = {
    isFavorite: PropTypes.bool
}
  
const mapStateToProps = state => ({ favoritePokemons: state.pokemon.favoritePokemons })
const mapDispatchToProps = {addFavoritePokemon, removeFavoritePokemon}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);