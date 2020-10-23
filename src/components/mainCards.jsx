import React from "react";
import "../styling/mainCards.css";

const MainCards = () => {
  return (
    <div className="card-deck mt-5">
      <div className="card">
        <div className="card-body">
          <div className="cardImgContainer">
            <img src={require("../images/LaidBack.png")} id="lessonsImg" />
          </div>
          <h5 className="card-title">Laid Back Enviroment</h5>
          <p className="card-text">
            Small 9 stall barn on 22 usable acres of pasture space, located in
            Alpharetta, Georgia. We offer two arenas, plenty of room to ride
            around the property, and we are only 5 minutes away from the 200
            acres of trails in Birmingham Park.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="cardImgContainer">
            <img src={require("../images/premium.JPG")} id="lessonsImg" />
          </div>
          <h5 className="card-title">Premium Boarding </h5>
          <p className="card-text">
            At Autograph Farm we put the horses first. Each horse is cared for
            as if it were our own. Every stall in the barn is oversized, matted,
            and heavily bedded. We feed four types of premium grain to tailor to
            your horses individual needs. We also feed the best quality hay you
            can find, which the horses are given throughout the day. Our stalls
            are cleaned multiple times each day, and we turn out all night or
            day depending on the season.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="cardImgContainer">
            <img src={require("../images/lessons.png")} id="lessonsImg" />
          </div>
          <h5 className="card-title">Personalized Lessons</h5>
          <p className="card-text">
            We have two very kind, passionate, and experienced instructors who
            truly care about both horse and rider. If you do not have your own
            horse that is not a problem. We have 8 lesson horses and ponies for
            riders of every level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
