import * as actionTypes from './actionTypes'
import axios from 'axios'
export const updateNameStart = (updatedName) => {
    const uid = localStorage.getItem('uid')
  return (dispatch) => {
    //   axios.patch(
    //     `https://fishpili-default-rtdb.firebaseio.com/users/${uid}/`,
    //     {
    //       username: updatedName,
    //     }
    //   ).then(response => {
    //       console.log(response);
    //   }).catch(error => {
    //       console.log(error);
    //   });
    axios
      .get(`https://fishpili-default-rtdb.firebaseio.com/users/${uid}/.json`)
      .then((response) => {
        // console.log(Object.values(response.data)[0].username);
        // console.log(Object.keys(response.data)[0]);
       
        axios.patch(
          `https://fishpili-default-rtdb.firebaseio.com/users/${uid}/${Object.keys(response.data)[0]}.json`, {
              username: updatedName
          }
        ).then(res => {
            console.log(res);
            localStorage.setItem('username', res.data.username)
            dispatch(updateNameSuccess(res.data.username));
        }).catch(err => {
            console.log(err);
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const updateNameSuccess = (updatedName) => {
  return {
    type: actionTypes.UPDATE_NAME_SUCCESS,
    username: updatedName,
  };
};