import React from 'react'
import classes from './Navigation.module.css'
const navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <ul className={classes.Logo}>
                <li>Fish Pili</li>
            </ul>
            <ul className={classes.NavUser}>
                <li>Checkout</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default navigation;