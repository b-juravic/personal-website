import React from "react";
import "./About.css";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import headShot from "./images/headshot-250.JPG";
import {
  aboutP1,
  aboutP2,
  aboutP3,
} from "./about-content";


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
        <h1 className="About-signature">Brittiany Juravic!</h1>
      </div>
    </div>
  );
}

export default About;
