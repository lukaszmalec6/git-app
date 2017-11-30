import { Route } from "react-router";
import React, { Component } from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
import { NProgress } from "redux-nprogress";
export default class Users extends Component {
  render() {
    return (
      <div>
        <NProgress />
        <header>
          <img src={Logo} alt="Github" />
        </header>

        {this.props.children}
      </div>
    );
  }
}
