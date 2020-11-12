import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../styling/boarding.css"

const Boarding = () => {
  return (
    <>
      <NavBar />
      <div class="jumbotron jumbotron-fluid" id="boardingJumbotron">
        <div class="container">
          <h1 class="display-4">Boarding</h1>
           
        </div>
      </div>
      <div className="boardingContainer">
        <div className="contactContainer">
          <a href="/contact" className="btn btn-primary" target="_blank">
            Contact us about Boarding
          </a>
        </div>
        <div class="row featurette">
        <div class="col-md-6">
            <img
              src={require("../images/BoardingOne.JPG")}
              alt=""
              className="boarding1"
            />
          </div>
          <div class="col-md-6">
            <img
              src={require("../images/BoardingTwo.JPG")}
              alt=""
              className="boarding1"
            />
          </div>
          <div class="col-md-13">
            <h2 class="featurette-heading" id="firstHeader">Our Barn is very reasonably sized so that we are able to care for each horses specific needs.</h2>
            
          </div>
        </div>
        <div className="boarding2Container">
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Open Pastures</h2>
              <p class="lead">
                We have spacious grassy pastures that our horses are able to enjoy all day or night, depending on the season. We offer individual or small group turnout, and we supplement with hay throughout the winter. <br />
                <br />
                
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                src={require("../images/pastures.JPG")}
                alt=""
                className="lessons1"
              />
            </div>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Our Legacy</h2>
            <p class="lead">
              Many Autograph riders compete at the most advanced hunter / jumper
              ‘AA’ level. Whether your interest is in the hunter, jumper, or
              equitation ring, our trainers have the skill and experience to
              take you to this highest level. We compete regularly at shows
              throughout the southeast and often have riders competing at the
              top levels in Kentucky, Harrisburg, and Devon.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={require("../images/lessons3.jpg")}
              alt=""
              className="lessons1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Boarding;
