import React, { Component } from "react";
import Button from "../dumb/Button.jsx";
import Colors from "../dumb/LangColors.json";
export default class UserCard extends Component {
  render() {
    const { name, description, lang, url, stars, watchers } = this.props;
    return (
      <section className="repo-card-container">
        <div>
          <div className="desc">
            <a href={url}>
              <h1>{name}</h1>
              <h2>{description}</h2>
            </a>
            <div className="details">
              <span style={{ backgroundColor: Colors[lang] }} />
              <h3>{lang ? lang : "Unspecified lang"}</h3>
              <span />
              <h3>Stars: {stars}</h3>
              <span />
              <h3>Watchers: {watchers}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
