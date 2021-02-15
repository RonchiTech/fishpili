import React, { useEffect } from 'react';
import classes from './Main.module.css';
import Navigation from '../Navigation/Navigation';
import Shop from '../Shop/Shop';
import Login from '../Auth/Login';
import Product from '../Product/Product';
import { Route, Switch } from 'react-router-dom';
import * as action from '../../redux/actions';
import { connect } from 'react-redux';

const Main = ({ onCheckAuth, username, userID, onSetRoles, isLoading }) => {
  useEffect(() => {
    onCheckAuth();
  }, [onCheckAuth]);

  let display = (
    <>
      <Navigation />
      <Switch>
        <Route path="/product/:id" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Shop} />
      </Switch>
    </>
  );
  if (isLoading) {
    display = (
      <div className={classes.ldsroller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return <div className={classes.Main}>{display}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => dispatch(action.checkAuthInit()),
    onSetRoles: (setRoles) => dispatch(action.setRoles(setRoles)),
  };
};
const mapStateToProps = (state) => {
  return {
    userID: state.userID,
    username: state.username,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
