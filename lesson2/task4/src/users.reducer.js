import { ADDUSER, DELETEUSER } from './users.actions';

const reducer = (state, action) => {
  // const addUserAction = addUser();
  // const delUserAction = deleteUser();
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(action.payload)],
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
