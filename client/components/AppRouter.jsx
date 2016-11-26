import React from 'react'
import { IndexRedirect, Router, Route, browserHistory } from 'react-router'

import App from 'App'
import Page from 'Page'
import NotFound from 'NotFound'

let AppRouter = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='page/0' />
      <Route path='page/*' component={Page} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default AppRouter
