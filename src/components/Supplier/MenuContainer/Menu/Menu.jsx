import React from 'react'
import classes from './Menu.module.css'
const MenuContainer = () => {
    return (
      <div className={classes.MenuContainer}>
        <ul>
          <li>Dashboard</li>
          <li>Market</li>
          <li>Inventory</li>
        </ul>
      </div>
    );
}
export default MenuContainer;