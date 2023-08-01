import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css';
// import resume from "./resume.pdf";

/**
 * Renders links for Home, About, Projects, and Resume
 *
 * App -> Navigation
 *
 * TODO: temporarily removed projects & resume from nav-
 * when ready add this back in:
 * <li>
 *   <NavLink className="nav-item md-margin" to="/projects">
 *     PROJECTS
 *    </NavLink>
 * </li>
 *
 *  <li>
 *     <a
 *       className="nav-item"
 *        href={resume}
 *        target="_blank"
 *        rel="noreferrer noopener">
 *        RESUME
 *      </a>
 *  </li>
 */

function Navigation() {

  return (
    <nav className="Navigation navbar navbar-expand-md fixed-top">
      <span
        id="logo"
        className="navbar-brand mb-0">
        <Link to="/">
          B.Juravic
        </Link>
      </span>
      <ul className="navbar-nav ml-auto">
        <li>
          <NavLink className="nav-item md-margin" to="/about">
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;