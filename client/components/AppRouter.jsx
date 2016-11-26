import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import App from 'App'
import Home from 'Home'
import Foo from 'Foo'
import NotFound from 'NotFound'

let AppRouter = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='foo/*' component={Foo} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default AppRouter
