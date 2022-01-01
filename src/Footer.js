import React from "react";
import "./Footer.css";

/**
 * Renders footer with contact info, including media profiles
 *
 * App -> Routes -> Footer
*/

function Footer() {

  return (
    <nav className="Footer navbar navbar-expand fixed-bottom">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4 pt-2">brittiany@brittianyjuravic.com</li>
        <li className="nav-item mr-4">
          <a
            href="https://linkedin.com/in/b-juravic"
            target="_blank"
            rel="noopener noreferrer">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#FFF" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.7s.8-1.8 1.8-1.8S8.3 4 8.3 5s-.8 1.7-1.8 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.4V19z" />
            </svg>
          </a>
        </li>
        <li className="nav-item mr-4">
          <a
            href="https://github.com/b-juravic"
            target="_blank"
            rel="noopener noreferrer">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#FFF" d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
