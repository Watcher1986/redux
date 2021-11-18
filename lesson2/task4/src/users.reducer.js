import { ADDUSER, REMOVEUSER } from './users.actions';

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(action.payload)],
      };
    case REMOVEUSER:
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
