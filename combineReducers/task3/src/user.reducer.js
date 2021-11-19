import { ADD_USER, DELETE_USER } from './user.actions';

const initialState = {
  language: 'en',
  user: null,
  cart: {
    products: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload.userData,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
