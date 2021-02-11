import React, { useEffect, useCallback } from 'react';
import classes from './Main.module.css';
import Navigation from '../Navigation/Navigation';
import Shop from '../Shop/Shop';
import Login from '../Auth/Login';
import Product from '../Product/Product';
import { Route, Switch } from 'react-router-dom';
import * as action from '../../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';
const Main = ({ onCheckAuth, username, userID, onSetRoles }) => {
  useEffect(() => {
    onCheckAuth();
    checkRole();
  });

  const checkRole = useCallback(() => {
    if (userID) {
      axios
        .get(
          `https://fishpili-default-rtdb.firebaseio.com/users/${userID}.json`
        )
        .then((response) => {
          // console.log(response.data);

          // console.log(Object.keys(response.data).map((key) => response.data[key]));

          if (response.data === null) {
            axios
              .post(
                `https://fishpili-default-rtdb.firebaseio.com/users/${userID}.json`,
                { username, usrRole: 'isVendor' }
              )
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.err(err);
              });
          } else {
            const role = Object.keys(response.data).map(
              (key) => response.data[key].usrRole
            );
            onSetRoles(role);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userID, username, onSetRoles]);

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
    onCheckAuth: () => dispatch(action.checkAuth()),
    onSetRoles: (setRoles) => dispatch(action.setRoles(setRoles)),
  };
};
const mapStateToProps = (state) => {
  return {
    userID: state.userID,
    username: state.username,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
