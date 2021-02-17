import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
const MenuContainer = () => {
 

  return (
    <div className={classes.MenuContainer}>
      <ul>
        <li>
          <NavLink exact activeClassName={classes.Active} to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.Active} to="/account">
            Account{' '}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.Active} to="/market">
            Market{' '}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.Active} to="/inventory">
            Inventory
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MenuContainer;
