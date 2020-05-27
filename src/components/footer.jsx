import React from "react";
import "../styling/footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase" id="BarnTitle">
              Autograph Farm
            </h5>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Social Media</h5>

            <ul className="list-unstyled">
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

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Our Site</h5>

            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">About</a>
                <ul className="subList">
                  <li>
                    <a href="/accomplishments">Accomplishments</a>
                  </li>
                  <li>
                    <a href="/staff">Our Staff</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/lessons">Lessons</a>
              </li>
              <li>
                <a href="/boarding">Boarding</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#"> AutographFarm.com</a>
      </div>
    </footer>
  );
};

export default Footer;
