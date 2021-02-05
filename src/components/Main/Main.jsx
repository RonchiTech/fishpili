import React from 'react';
import classes from './Main.module.css';
import Navigation from '../Navigation/Navigation';
import Shop from '../Shop/Shop';

import Product from '../Product/Product'
import { Route, Switch } from 'react-router-dom'
const main = () => {
  return (
    <div className={classes.Main}>
      <Navigation />
      <Switch>
        <Route path='/product/:id' component={Product} />
        <Route path='/' component={Shop} />
      </Switch>
    
    </div>
  );
};
export default main;
