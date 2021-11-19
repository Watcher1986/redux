import { SET_LANGUAGE } from './language.actions';

const initialState = {
  language: 'en',
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.payload.lang,
      };
    }
    default:
      return state;
  }
};

export default langReducer