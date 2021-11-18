import { addUser, deleteUser } from './users.actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        usersList: [
          ...state.usersList,
          action.payload
        ]
      };
    case deleteUser:
      return {
        ...state,
        usersList: state.usersList.map(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};
