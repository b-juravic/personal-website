import React from "react";
import "./About.css";
import headShot from "./images/headshot-250.JPG";
import { aboutP1, aboutP2, aboutP3, aboutP4, aboutP5, aboutP6, aboutP7, aboutP8 } from "./about-content";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

/** Renders headshot and about content.
 *
 * App -> Routes -> About
 */

function About() {

  return (
    <div className="About">
      <ScrollToTopOnMount />
      <div className="headshot-container">
        <img src={headShot} className="headshot" alt="head shot" />
      </div>
      <div className="About-title-container">
        <h4 className="About-title">ABOUT</h4>
      </div>
      <div className="About-content-container">
        <p
          className="About-content text-left">
          {aboutP1}
        </p>
        <p
          className="About-content text-left">
          {aboutP2}
        </p>
        <p
          className="About-content text-left">
          {aboutP3}
        </p>
        <p
          className="About-content text-left">
          {aboutP4}
        </p>
        <p
          className="About-content text-left">
          {aboutP5}
        </p>
        <p
          className="About-content text-left">
          {aboutP6}
        </p>
        <p
          className="About-content text-left">
          {aboutP7}
        </p>
        <p
          className="About-content text-left">
          {aboutP8}
        </p>
        <h1 className="About-signature">Brittiany Juravic!</h1>
      </div>
    </div>
  );
}

export default About;

