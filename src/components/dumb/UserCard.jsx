import React, { Component } from "react";
import Button from "./Button.jsx";
import { Link } from "react-router";
import PropTypes from "prop-types";
export default class UserCard extends Component {
  render() {
    const { av, login, gitUrl, type } = this.props;
    return (
      <section className="user-card-container">
        <div>
          <Link to={"/" + login}>
            <img src={av} alt="Avatar" />
          </Link>
          <Link to={"/" + login}>
            <div className="desc">
              <h1>{login}</h1>
              <h2>{type}</h2>
            </div>
          </Link>
        </div>
        <div>
          <Button link login={login} title="Repos" card />
          <Button url={gitUrl} title="Github" card />
        </div>
      </section>
    );
  }
}
UserCard.propTypes = {
  login: PropTypes.string.isRequired,
  av: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
