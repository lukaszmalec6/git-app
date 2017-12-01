import { Route } from "react-router";
import React, { Component } from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
import { Link } from "react-router";
import { NProgress } from "redux-nprogress";
import SearchBox from "../components/smart/SearchBox.jsx";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";
import FaGithubAlt from "react-icons/lib/fa/github-alt";
export default class Repos extends Component {
  handleRedirect = () => {
    this.props.router.push("/search");
  };
  render() {
    return (
      <div>
        <NProgress />
        <header className="repos-header">
          <div className="go-back" onClick={() => this.props.router.goBack()}>
            <FaArrowLeft size={30} />
          </div>
          <div>
            <FaGithubAlt size={50} color="#393939" />
            <SearchBox redirect={this.handleRedirect} />
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}
