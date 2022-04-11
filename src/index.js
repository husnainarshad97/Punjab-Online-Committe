import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import About from "views/Aboutus/Aboutus.js";
import Privacy from "views/LandingPage/Privacy";
import Terms from "views/LandingPage/Terms";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/aboutus" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
