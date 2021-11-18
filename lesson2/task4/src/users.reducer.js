// import { addUser, deleteUser } from './users.actions';

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case action.type === 'USERS/ADDUSER':
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(action.payload)],
      };
    case action.type === 'USERS/REMOVEUSER':
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== action.payload)],
      };
    default:
      return state;
  }
};
