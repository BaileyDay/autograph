import React from "react";
import "../styling/mainCards.css";

const MainCards = () => {
  return (
    <div class="card-deck mt-5">
      <div class="card">
        <div class="card-body">
          <div className="cardImgContainer">
            <img src={require("../images/facility.png")} id="lessonsImg" />
          </div>
          <h5 class="card-title">Unparalled Facilities</h5>
          <p class="card-text">
            Our incredible facility is nestled on 23 acres conveniently located
            in Milton, Georgia. Countless amenities available to all customers.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div className="cardImgContainer">
            <img src={require("../images/horseBoard.png")} id="lessonsImg" />
          </div>
          <h5 class="card-title">Premium Boarding </h5>
          <p class="card-text">
            Our boarding program is unmatched. Amazing attention to detail
            creates a fun, safe and memorable experience for you and your horse.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div className="cardImgContainer">
            <img src={require("../images/lessons.png")} id="lessonsImg" />
          </div>
          <h5 class="card-title">Structured Lessons</h5>
          <p class="card-text">
            Compassionate and skilled instructors are ready to teach you
            regardless of your experience level. We are passionate about riding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
