import "./sass/main.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./layout/index.jsx";
import UsersList from "./components/smart/UsersList.jsx";
import UserRepositiories from "./components/smart/UserRepositories.jsx";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" component={UsersList} />
          <Layout exact path="/:nickname" component={UserRepositiories} />
        </Switch>
      </Router>
    );
  }
}
