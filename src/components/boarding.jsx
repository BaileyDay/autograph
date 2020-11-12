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
      <div className="lessonsContainer">
        <div className="contactContainer">
          <a href="/contact" className="btn btn-primary" target="_blank">
            Contact us about Lessons
          </a>
        </div>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Training for Every Level</h2>
            <p class="lead">
              Whether you’re a first-time rider or an accomplished equestrian
              looking to hone your talents, Autograph Farm offers something for
              everyone. <br />
              <br />
              Our talented trainers offer customized lesson programs tailored to
              the unique needs and level of each rider. Many of our clients have
              been with us since they began, starting in our lesson program and
              progressing into ownership. Our approach to training is designed
              to help riders reach their individual goals. <br />
              <br />
              We offer a wide array of options, from beginner lead-line sessions
              to the most competitive hunter / jumper levels. Additionally, our
              summer camps are a fun, engaging way to let young riding
              enthusiasts further explore their horse interests.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={require("../images/lessons1.jpg")}
              alt=""
              className="lessons1"
            />
          </div>
        </div>
        <div className="lessons2Container">
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Quality Horses</h2>
              <p class="lead">
                We have an exceptional range of quality lesson horses and
                ponies, many that have been in our family for years. Our ponies
                are safe and easy to manage for the beginning rider – and they
                love the attention! As riders progress, we have a lovely
                assortment of larger, more experienced horses ideal for
                transitioning to a more competitive level. <br />
                <br />
                Our horses are available for lessons, partial leases, and horse
                shows to enable our students to begin to compete. Most
                importantly, we have fun – and make sure our students do too!
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                src={require("../images/lessons2.jpg")}
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
