import { addUser, deleteUser } from "./actions";

const initialState = {
  usersList: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...state,
        usersList: state.usersList.push(action.payload),
      };
    case deleteUser:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};
