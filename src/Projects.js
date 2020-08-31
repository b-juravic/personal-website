import React from "react";
import "./Projects.css";
import { project1, project1Images } from "./projects-content";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Carousel from "./Carousel";

/**
 * Renders info about each project, including Carousel of images and external links to deployed demo and GitHub.
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
        <div className="project-img-container col-10 col-md-8 col-lg-5 rounded mt-2">
          <Carousel items={project1Images} />
        </div>
        <div className="description-container col-10 col-md-8 col-lg-5 rounded mt-2">
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