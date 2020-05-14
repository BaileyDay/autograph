import React from "react";
import "../styling/footer.css";

const Footer = () => {
  return (
    <footer class="page-footer font-small pt-4">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Autograph Farm</h5>
            <p>The #1 rated equestrian barn in Alpharetta, Georgia.</p>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3" />
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Social Media</h5>

            <ul class="list-unstyled">
              <li>
                <a href="http://facebook.com" target="_blank">
                  <img
                    src={require("../images/facebook.png")}
                    alt=""
                    id="social"
                  />
                </a>
              </li>
              <li>
                <a href="http://twitter.com" target="_blank">
                  <img
                    src={require("../images/twitter.png")}
                    alt=""
                    id="social"
                  />
                </a>
              </li>
              <li>
                <a href="http://instagram.com" target="_blank">
                  <img
                    src={require("../images/instagram.png")}
                    alt=""
                    id="social"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Our Site</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Lessons</a>
              </li>
              <li>
                <a href="#!">Boarding</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#"> AutographFarm.com</a>
      </div>
    </footer>
  );
};

export default Footer;
