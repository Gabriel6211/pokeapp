import { TYPES } from '../constants/actionTypes'

export const login = (user) => ({ type: TYPES.LOGIN, payload: user })

export const logout = (user) => ({ type: TYPES.LOGOUT, payload: user })
