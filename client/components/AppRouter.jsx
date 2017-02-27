import React from 'react'
import { IndexRedirect, Router, Route, browserHistory } from 'react-router'
import { RootPath } from 'util'

import App from 'App'
import Screen from 'Screen'
import NotFound from 'NotFound'

let AppRouter = (
  <Router history={browserHistory}>
    <Route path={`${RootPath}/`} component={App}>
      <IndexRedirect to='page/1' />
      <Route path='page/*' component={Screen} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default AppRouter
