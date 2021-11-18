import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  const addUserAction = addUser();
  const delUserAction = deleteUser();
  switch (action.type) {
    case addUserAction.type === 'USERS/ADDUSER':
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(addUserAction.payload)],
      };
    case delUserAction.type === 'USERS/REMOVEUSER':
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== delUserAction.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
