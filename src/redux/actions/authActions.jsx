import * as actionType from './actionTypes';
export const authInit = () => {
  return (dispatch) => {
    dispatch(authSuccess());
  };
};
export const authSuccess = () => {
  const username = localStorage.getItem('username');
  const userID = localStorage.getItem('uid');
  return {
    type: actionType.AUTH_SUCCESS,
    username,
    userID
  };
};
export const authLogout = () => {
  localStorage.clear();
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const checkAuth = () => {
  const username = localStorage.getItem('username');
  const userID = localStorage.getItem('uid');
  return {
    type: actionType.CHECK_AUTH,
    username,
    userID,
  };
};

export const setRoles = (userRole) => {
  return {
    type: actionType.SET_ROLES,
    userRole,
  };
};