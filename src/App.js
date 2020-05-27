import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import MainCards from "./components/mainCards";
import Footer from "./components/footer";

import BusinessHours from "./components/businessHours";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <MainCards />
      <BusinessHours />
      <Footer />
    </>
  );
}

export default App;
