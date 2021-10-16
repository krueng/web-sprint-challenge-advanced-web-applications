import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")));

  const onLoggedIn = () => setIsLoggedIn(true);
  const onLoggedOut = () => setIsLoggedIn(false);

  return (
    <Router>
      <AppContainer>
        <LambdaHeader />
        <Header isLoggedIn={isLoggedIn} />

        <RouteContainer>
          <Switch>
            <PrivateRoute path="/view" component={View} />
            <PrivateRoute path="/logout" render={props => <Logout key={Date.now()} {...props} onLoggedOut={onLoggedOut} />} />
            <Route path="/login" render={props => <Login {...props} onLoggedIn={onLoggedIn} />} />
            <Route exact path="/" render={props => <Login {...props} onLoggedIn={onLoggedIn} />} />
          </Switch>
        </RouteContainer>
      </AppContainer>
    </Router>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
