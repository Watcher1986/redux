export const ADD_USER = 'USER/ADDUSER';
export const DELETE_USER = 'DELETE/USER';

export const addUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
