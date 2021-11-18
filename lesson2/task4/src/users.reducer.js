import { addUser, deleteUser } from './users.actions';

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS/ADDUSER':
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(addUser(action.payload))],
      };
    case 'USERS/REMOVEUSER':
      return {
        ...state,
        usersList: [
          ...state.usersList,
          state.usersList.filter(user => user.id !== deleteUser(action.payload)),
        ],
      };
    default:
      return state;
  }
};
