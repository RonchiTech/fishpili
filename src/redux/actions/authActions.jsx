import * as actionType from './actionTypes';
import axios from 'axios';
export const authInit = () => {
  return (dispatch) => {
    dispatch(isLoading());
    dispatch(authSuccess());
  };
};
export const authSuccess = () => {
  const username = localStorage.getItem('username');
  const userID = localStorage.getItem('uid');
  return {
    type: actionType.AUTH_SUCCESS,
    username,
    userID,
  };
};
export const authLogout = () => {
  localStorage.clear();
  return {
    type: actionType.AUTH_LOGOUT,
  };
};
// export const getRole = (userID) => {
//   axios.get(
//     `https://fishpili-default-rtdb.firebaseio.com/users/${userID}.json`
//   ).then(response=>{
//     console.log(response);
//   });
//   return {};
// };
export const checkAuthStart = (userID, userName, userURL, userRole) => {
  return {
    type: actionType.CHECK_AUTH,
    userName,
    userURL,
    userID,
    userRole,
  };
};
export const checkAuthInit = () => {
  const username = localStorage.getItem('username');
  const userID = localStorage.getItem('uid');
  const userURL = localStorage.getItem('photoURL');
  return (dispatch) => {
    if (userID) {
      dispatch(isLoading());
      axios
        .get(
          `https://fishpili-default-rtdb.firebaseio.com/users/${userID}.json`
        )
        .then((response) => {
          if (response.data === null) {
            axios
              .post(
                `https://fishpili-default-rtdb.firebaseio.com/users/${userID}.json`,
                { username, usrRole: 'isVendor', photoURL: userURL }
              )
              .then((res) => {
                dispatch(isLoading());
                axios
                  .get(
                    `https://fishpili-default-rtdb.firebaseio.com/users/${userID}.json`
                  )
                  .then((response) => {
                    const role = Object.values(response.data)[0].usrRole;
                    console.log('reducer', response);
                    dispatch(checkAuthStart(userID, username, userURL, role));
                  });
              })
              .catch((err) => {
                console.err(err);
              });
          } else {
            const role = Object.values(response.data)[0].usrRole;
            dispatch(isLoading());
            dispatch(checkAuthStart(userID, username, userURL, role));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

export const setRoles = (userRole) => {
  return {
    type: actionType.SET_ROLES,
    userRole,
  };
};

export const isLoading = () => {
  return {
    type: actionType.IS_LOADING,
  };
};
