import React from "react";
import {Link} from "gatsby";

export default () => (
  <header>
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">
    <button className="navbar-toggler " type=" button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon hamburger"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/#about" className="nav-link link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/#contact" className="nav-link link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link link">Projects</Link>
        </li>
      </ul>
    </div>
  </nav>
  </header>
)
