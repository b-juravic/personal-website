import React from "react";
import "./Project.css";

/**
 * Renders info about each project.
 *
 * Props
 * -- project: {
 *     name,
 *     description,
 *     imgSrcMd,
 *     imgSrcLg,
 *     imgAlt,
 *     imgCaption,
 *     demoLink,
 *     githubLink,
 *     technologies,
 *   }
 *
 * App -> Routes -> Projects -> Project
 */

function Project({ project }) {

  return (
    <div className="Project project-row row justify-content-around align-items-center">
      <div className="project-img-container col-10 col-md-8 col-lg-5 rounded mt-2">
        <picture>
          <source
            srcSet={project.imgSrcLg}
            media="screen and (min-width: 900px)">
          </source>
          <img
            className="project-img"
            src={project.imgSrcMd}
            alt={project.imgAlt}>
          </img>
        </picture>
      </div>
      <div className="description-container col-10 col-md-8 col-lg-5 rounded mt-2">
        <h1 className="title">{project.name}</h1>
        <span className="external-links">
          <a
            className="btn btn-light btn-sm mr-2"
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            className="btn btn-light btn-sm"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </span>
        <p className="description pt-2">{project.description}</p>
        <footer className="foot">{project.technologies}</footer>
      </div>
    </div>
  );
}

export default Project;