import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { url, title, login, link } = this.props;
    return (
      <span className="button">
        <a href={url}>{title}</a>
      </span>
    );
  }
}
