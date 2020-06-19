import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";

/**
 * Renders routes for About, Projects, and Home
 *
 * App -> Routes
 */

function Routes() {

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;