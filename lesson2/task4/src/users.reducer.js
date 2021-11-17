import { addUser, deleteUser } from './users.actions';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        usersList: state.usersList.push(action.payload),
      };
    case deleteUser:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};
