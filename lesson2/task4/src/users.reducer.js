import { addUser, ADDUSER, deleteUser, DELETEUSER } from './users.actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADDUSER: {
      const res = addUser();
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(res.payload)],
      };
    }
    case DELETEUSER: {
      const res = deleteUser();
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== res.payload),
      };
    }
    default:
      return state;
  }
};

export default reducer;
