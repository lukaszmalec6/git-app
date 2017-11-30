import React, { Component } from "react";
export class UserCardPreloader extends Component {
  render() {
    return (
      <section className="user-card-container-preloader">
        <div>
          <span className="img-preloader" />
        </div>
      </section>
    );
  }
}
export default class UsersListPreloader extends Component {
  render() {
    return (
      <div className="container">
        <section className="users-list-page">
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
          <UserCardPreloader />
        </section>
      </div>
    );
  }
}
