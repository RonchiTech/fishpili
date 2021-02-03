import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Main />;
    </Router>
  );
};

export default App;
