import { addUser, deleteUser } from './users.actions';

const reducer = (state, action) => {
  const action = [addUser, deleteUser];
  if (action[0]) {
    return {
      ...state,
      usersList: [...state.usersList, state.usersList.concat(action[0].payload)],
    };
  }
  if (action[1]) {
    return {
      ...state,
      usersList: [
        ...state.usersList,
        state.usersList.filter(user => user.id !== action[1].payload),
      ],
    };
  }
  return state;
};

export default reducer;
