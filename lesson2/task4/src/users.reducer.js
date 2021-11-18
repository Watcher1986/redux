import { addUser, deleteUser } from './users.actions';

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS/ADDUSER':
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(addUser.payload)],
      };
    case 'USERS/REMOVEUSER':
      return {
        ...state,
        usersList: [
          ...state.usersList,
          state.usersList.filter(user => user.id !== deleteUser.payload),
        ],
      };
    default:
      return state;
  }
};
