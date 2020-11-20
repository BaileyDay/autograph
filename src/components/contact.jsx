import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../styling/contact.css"

const Contact = () => {
  return (
    <>
      <NavBar />
      <div class="jumbotron jumbotron-fluid" id="contactJumbotron">
        <div class="container">
          <h1 class="display-4">Contact Us</h1>
        
        </div>
      </div>
      <div className="contactPageContainer">
      <h2 className="featurette-heading">Join our team!</h2>
      <br></br>
      <p className="lead">Interested in lessons or boarding? Please call or text Juliana at <a href="tel:678-836-6990">678-836-6990</a></p> 
      <br>
      </br>
      <h2 className="featurette-heading">Our Location</h2>
      <br></br>
      <p className="lead">3507 Union Hill Rd, Alpharetta, GA 30004</p>
      </div>
      <br></br>
      <Footer />
    </>
  );
};

export default Contact;
