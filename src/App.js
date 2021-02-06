import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Supplier from './components/Supplier/Supplier'
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Supplier />;
    </Router>
  );
};

export default App;
