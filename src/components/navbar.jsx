import React from "react";
import "../styling/navbar.css";

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
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lessons
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Boarding
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
