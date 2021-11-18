import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  // const addUserAction = addUser();
  // const delUserAction = deleteUser();
  switch (action.type) {
    case () => addUser(user):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(user)],
      };
    case () => deleteUser(num):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== num)],
      };
    default:
      return state;
  }
};

export default reducer;
