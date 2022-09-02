import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import homeReducer from './redux/reducers/homeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux'

const store = createStore(homeReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
