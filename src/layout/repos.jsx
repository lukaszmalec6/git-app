import { Route } from "react-router";
import React, { Component } from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
import { Link } from "react-router";
import { NProgress } from "redux-nprogress";
export default class Repos extends Component {
  render() {
    const Back = "<< Back";
    return (
      <div>
        <NProgress />
        <header className="repos-header">
          <Link to="/">{Back}</Link>
          <img src={Logo} alt="Github" />
        </header>
        {this.props.children}
      </div>
    );
  }
}
