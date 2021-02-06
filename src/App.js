import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Supplier from './components/Supplier/Supplier'
import {Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      {/* <Supplier />; */}
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;
