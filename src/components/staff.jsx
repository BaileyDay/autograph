import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../styling/staff.css";

const Staff = () => {
  return (
    <>
      <NavBar />
      <div className="jumbotron jumbotron-fluid" id="staffJumbotron">
        <div className="container">
          <h1 className="display-4">The Faces of Autograph Farm</h1>
          <p className="lead">Meet our family!</p>
        </div>
      </div>
      <div className="staffCardContainer">
        <div className="card-deck staffCard">
          <h2 className="staffListing">Our Staff</h2>
          <div className="row">
            <div className="card ">
              <div className="card-body ">
                <img src={require("../images/Staff/jules.JPG")} alt="" />
                <h5 className="card-title">Juliana Czkalala</h5>
                <h6 className="staffTitle">CEO</h6>
                <p className="card-text">
                  Loves horses and everything about horses. Has been a CEO's for
                  one year. Loves jumping horses and playing with baby horses.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className="card-body ">
                <img src={require("../images/Staff/ava.jpeg")} alt="" />
                <h5 className="card-title">Ava Daughters</h5>
                <h6 className="staffTitle">Assistant Trainer</h6>
                <p className="card-text">
                  Ava grew up riding horses from almost day one. She has shown
                  successfully in equitation and hunters around Georgia and the
                  Southeast. Ava has worked at multiple summer camps, teaching
                  children fundamentals of riding and horsemanship, as she knows
                  that the true "horse person" cultivates understanding and
                  knowledge on and off the horse. Ava competed in IEA from 6th
                  through 12th grade, qualifying for regional, zone and national
                  competitions multiple times. She captained her Pace Academy
                  IEA team her junior and senior years of high school, deepening
                  her leadership and instructional horse and people skills. Ava
                  also, attends Georgia State University, and is currently
                  majoring in business marketing. For her, the most satisfying
                  part of coaching is seeing confidence grow and flourish in her
                  students -- on and off the horse.
                </p>
              </div>
            </div>
          </div>
          {/* <h2 className="staffListing">Our Horses</h2> */}
          {/* <div className="row">
            <div className="card ">
              <div className="card-body ">
                <img src={require("../images/Staff/profile2.png")} alt="" />
                <h5 className="card-title">Some Horse</h5>
                <h6 className="staffTitle">Lesson Horse</h6>
                <p className="card-text">
                  the goodest horse, real good at lessons and stuff. Always
                  listens, loves carrots.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className="card-body ">
                <img src={require("../images/Staff/profile2.png")} alt="" />
                <h5 className="card-title">Another Horse</h5>
                <h6 className="staffTitle">Not a lesson horse</h6>
                <p className="card-text">
                  Ok horse, not always the goodest horse. Needs horse lessons,
                  likes all the hay and grass. Also likes carrots.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Staff;
