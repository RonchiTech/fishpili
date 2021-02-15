import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Supplier from './components/Supplier/Supplier';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ userRole }) => {
  let route = <Route path="/" component={Main} />;
  if (userRole && userRole === 'isVendor') {
    route = (
      <>
        <Route path="/" component={Supplier} />
        <Redirect to="/" />;
      </>
    );
  } else {
    route = (
      <>
        <Route path="/" component={Main} />;
        <Redirect to="/" />;
      </>
    );
  }
  return <Router>{route}</Router>;
};
const mapStateToProps = (state) => {
  return {
    userRole: state.userRole,
  };
};
export default connect(mapStateToProps)(App);
