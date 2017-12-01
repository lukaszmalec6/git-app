import React, { Component } from "react";
import { Link } from "react-router";
export default class Button extends Component {
  render() {
    const { url, title, login, link, card } = this.props;

    return (
      <span>
        {link ? (
          <Link
            className={card ? "button button-card" : "button"}
            to={"/" + login}
          >
            {title}
          </Link>
        ) : (
          <a className={card ? "button button-card" : "button"} href={url}>
            {title}
          </a>
        )}
      </span>
    );
  }
}
