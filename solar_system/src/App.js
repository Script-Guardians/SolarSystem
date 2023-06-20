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
import { Pluto } from "./Pages/Pluto";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Gallery } from "./Pages/Gallery";
import { About } from "./Pages/About";
import { PopoutWindow } from "./PopoutWindow";
import "./App.css";

const App = () => {
  const pages = [
    { name: "Solar System", path: "/" },
    { name: "Venus", path: "/venus" },
    { name: "Mercury", path: "/mercury" },
    { name: "Earth", path: "/earth" },
    { name: "Mars", path: "/mars" },
    { name: "Jupiter", path: "/jupiter" },
    { name: "Saturn", path: "/saturn" },
    { name: "Uranus", path: "/uranus" },
    { name: "Neptune", path: "/neptune" },
    { name: "Pluto", path: "/pluto" },
  ];

  const [isPopoutOpen, setPopoutOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleLinkClick = (path) => {
    setSelectedPage(path);
    setPopoutOpen(true);
  };

  const handleClosePopout = () => {
    setSelectedPage(null);
    setPopoutOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Nav pages={pages} onLinkClick={handleLinkClick} />
        <div className="content">
          {isPopoutOpen && (
            <div className="popoutWindow">
              <PopoutWindow isOpen={isPopoutOpen} onClose={handleClosePopout}>
                {selectedPage && (
                  <Routes>
                    <Route path={selectedPage} element={<Mars />} />
                  </Routes>
                )}
              </PopoutWindow>
            </div>
          )}
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
          <Route path="/pluto" element={<Pluto />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
};

export default App;