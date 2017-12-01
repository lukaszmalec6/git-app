import { Route } from "react-router";
import React, { Component } from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
import { NProgress } from "redux-nprogress";
import SearchBox from "../components/smart/SearchBox.jsx";
import FaGithub from "react-icons/lib/fa/github";
export default class Users extends Component {
  handleRedirect = () => {
    this.props.router.push("/search");
  };
  render() {
    return (
      <div>
        <NProgress />
        <header>
          <FaGithub size={100} color="#393939" />
          <SearchBox redirect={this.handleRedirect} />
        </header>

        {this.props.children}
      </div>
    );
  }
}
