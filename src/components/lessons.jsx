import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../styling/lessons.css";

const Lessons = () => {
  return (
    <>
      <NavBar />
      <div class="jumbotron jumbotron-fluid" id="lessonsJumbotron">
        <div class="container">
          <h1 class="display-4">Lessons</h1>
          <p class="lead">
            Autograph Farm offers a variety of lessons for every skill level.
          </p>
        </div>
      </div>
      <div className="lessonsContainer">
        <div className="contactContainer">
          <a href="/contact" className="btn btn-primary" target="_blank">
            Contact us about Lessons
          </a>
        </div>
        <div class="row featurette">
          <div class="col-md-7">
            <p class="lead">
            At Autograph Farm we offer lessons for all levels of riders ages four and up.  
            Whether you want to lesson just for fun or show at some of the top shows in the country, we can happily accommodate you!  
            <br></br><br></br>
            If you do not own a horse, no problem - we have eight sweet horses and ponies available for lessons at varying skill sets.  
            Several of these are even leasable for shows.  We offer group lessons for all ages, as well as private lessons for those preferring individual instruction.  
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={require("../images/lessons01.jpeg")}
              alt=""
              className="lessons1"
            />
          </div>
        </div>
        <div className="lessons2Container">
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <br></br>
              <p class="lead">
              We also emphasize horse care as an integral part of horsemanship.  As such, we spend time on the fundamentals of horse care before and after lessons.  We also provide opportunities outside of lessons for those wishing to further advance their horse-care skills.  
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                src={require("../images/lessons03.jpeg")}
                alt=""
                className="lessons1"
              />
            </div>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
          <img
              src={require("../images/lessons02.PNG")}
              alt=""
              className="lessons1"
            />
          </div>
          <div class="col-md-5">
            <img
              src={require("../images/lessons04.jpeg")}
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

export default Lessons;
