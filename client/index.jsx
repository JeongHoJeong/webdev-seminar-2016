import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import App from 'App'
import Home from 'Home'
import Foo from 'Foo'

let root = document.getElementById('root')

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='foo' component={Foo} />
    </Route>
  </Router>
), root)
