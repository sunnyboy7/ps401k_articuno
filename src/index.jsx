import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
