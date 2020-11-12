import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../styling/accomplishments.css";

const Accomplishments = () => {
  return (
    <>
      <NavBar />
      <div class="jumbotron jumbotron-fluid" id="AccomplishmentsJumbotron">
        <div class="container">
          <h1 class="display-4">Accomplishments</h1>
        
        </div>
      </div>
      <div className="galleryOuterContainer">
        <div className="gallery-container">
          <div class="gallery" id="gallery">
            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/top.JPG")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/2.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/new3.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/4.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/5.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/6.jpeg")}
                alt="Card image cap"
              />
            </div>
            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/7.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/8.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/9.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/10.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/11.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/12.jpeg")}
                alt="Card image cap"
              />
            </div>
            <div class="mb-3 pics animation all 2">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/13.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/14.jpeg")}
                alt="Card image cap"
              />
            </div>

            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/15.jpeg")}
                alt="Card image cap"
              />
            </div>
            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/16.jpeg")}
                alt="Card image cap"
              />
            </div>
            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/17.jpeg")}
                alt="Card image cap"
              />
            </div>
            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/18.jpeg")}
                alt="Card image cap"
              />
            </div>
            <div class="mb-3 pics animation all 1">
              <img
                class="img-fluid"
                src={require("../images/AccomplishmentImg/19.jpeg")}
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contactContainer">
        <a href="/contact" className="btn btn-primary" target="_blank">
          Contact us about Lessons
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Accomplishments;
