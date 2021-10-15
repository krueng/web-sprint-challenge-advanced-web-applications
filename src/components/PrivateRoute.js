import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return <Route render={(props) => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to='/login' />
    }
  }} {...rest} />;
}
export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute