import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

/**WIP */

function Navigation() {

  return (
    <nav className="Navigation navbar navbar-expand-md fixed-top">
      <span
        className="navbar-brand mb-0">
        B.Juravic
      </span>
      <ul className="navbar-nav ml-auto">
        <li>
          <NavLink className="nav-item mr-4" to="/">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/projects">
            PROJECTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;