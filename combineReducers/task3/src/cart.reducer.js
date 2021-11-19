export { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  language: 'en',
  user: null,
  cart: {
    products: [],
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        cart: state.cart.products.concat(action.payload.productData),
      };
    }
    case REMOVE_PRODUCT: {
      const newList = state.cart.products.filter(
        product => product.id !== action.payload.productId,
      );
      return {
        ...state,
        cart: {
          products: newList,
        },
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
