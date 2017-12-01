import React, { Component } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
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
Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  login: PropTypes.string,
  link: PropTypes.bool,
  card: PropTypes.bool
};

Button.defaultProps = {
  link: false,
  card: false
};
