import React from "react";
import "./About.css";
import headShot from "./headshot.JPG";
import { aboutP1, aboutP2, aboutP3, aboutP4, aboutP5, aboutP6 } from "./about-content";

/** WIP */

function About() {

  return (
    <div className="About">
      <div className="headshot-container">
        {/* <div className="headshot"></div> */}
        <img src={headShot} className="headshot" alt="head shot" />
      </div>
      <div className="About-title-container">
        <h4 className="About-title">ABOUT</h4>
      </div>

      <div className="About-content-container">
        {/* <h4 className="About-title">ABOUT</h4> */}
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
        <h1 className="About-signature">Brittiany Juravic!</h1>
      </div>
    </div>
  );
}

export default About;
// container col-md-6 offset-md-3
// img-fluid rounded-circle"