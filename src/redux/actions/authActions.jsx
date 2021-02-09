import * as actionType from './actionTypes';

export const authSuccess = (data) => {
    localStorage.setItem('userName', data)
    const userName = localStorage.getItem('userName')
    return {
      type: actionType.AUTH_SUCCESS,
      userName
    };
}
