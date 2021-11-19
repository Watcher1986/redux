import { SET_LANGUAGE } from './language.actions';

const langReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE: 
      return action.payload.lang;
    
    default:
      return state;
  }
};

export default langReducer