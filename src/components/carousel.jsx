import React from "react";
import "../styling/carousel.css";

const Carousel = () => {
  return (
    <div className="carouselContainer">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../images/horse10.png")}
              class="carouselImage"
              alt="..."
            />
            <div class="carousel-caption d-none d-block">
              <h1 clas>Welcome to your horse farm!</h1>
              <div className="slideDescContainer">
                <p className="slideDescription">
                  At Autograph Farm we offer exceptional care, and training for
                  the equestrian enthusiast.
                </p>
              </div>
              <a className="btn btn-primary" href="/about">
                Learn More
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../images/horse30.png")}
              class="carouselImage"
              alt="..."
            />
            <div class="carousel-caption d-none d-block">
              <h1>Champions Ride here</h1>
              <div className="slideDescContainer">
                <p className="slideDescription">
                  We offer customized training programs for beginners to the
                  most advanced riders, helping you to achieve your goals.
                </p>
              </div>
              <a className="btn btn-primary" href="/lessons">
                Discover Lessons
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../images/horse20.png")}
              class="carouselImage"
              alt="..."
            />
            <div class="carousel-caption d-none d-block">
              <h1>First Class Facilities</h1>
              <div className="slideDescContainer">
                <p className="slideDescription">
                  Our Facility offers unrivaled amenities for you and your
                  horse. 12+ Acres of incredible facilities at your disposal.
                </p>
              </div>
              <a className="btn btn-primary" href="/boarding">
                See our home
              </a>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
