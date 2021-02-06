import React, { useState } from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAL7xMki5C3hK7gOE_QIbBm3eguWLQD3Hg',
  authDomain: 'fishpili.firebaseapp.com',
  projectId: 'fishpili',
  storageBucket: 'fishpili.appspot.com',
  messagingSenderId: '910886698206',
  appId: '1:910886698206:web:bce424a9625f98727bd64f',
  measurementId: 'G-2ZVJ06MR6R',
};

const Login = () => {
  const [userName, setUserName] = useState('');
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
      });
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
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
      })
      .catch((error) => {
        // An error happened.
      });
  };
  let display = userName ? (
    <>
      <h2>{userName}</h2>
      <button onClick={logout}>Log out</button>
    </>
  ) : (
    <div>
      <button onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );

  return display;
};
export default Login;
firebase.initializeApp(firebaseConfig);
