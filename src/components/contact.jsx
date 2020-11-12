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
      <h1 className="placeHolder">Contact Page</h1>
      <Footer />
    </>
  );
};

export default Contact;
