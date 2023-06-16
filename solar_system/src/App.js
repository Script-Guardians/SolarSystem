import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolarSystem from "./Pages/SolarSystem";
import { Mercury } from "./Pages/Mercury";
import { Venus } from "./Pages/Venus";
import { Earth } from "./Pages/Earth";
import { Mars } from "./Pages/Mars";
import { Jupiter } from "./Pages/Jupiter";
import { Saturn } from "./Pages/Saturn";
import { Uranus } from "./Pages/Uranus";
import { Neptune } from "./Pages/Neptune";
import { Nav } from "./Nav";
import "./App.css";
import { PopoutWindow } from "./PopoutWindow";

const App = () => {
  const [isPopoutOpen, setPopoutOpen] = useState(false);

  const handleNavClick = () => {
    setPopoutOpen(!isPopoutOpen);
  };

  return (
    <Router>
    <div className="app">
      <Nav onNavClick={handleNavClick} />
      <div className="content">
        <div className="popoutWindow">
          <PopoutWindow isOpen={isPopoutOpen} onClose={handleNavClick} />
        </div>
        <div className="solarSystem-page">
          <SolarSystem />
        </div>
      </div>
      <Routes>
        <Route path="/venus" element={<Venus />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Routes>
    </div>
  </Router>
);
};

export default App;
