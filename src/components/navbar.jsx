import React from "react";
import "../styling/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark navbar-custom"
      id="navbar"
    >
      <img
        src={require("../images/whiteLogo.png")}
        alt="Autograph Farm Logo"
        className="logo"
      />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" active>
            <NavLink
              exact
              activeClassName="nav-link active"
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="nav-link active"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="nav-link active"
              className="nav-link"
              to="/lessons"
            >
              Lessons
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="nav-link active"
              className="nav-link"
              to="/boarding"
            >
              Boarding
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
