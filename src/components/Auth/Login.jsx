import React, { useCallback } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import './Login.css';

import { connect } from 'react-redux';
import * as action from '../../redux/actions/index';

import axios from 'axios';

const firebaseConfig = {
  apiKey: 'AIzaSyAL7xMki5C3hK7gOE_QIbBm3eguWLQD3Hg',
  authDomain: 'fishpili.firebaseapp.com',
  projectId: 'fishpili',
  storageBucket: 'fishpili.appspot.com',
  messagingSenderId: '910886698206',
  appId: '1:910886698206:web:bce424a9625f98727bd64f',
  measurementId: 'G-2ZVJ06MR6R',
};

const Login = ({
  usrname,

  onLogOut,
  usrRole,
  usrID,
  isLoading,
  onSetRoles,
  onCheckAuthStart,
}) => {
  const signInWithGoogle = useCallback(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
        let username = user.displayName;
        const userPhotoURL = user.photoURL;
        localStorage.setItem('username', user.displayName);
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('photoURL', user.photoURL);
        // onauthInit();

        if (user.uid) {
          axios
            .get(
              `https://fishpili-default-rtdb.firebaseio.com/users/${user.uid}.json`
            )
            .then((response) => {
              // console.log(response.data);
              // console.log(Object.keys(response.data).map((key) => response.data[key]));
              // console.log(Object.values(response.data)[0].usrRole);
              if (response.data === null) {
                axios
                  .post(
                    `https://fishpili-default-rtdb.firebaseio.com/users/${user.uid}.json`,
                    { username, usrRole: 'isVendor', userPhoto: userPhotoURL }
                  )
                  .then((res) => {
                    axios
                      .get(
                        `https://fishpili-default-rtdb.firebaseio.com/users/${user.uid}.json`
                      )
                      .then((response) => {
                        console.log('this is response: ', response);
                        const role = Object.values(response.data)[0].usrRole;
                        onCheckAuthStart(
                          user.uid,
                          user.displayName,
                          user.photoURL,
                          role
                        );
                        // onSetRoles(role);
                      });
                  })
                  .catch((err) => {
                    console.err(err);
                  });
              } else {
                username = Object.values(response.data)[0].usrname;
                localStorage.setItem('username', username);
                const role = Object.values(response.data)[0].usrRole;
                // onSetRoles(role);
                // onCheckAuthStart(
                //   user.uid,
                //   user.displayName,
                //   user.photoURL,
                //   role
                // );
                onCheckAuthStart(user.uid, username, user.photoURL, role);
                
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        // onAuth(data);
        // history.push('/');
      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
        // const errors = {
        //   errorCode,
        //   errorMessage,
        //   errorEmail: email,
        //   errorCredential: credential,
        // };
      });
  }, [onCheckAuthStart]);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // const data = {
      //   displayName: user.displayName,
      //   imgUrl: user.photoURL,
      //   uid: user.uid,
      // };
      // axios.post(`https://fishpili-default-rtdb.firebaseio.com/users/${user.uid}.json`, data)
      // .then(response => {
      //   console.log(response);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
    } else {
    }
  });
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        onLogOut();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // if(usrname){
  //      axios
  //        .get(
  //          `https://fishpili-default-rtdb.firebaseio.com/users/${usrID}/${usrname}.json`
  //        )
  //        .then((response) => {
  //          console.log(response);
  //          if (response.data === null) {
  //            axios
  //              .post(
  //                `https://fishpili-default-rtdb.firebaseio.com/users/${usrID}/${usrname}.json`,
  //                {
  //                  usrRole: 'isVendor',
  //                }
  //              )
  //              .then((res) => {
  //                console.log(res);
  //              })
  //              .catch((err) => {
  //                console.err(err);
  //              });
  //          }
  //        })
  //        .catch((error) => {
  //          console.log(error);
  //        });
  // }
  let display = usrname ? (
    <>
      <h2>
        {usrname}
        <span style={{ fontSize: '.9rem', color: 'red' }}> {usrRole}</span>
      </h2>
      <button onClick={logout}>Log out</button>
    </>
  ) : (
    <div style={{ width: '20%', margin: '20vh auto' }}>
      <h2 className="login_message">Hi, please log in</h2>
      <button className="google btn" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
  if (isLoading) {
    display = (
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return display;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(action.authLogout()),
    onSetRoles: (role) => dispatch(action.setRoles(role)),
    onCheckAuthStart: (id, name, url, role) =>
      dispatch(action.checkAuthStart(id, name, url, role)),
  };
};
const mapStateToProps = (state) => {
  return {
    usrname: state.username,
    usrID: state.userID,
    usrRole: state.userRole,
    isLoading: state.isLoading,
  };
};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Login));
firebase.initializeApp(firebaseConfig);
