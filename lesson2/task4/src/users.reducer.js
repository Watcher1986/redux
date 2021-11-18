import { addUser, deleteUser } from './users.actions';

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser(action.payload):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(action.payload)],
      };
    case deleteUser(action.payload):
      return {
        ...state,
        usersList: [
          ...state.usersList,
          state.usersList.filter(user => user.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};
