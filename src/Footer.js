import React from "react";
import linkedinIcon from "./linkedin-white2.png";
import githubIcon from "./github-white.png";
import "./Footer.css";

/**
 * Renders footer with contact info, including media profiles
 *
 * App -> Footer
*/

function Footer() {

  return(
    <nav className="Footer navbar navbar-expand fixed-bottom">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4 pt-2">brittiany@brittianyjuravic.com</li>
        <li className="nav-item mr-4">
          <a href="https://linkedin.com/in/b-juravic">
            <img className="icon" src={linkedinIcon} alt="LinkedIn icon"></img>
          </a>
        </li>
        <li className="nav-item mr-4">
          <a href="https://github.com/b-juravic">
            <img className="icon" src={githubIcon} alt="GitHub icon"></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;