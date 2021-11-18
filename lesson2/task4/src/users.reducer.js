import { addUser, ADD_USER, deleteUser, DELETE_USER } from './users.actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const res = addUser();
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(res.payload)],
      };
    }
    case DELETE_USER: {
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
