import "./sass/main.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersList from "./components/smart/UsersList.jsx";
import UserRepositiories from "./components/smart/UserRepositories.jsx";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={UsersList} />
          <Route exact path="/:nickname" component={UserRepositiories} />
        </div>
      </Router>
    );
  }
}
