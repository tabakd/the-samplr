/**
 * App entry point
 */

// Polyfill
import "babel-core/polyfill";

// Libraries
import React from "react";
import Router from "react-router";

// Common utilities
import Session from "./common/session";

// Routers
import MainRouter from "./routers/main";


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";

var routes = MainRouter.getRoutes()

// Start the router
Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler data={data} />, document.getElementById(DOM_APP_EL_ID));
});
