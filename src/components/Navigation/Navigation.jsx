import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const navigation = () => {
  const style = {
    color: '#100B00',
    font: '1.2rem',
    textDecoration: 'none',
    fontWeight: '700',
  };
  const activeStyle = {
    color: '#88665D',
    backGround: 'white',
  };
  return (
    <nav className={classes.Navigation}>
      <ul className={classes.Logo}>
        <NavLink exact style={style} activeStyle={activeStyle} to="/">
          <li>Fish Pili</li>
        </NavLink>
      </ul>
      <ul className={classes.NavUser}>
        <NavLink style={style} activeStyle={activeStyle} to="/cart">
          <li>Cart</li>
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/login">
          <li>Login</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default navigation;
