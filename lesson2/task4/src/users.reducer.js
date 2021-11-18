import { addUser, deleteUser } from './users.actions';

function nextUserId(users) {
  const maxId = users.reduce((maxId, user) => Math.max(user.id, maxId), -1);
  return maxId + 1;
}

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(action.payload)],
      };
    case deleteUser:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== action.payload)],
      };
    default:
      return state;
  }
};
