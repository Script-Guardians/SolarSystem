import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { PopoutWindow } from './PopoutWindow';

export const Nav = ({ pages }) => {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  const handlePopoutToggle = () => {
    setIsPopoutOpen(!isPopoutOpen);
  };

  const handleClosePopout = () => {
    setIsPopoutOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="nav-links">
        <Link to="/" className="nav-link">Solar System</Link>
        <Link to="/venus" className="nav-link">Venus</Link>
        <Link to="/mercury" className="nav-link">Mercury</Link>
        <Link to="/earth" className="nav-link">Earth</Link>
        <Link to="/mars" className="nav-link">Mars</Link>
        <Link to="/jupiter" className="nav-link">Jupiter</Link>
        <Link to="/saturn" className="nav-link">Saturn</Link>
        <Link to="/uranus" className="nav-link">Uranus</Link>
        <Link to="/neptune" className="nav-link">Neptune</Link>
      </div>
      <button className="popout-toggle" onClick={handlePopoutToggle}>
        Toggle Popout
      </button>
      {isPopoutOpen && (
        <PopoutWindow isOpen={isPopoutOpen} onClose={handleClosePopout} pages={pages} />
      )}
    </div>
  );
};
