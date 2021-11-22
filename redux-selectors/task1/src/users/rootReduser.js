import { INCREMENT, DECREMENT } from './counter.actions';
import users from '../users';

const initialState = {
  users: { usersList: users, currentPage: 1 },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        users: {
          usersList: users,
          currentPage: state.users.currentPage + 1,
        },
      };
    case DECREMENT:
      return {
        users: {
          usersList: users,
          currentPage: state.users.currentPage - 1,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
