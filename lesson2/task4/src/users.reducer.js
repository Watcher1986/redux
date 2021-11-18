import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  const someData = action.payload;
  switch (action.type) {
    case addUser(someData !== ''):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(someData)],
      };
    case deleteUser(someData !== 0):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== someData)],
      };
    default:
      return state;
  }
};

export default reducer;
