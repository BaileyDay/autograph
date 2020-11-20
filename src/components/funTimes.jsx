import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../styling/funTimes.css";

const funTimes = () => {
    return (
      <>
        <NavBar />
        <div class="jumbotron jumbotron-fluid" id="AccomplishmentsJumbotron">
          <div class="container">
            <h1 class="display-4">Fun times</h1>
          </div>
        </div>
        <div className="galleryOuterContainer">
          <div className="gallery-container">
            <div class="gallery" id="gallery">
              {/* <div class="mb-3 pics animation all 2">
                <img
                  class="img-fluid"
                  src={require("../images/AccomplishmentImg/top.JPG")}
                  alt="Card image cap"
                />
              </div> */}
              <h1>PlaceHolder</h1>
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
  
  export default funTimes;