import React from "react";
import heroImg from "../images/heroImg.jfif";
const Hero = () => {
  return (
    <div className="hero-sec">
      <img src={heroImg} className="hero-img" alt="hero-img" />
      <h3>Online detils</h3>
      <p>Hi, this is reg online info</p>
    </div>
  );
};

export default Hero;
