import * as actionType from './actionTypes';
export const authInit = (data) => {
  return (dispatch) => {
    localStorage.setItem('userName', data);
    dispatch(authSuccess());
  };
};
export const authSuccess = () => {
  const userName = localStorage.getItem('userName');
  return {
    type: actionType.AUTH_SUCCESS,
    userName,
  };
};
