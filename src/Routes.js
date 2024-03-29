import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
// import Projects from "./Projects";
import Home from "./Home";
import Footer from "./Footer";

/**
 * Renders routes for About and Projects (both with Footer), and Home
 *
 * App -> Routes
 *
 * TODO: temporarily removed projects route- when ready add this back in:
 * <Route exact path="/projects">
 *  <Projects />
 *  <Footer />
 * </Route>
 */

function Routes() {

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/about">
          <About />
          <Footer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;