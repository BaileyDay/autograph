import React from "react";
import "../styling/callToAction.css";

const CallToAction = () => {
  return (
    <div class="container">
      <section class="as-cta-boxed-gradient my-4 p-5">
        <div class="row">
          <div class="col-sm-12 col-md-7 col-lg-8">
            <div class="as-cta-desc">
              <h2 class="font-weight-normal">Why Autograph Farm?</h2>
              <p class="mb-0">
                Scenic setting. Exceptional care. Top-notch training.
                Camaraderie for all ages. Come, explore, and discover all that
                we have to offer.
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 col-lg-4 align-self-center">
            <div class="as-cta-btn">
              <a href="/about" class="btn btn-warning btn-lg">
                Learn More!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
