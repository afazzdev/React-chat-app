import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../containers/Dashboard";
import LandingPage from "../containers/LandingPage";
import RegisterPage from "../containers/AuthPage/RegisterPage";
import LoginPage from "../containers/AuthPage/LoginPage";

import isAuth from "../components/Auth/InputField/isAuth";

const Routes = () => {
  const notFound = () => {
    return (
      <>
        <h1>404 Not Found</h1>
        <p>What are you looking here? just back, and refresh the page!</p>
      </>
    );
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={isAuth(LoginPage)} />
          <Route path="/register" component={isAuth(RegisterPage)} />
          <Route path="/dashboard" component={isAuth(Dashboard)} />
          <Route component={notFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
