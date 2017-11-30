import { Route } from "react-router";
import React, { Component } from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
import { NProgress } from "redux-nprogress";
import SearchBox from "../components/smart/SearchBox.jsx";
export default class Users extends Component {
  handleRedirect = () => {
    this.props.router.push("/lukaszmalec6");
  };
  render() {
    return (
      <div>
        <NProgress />
        <header>
          <img src={Logo} alt="Github" />
          <SearchBox redirect={this.handleRedirect} />
        </header>

        {this.props.children}
      </div>
    );
  }
}
