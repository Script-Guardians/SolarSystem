import React from "react";
import leo from "../images/leo.png";
import rosie from "../images/rosie.png";
import mel from "../images/mel.png";
import imane from "../images/imane.png";
import './About.css';

export const About = () => {
  <h1>About Us</h1>
  return (
    <div className="aboutus-gallery">
       <h1>About Us</h1>
      <div className="aboutus-grid">
        <div className="aboutus-item"> 
          <img src={leo} alt="Leonard" />
        </div>
        <div className="aboutus-item">
          <img src={mel} alt="Melissa" />
        </div>
        <div className="aboutus-item">
          <img src={rosie} alt="Rosie" />
        </div>
        <div className="aboutus-item">
          <img src={imane} alt="Imane" />
        </div>
      </div>
    </div>
  );
};
