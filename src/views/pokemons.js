import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import PokeCard from '../components/PokeCard/PokeCard'

class Pokemons extends Component {

    state = {
        pokemons: []
    }

    async componentDidMount() {

        let pokemonsArray = []

        for(var i = 1; i <= 10 ; i++) {
            const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i)
            pokemonsArray.push(pokemon)
        }
        
        this.setState({ pokemons: pokemonsArray })
    }

    render() {
        if(this.state.pokemons.length === 0) return <h3>Loading...</h3>
        
        return (
            this.state.pokemons.map((value, index) => {
                return <PokeCard key={index} pokemon={value.data} id={index+1}/>
            })
        ) 
    }   
}

Pokemons.propTypes = {
    user: PropTypes.object
}
  

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(Pokemons);