import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  // const addUserAction = addUser();
  // const delUserAction = deleteUser();
  switch (action.type) {
    case addUser().type:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(action.payload)],
      };
    case deleteUser().type:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
