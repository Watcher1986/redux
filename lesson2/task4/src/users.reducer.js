import { addUser, deleteUser } from './users.actions';

function nextUserId(users) {
  const maxId = users.reduce((maxId, user) => Math.max(user.id, maxId), -1);
  return maxId + 1
}

export const reducer = (state, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        usersList: [
          ...state.usersList,
          {
            id: nextUserId(state.usersList),
            name: action.payload,
          },
        ],
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
