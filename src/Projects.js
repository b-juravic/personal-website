import React from "react";
import "./Projects.css";
import { project1 } from "./projects-content";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

/**
 * Renders info about each project, including external links to deployed demo and GitHub.
 *
 * App -> Routes -> Projects
 */

function Projects() {

  return (
    <div className="Projects container-fluid">
      <ScrollToTopOnMount />
      <div className="heading-row row justify-content-around">
        <h4 className="heading-title col-11">PROJECTS</h4>
      </div>
      <div className="Project-row row justify-content-around align-items-center">
        <div className="gif-container col-10 col-md-5 rounded mt-2">
          <img
            src="https://media3.giphy.com/media/iIeZiCgEHx3ptK5cVx/giphy.gif"
            alt="jobly gif"
            className="gif img-fluid rounded">
          </img>
        </div>
        <div className="description-container col-10 col-md-5 rounded mt-2">
          <h1 className="title">Jobly</h1>
          <span className="extrenal-links">
            <a
              className="btn btn-light btn-sm mr-2"
              href="https://jobly.demo.brittianyjuravic.com">
              Demo
            </a>
            <a
              className="btn btn-light btn-sm"
              href="https://github.com/b-juravic/react-jobly">
              GitHub
            </a>
          </span>
          <p className="description pt-2">{project1}</p>
          <footer className="foot">React | Node | Express | PostgreSQL</footer>
        </div>
      </div>
    </div>
  );
}

export default Projects;

