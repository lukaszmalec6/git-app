import { Route } from "react-router-dom";
import React from "react";
import "../sass/main.scss";
import Logo from "../assets/github.png";
export const Layout = ({ component: Component, ...rest }) => {
  return (
    <div className="container">
      <header>
        <img src={Logo} alt="Github" />
      </header>
      <Route
        {...rest}
        render={matchProps => (
          <div>
            <Component {...matchProps} />
          </div>
        )}
      />
    </div>
  );
};

export default Layout;
