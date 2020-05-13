import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import MainCards from "./components/mainCards";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <MainCards />
      <Footer />
    </>
  );
}

export default App;
