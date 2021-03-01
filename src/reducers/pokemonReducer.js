import { TYPES } from '../constants/actionTypes';


const initialState = {
  favoritePokemons: [],
  initialPokemon:{}
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_FAVORITE_POKEMON:
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, action.payload] 
      }
    case TYPES.REMOVE_FAVORITE_POKEMON:
      return {
        ...state,
        favoritePokemons: state.favoritePokemons.filter( element => element !== action.payload)
      }
    default:
      return state;
  }
}

export default pokemonReducer;