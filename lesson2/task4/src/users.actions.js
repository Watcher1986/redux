export const ADDUSER = 'USERS/ADDUSER';
export const DELETEUSER = 'USERS/REMOVEUSER'

export const addUser = (user) => {
  return {
    type: ADDUSER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    payload: id,
  };
};
