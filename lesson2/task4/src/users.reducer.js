import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  // const addUserAction = addUser();
  // const delUserAction = deleteUser();
  switch (action.type) {
    case 'USERS/ADDUSER':
      const addUserAction = addUser();
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(addUserAction.payload)],
      };
    case 'USERS/REMOVEUSER':
      const delUserAction = deleteUser();
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== delUserAction.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
