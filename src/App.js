import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Browse, Signup, Signin } from './pages'
import * as ROUTES from './constants/routes'

const App = () => {
  return (
    <Router>
      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>
      <Route path={ROUTES.BROWSE} exact>
        <Browse />
      </Route>
      <Route path={ROUTES.SIGNUP} exact>
        <Signup />
      </Route>
      <Route path={ROUTES.SIGNIN} exact>
        <Signin />
      </Route>
    </Router>
  )
}

export default App
