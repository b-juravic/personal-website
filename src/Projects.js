import React from "react";
import "./Projects.css";
import { projectList } from "./projects-content";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Project from "./Project";

/**
 * Renders all projects.
 *
 * Props
 * -- projects: array of project objects
 *  [{
 *     name,
 *     description,
 *     imgSrcMd,
 *     imgSrcLg,
 *     imgAlt,
 *     imgCaption,
 *     demoLink,
 *     githubLink,
 *     technologies,
 *   }]
 *
 * App -> Routes -> Projects
 */

function Projects({ projects=projectList }) {

  return (
    <div className="Projects container-fluid">
      <ScrollToTopOnMount />
      <div className="heading-row row justify-content-around">
        <h4 className="heading-title col-11">PROJECTS</h4>
      </div>
      {projects.map((p) => <Project project={p} key={p.name} />)}
    </div>
  );
}

export default Projects;