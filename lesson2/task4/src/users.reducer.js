import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  // const addUserAction = addUser();
  // const delUserAction = deleteUser();
  switch (action.type) {
    case addUser().type:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(addUser().payload)],
      };
    case deleteUser().type:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== deleteUser().payload)],
      };
    default:
      return state;
  }
};

export default reducer;
