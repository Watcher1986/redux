import { INCREMENT, DECREMENT } from './counter.actions';
import users from './users';

const initialState = {
  usersList: users,
  currentPage: 1
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case DECREMENT:
      return {
        ...state,
        currentPage: state.currentPage - 1
      }
    default:
      return state;
  }
};

export default rootReducer