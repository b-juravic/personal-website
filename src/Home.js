import React from "react";
import "./Home.css";

/**
 * Renders introduction
 *
 * App -> Routes -> Home
 */

function Home() {

  return (
    <div className="Home container-fluid">
      <div className="row justify-content-around">
        <div className="intro col-12">
          <h1 className="intro-name">I'm Brittiany,</h1>
          <h2 className="intro-title">a software engineer.</h2>
          <hr className="my-4"></hr>
          <h4 className="intro-tagline">I love debugging and trying to break {"{test}"} things!</h4>
        </div>
      </div>
  </div>
  );
}

export default Home;
