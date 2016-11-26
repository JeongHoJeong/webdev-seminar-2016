import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App.jsx';

let root = document.getElementById('root');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>
), root);
