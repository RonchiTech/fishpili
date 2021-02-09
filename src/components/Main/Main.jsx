import React,{useEffect} from 'react';
import classes from './Main.module.css';
import Navigation from '../Navigation/Navigation';
import Shop from '../Shop/Shop';
import Login from '../Auth/Login';
import Product from '../Product/Product';
import { Route, Switch } from 'react-router-dom';
import * as action from '../../redux/actions'
import {connect} from 'react-redux'
const Main = ({ onAuth }) => {
  useEffect(() => {
    onAuth();
  }, [onAuth]);
  return (
    <div className={classes.Main}>
      <Navigation />
      <Switch>
        <Route path="/product/:id" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Shop} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: () => dispatch(action.authSuccess()),
  };
};
export default connect(null, mapDispatchToProps)(Main);
