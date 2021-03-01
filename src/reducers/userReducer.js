import { TYPES } from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true
      }
    case TYPES.LOGOUT:
      return {
        ...initialState,
      }
    default:
      return state;
  }
}

export default userReducer;