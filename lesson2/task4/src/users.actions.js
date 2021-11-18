const ADDUSER = 'USERS/ADDUSER';
const REMOVEUSER = 'USERS/REMOVEUSER';

export const addUser = (user) => {
  return {
    type: ADDUSER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: REMOVEUSER,
    payload: id,
  };
};
