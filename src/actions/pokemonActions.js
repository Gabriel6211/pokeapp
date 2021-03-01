import { TYPES } from '../constants/actionTypes'

export const addFavoritePokemon = (id) => ({ type: TYPES.ADD_FAVORITE_POKEMON, payload: id })

export const removeFavoritePokemon = (id) => ({ type: TYPES.REMOVE_FAVORITE_POKEMON, payload: id})