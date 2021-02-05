import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';
const MenuContainer = () => {
  const style = {
    color: 'black',
    listStyle: 'none',
    textDecoration: 'none',
    borderRadius: '25px',
  };
  const activeStyle = {
    color: 'white',
    backgroundColor: 'black',
    padding: '5px 15px'
  };
  return (
    <div className={classes.MenuContainer}>
      <ul>
        <li>
          <NavLink exact style={style} activeStyle={activeStyle} to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink style={style} activeStyle={activeStyle} to="/market">
            Market{' '}
          </NavLink>
        </li>
        <li>
          <NavLink style={style} activeStyle={activeStyle} to="/inventory">
            Inventory
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MenuContainer;
