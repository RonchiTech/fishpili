import React from 'react';
import classes from './Profile.module.css';
import {connect} from 'react-redux'

import firebase from 'firebase/app';
import * as action from '../../../../redux/actions';
import { useHistory } from 'react-router-dom';
const Profile = ({ userRole, username, onLogOut, photoURL }) => {
  let history = useHistory();
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        onLogOut();
        history.push('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className={classes.Profile}>
      <img className={classes.ProfileImage} src={photoURL} alt="Profile"></img>
      <h2>{username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
    userRole: state.userRole,
    photoURL: state.userPhotoURL
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onauthInit: () => dispatch(action.authInit()),
    onLogOut: () => dispatch(action.authLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
