export const addUser = (user) => {
  return {
    type: 'USERS/ADDUSER',
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: 'USERS/REMOVEUSER',
    payload: id,
  };
};
