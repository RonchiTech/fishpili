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
      <Main/>
      {/* <Supplier /> */}
    </Router>
  );
};

export default App;
