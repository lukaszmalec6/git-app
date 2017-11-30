import { Route } from "react-router";
import React, { Component } from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
export default class Layout extends Component {
  render() {
    console.log("lay");
    return (
      <div className="container">
        <header>
          <img src={Logo} alt="Github" />
        </header>
        {this.props.children}
      </div>
    );
  }
}
