import * as actionType from './actionTypes';
export const authInit = () => {
  return (dispatch) => {
    dispatch(authSuccess());
  };
};
export const authSuccess = () => {
  const username = localStorage.getItem('username');
  return {
    type: actionType.AUTH_SUCCESS,
    username,
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
  return {
    type: actionType.CHECK_AUTH,
    username,
  };
};
