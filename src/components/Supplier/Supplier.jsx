import React from 'react';
import classes from './Supplier.module.css';
import Menu from './MenuContainer/Menu/Menu';
import Profile from './MenuContainer/Profile/Profile';
import {Route} from 'react-router-dom'
import Account from './MenuContainer/Account/Account'
const Supplier = () => {
  return (
    <div className={classes.Dashboard}>
      <div className={classes.MenuContainer}>
        <Profile />
        <Menu />
      </div>
      <div className={classes.InfoContainer}>
        <Route path="/" exact render={() => <p>Dashboard</p>} />
        <Route path="/market" render={() => <p>market</p>} />
        <Route path="/inventory" render={() => <p>inventory</p>} />
        <Route path="/account" component={Account} />
      </div>
    </div>
  );
};
export default Supplier;
