export const ADD_USER = 'USER/ADDUSER';
export const DELETE_USER = 'DELETE/USER';

export const setUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

export const removeUser = () => {
  return {
    type: DELETE_USER,
  };
};
