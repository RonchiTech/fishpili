import React,{useEffect} from 'react';
import './App.css';
import Main from './components/Main/Main';
import Supplier from './components/Supplier/Supplier';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import authReducer from './redux/reducers/authReducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)));
const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Main />
        {/* <Supplier /> */}
      </Router>
    </Provider>
  );
};

export default App;
