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
            <p class="lead" id="firstHeader">Our Barn is very reasonably sized so that we are able to care for each horses specific needs.</p>
            
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
            <h2 class="featurette-heading">Spacious Stalls</h2>
            <p class="lead">
              We have large 12' x 14' stalls that are cleaned daily and heavily bedded at all times.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={require("../images/Stalls.jpeg")}
              alt=""
              className="lessons1"
            />
          </div>
        </div>
        <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Happy Horses</h2>
              <p class="lead">
                We offer four different types of grain, three different types of hay, and are happy to feed supplements to make sure every horses needs are met. We also have hay nets for every horse, to insure that they always have something to eat and occupy their time indoors.
                <br />
                <br />
                The barn owner lives on property and the barn manager lives less than 5 minutes away. The entire property is fenced in and gated to insure your horses safety.
                
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                src={require("../images/BoardingThree.jpeg")}
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
