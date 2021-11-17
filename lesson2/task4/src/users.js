const ADDUSER = 'USERS/ADDUSER';
const REMOVEUSER = 'USERS/REMOVEUSER';

export const addUser = () => {
  return {
    type: ADDUSER,
    payload: { id: 76, name: 'Kolya' },
  };
};

export const deleteUser = () => {
  return {
    type: REMOVEUSER,
    payload: 76,
  };
};


export const rootReducer = (state, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.push(action.payload),
      };
    case REMOVEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};
