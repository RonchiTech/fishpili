import React from 'react';
import classes from './Supplier.module.css';
import Menu from './MenuContainer/Menu/Menu';
import Profile from './MenuContainer/Profile/Profile';
const Supplier = () => {
  return (
    <div className={classes.Dashboard}>
      <div className={classes.MenuContainer}>
        <Profile />
        <Menu />
      </div>
      <div className={classes.InfoContainer}>Infos</div>
    </div>
  );
};
export default Supplier;
