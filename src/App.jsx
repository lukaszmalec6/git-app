import "./sass/main.scss";
import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";
import UsersLayout from "./layout/users.jsx";
import ReposLayout from "./layout/repos.jsx";
import UsersList from "./components/smart/UsersList.jsx";
import UserRepositiories from "./components/smart/UserRepositories.jsx";
import SearchResults from "./components/smart/SearchResults.jsx";
export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={UsersLayout}>
          <Route exact path="/" component={UsersList} />
        </Route>
        <Route component={ReposLayout}>
          <Route exact path="/search" component={SearchResults} />
          <Route path="/:login" component={UserRepositiories} />
        </Route>
      </Router>
    );
  }
}
