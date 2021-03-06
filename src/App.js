import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Main from "./componnets/Board/Main";
import Login from "./componnets/login/login";
import Signup from "./componnets/login/signup";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route> <Route path="/signup" exact>
        <Signup />
      </Route>
      <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
