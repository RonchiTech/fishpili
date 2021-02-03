import React from 'react';
import classes from './Main.module.css';
import Navigation from '../Navigation/Navigation';
import Shop from '../Shop/Shop';
const main = () => {
  return (
    <div className={classes.Main}>
      <Navigation />
        <Shop/>
    </div>
  );
};
export default main;
