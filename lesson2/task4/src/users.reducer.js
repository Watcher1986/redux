import { addUser, deleteUser } from './users.actions';

const initialState = { usersList: [] };

export const reducer = (state = initialState, action) => {
  const someData = action.payload;
  switch (action.type) {
    case addUser(someData):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.concat(someData)],
      };  
    case deleteUser(id):
      return {
        ...state,
        usersList: [...state.usersList, state.usersList.filter(user => user.id !== someData)],
      };
    default:
      return state;
  }
};
