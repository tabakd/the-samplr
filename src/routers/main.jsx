import React from "react";
import { Route, DefaultRoute, RouteHandler, Link } from "react-router";

import HomePage from "../pages/home/page";


export default class MainRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="main">
              <header>
        <h1>svmplr</h1>
    </header>
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }

  static getRoutes = function() {
    return (
      <Route name="app" path="/" handler={MainRouter}>
        <DefaultRoute name="home" handler={HomePage} />
      </Route>
    );
  }

}
