export const addUser = () => {
  return {
    type: 'USERS/ADDUSER',
    payload: { id: 76, name: 'Kolya' },
  };
};

export const deleteUser = () => {
  return {
    type: 'USERS/REMOVEUSER',
    payload: 76,
  };
};
