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
                <img src={require("../images/Staff/profile1.png")} alt="" />
                <h5 className="card-title">Juliana Czkalala</h5>
                <h6 className="staffTitle">CEO</h6>
                <p className="card-text">
                  Loves horses and everything about horses. Has been a CEO for
                  one year. Loves jumping horses and playing with baby horses.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className="card-body ">
                <img src={require("../images/Staff/profile1.png")} alt="" />
                <h5 className="card-title">Ava Lastname</h5>
                <h6 className="staffTitle">Trainer</h6>
                <p className="card-text">
                  Loves horses and everything about horses. Has been a CEO for
                  one year. Loves jumping horses and playing with baby horses.
                  loves big and small horses.
                </p>
              </div>
            </div>
          </div>
          <h2 className="staffListing">Our Horses</h2>
          <div className="row">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Staff;
