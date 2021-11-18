import { addUser, deleteUser } from './users.actions';

function nextUserId(users) {
  const maxId = users.reduce((maxId, user) => Math.max(user.id, maxId), -1);
  return maxId + 1
}

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        usersList: state.usersList.push(action.payload),
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
