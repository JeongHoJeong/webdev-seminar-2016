import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import 'index.css'
import App from 'App'
import Home from 'Home'
import Foo from 'Foo'

let root = document.getElementById('root')

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='foo' component={Foo} />
    </Route>
  </Router>
), root)
