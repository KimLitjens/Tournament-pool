import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/sign-up/sign-up';
import SignIn from './pages/sign-in/sign-in';
import Players from './pages/players/players';
import HomePage from './pages/homepage/homepage';
import * as ROUTES from './constants/routes'
import PrivateRoute from './containers/private-route';
import { ProvideAuth } from './utils/hooks/useAuth';

function App() {
  return (
    <Router>
      <Switch>
        <ProvideAuth>
          <Route exact path={ROUTES.SIGN_UP}>
            <SignUp />
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
          <Route path={ROUTES.PLAYERS} >
            <Players />
          </Route>
          <PrivateRoute exact path={ROUTES.HOMEPAGE}>
            <HomePage />
          </PrivateRoute>
        </ProvideAuth>
      </Switch>
    </Router>
  )
}

export default App;
