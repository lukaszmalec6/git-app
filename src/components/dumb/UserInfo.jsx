import React, { Component } from "react";
export default class UserInfo extends Component {
  render() {
    const { login, av, location, type } = this.props;
    return (
      <section className="user-info">
        <img src={av} alt={login} />
        <h1>{login}</h1>
        <h2>{type}</h2>
        <h2>{location}</h2>
      </section>
    );
  }
}
