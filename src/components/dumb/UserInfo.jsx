import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UserInfo extends Component {
  render() {
    const { login, av, location, type, name } = this.props;
    return (
      <section className="user-info">
        <img src={av} alt={login} />
        <h1>{login}</h1>
        <h2>{name}</h2>
        <h2>{type}</h2>
        <h2>{location}</h2>
      </section>
    );
  }
}
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  av: PropTypes.string.isRequired,
  location: PropTypes.string,
  type: PropTypes.string.isRequired
};
