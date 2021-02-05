import React from 'react';
import classes from './Profile.module.css';
import TempProfile from '../../../../assets/imgs/fish3.jpg';
const profile = () => {
  return (
    <div className={classes.Profile}>
      <img
        className={classes.ProfileImage}
        src={TempProfile}
        alt="Profile"
      ></img>
      <h2>Pablo Fishcaso</h2>
    </div>
  );
};
export default profile;
