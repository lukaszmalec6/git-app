import "./sass/main.scss";
import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import Layout from "./layout/index.jsx";
import UsersList from "./components/smart/UsersList.jsx";
import UserRepositiories from "./components/smart/UserRepositories.jsx";
export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route exact path="/" component={UsersList} />
          <Route path="/:login" component={UserRepositiories} />
        </Route>
      </Router>
    );
  }
}
