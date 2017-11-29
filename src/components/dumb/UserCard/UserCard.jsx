import React, { Component } from "react";
import "../../../sass/main.scss";
export default class UserCard extends Component {
  render() {
    return (
      <section className="user-card-container">
        <div>
          <img src={this.props.av} alt="Avatar" />
          <h1>{this.props.login}</h1>
        </div>
      </section>
    );
  }
}
