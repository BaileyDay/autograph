import React from "react";
import "../styling/carousel.css";

const Carousel = () => {
  return (
    <div className="carouselContainer">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../images/carousel-1.png")}
              className="carouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src={require("../images/carousel-2.png")}
              className="carouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/carousel-3.png")}
              className="carouselImage"
              alt="..."
              id="thirdImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/carousel-4.png")}
              className="carouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/carousel-5.png")}
              className="carouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/carousel-6.png")}
              className="carouselImage"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
