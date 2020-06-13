import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";

/** Renders routes for About, Projects, Contact */

function Routes() {

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;