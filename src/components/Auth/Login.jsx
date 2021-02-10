import React, { useState, useEffect } from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import './Login.css'

import {connect} from 'react-redux'
import * as action from '../../redux/actions/index'

import axios from 'axios'

const firebaseConfig = {
  apiKey: 'AIzaSyAL7xMki5C3hK7gOE_QIbBm3eguWLQD3Hg',
  authDomain: 'fishpili.firebaseapp.com',
  projectId: 'fishpili',
  storageBucket: 'fishpili.appspot.com',
  messagingSenderId: '910886698206',
  appId: '1:910886698206:web:bce424a9625f98727bd64f',
  measurementId: 'G-2ZVJ06MR6R',
};

const Login = ({ onAuth, usrName, onauthInit }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    onauthInit(userName);
  }, [onauthInit, userName]);
  var provider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        // ...
      
        // onAuth(data);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        const errors = {
          errorCode,
          errorMessage,
          errorEmail: email,
          errorCredential: credential,
        };
      });
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const data = {
        displayName: user.displayName,
        imgUrl: user.photoURL,
        uid: user.uid,
      };
      axios.post(`https://fishpili-default-rtdb.firebaseio.com/users/${user.uid}.json`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      setUserName(user.displayName);
    } else {
    }
  });
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUserName('');
        localStorage.clear();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  let display = userName ? (
    <>
      <h2>{userName}</h2>
      <button onClick={logout}>Log out</button>
      {console.log(usrName)}
    </>
  ) : (
    <div style={{ width: '20%', margin: '20vh auto' }}>
      <h2 className="login_message">Hi, please log in</h2>
      <button className="google btn" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );

  return display;
};


const mapDispatchToProps = (dispatch) => {
  return {
    onauthInit: (data) => dispatch(action.authInit(data)),
  };
}
const mapStateToProps = (state) => {
  return {
    usrName: state.userName
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
firebase.initializeApp(firebaseConfig);
