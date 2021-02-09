import React from 'react';
import classes from './Navigation.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/index'
const Navigation = ({ userName,onAuth }) => {
  
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
          <li> {userName ? userName : 'Login'}</li>
        </NavLink>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

export default connect(mapStateToProps)(Navigation);
