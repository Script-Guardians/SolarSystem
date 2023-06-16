import React from 'react';
import { Link } from 'react-router-dom';
import './PopoutWindow.css';


export const PopoutWindow = ({ isOpen, onClose }) => {
  const handleLinkClick = (event) => {
    if (event.target.classList.contains('popout-window')) {
      onClose();
    }
  };

  return (
    <div className={`popout-window ${isOpen ? 'open' : ''}`}>
      <div className="popout-window-content">
      <button className="close-button" onClick={onClose}>x</button>
        <Link to="/" onClick={handleLinkClick}>
          Solar System
        </Link>
        <Link to="/venus" onClick={handleLinkClick}>
          Venus
        </Link>
        <Link to="/mercury" onClick={handleLinkClick}>
          Mercury
        </Link>
        <Link to="/earth" onClick={handleLinkClick}>
          Earth
        </Link>
        <Link to="/mars" onClick={handleLinkClick}>
          Earth
        </Link>
        <Link to="/jupiter" onClick={handleLinkClick}>
          Earth
        </Link>
        <Link to="/saturn" onClick={handleLinkClick}>
          Earth
        </Link>
        <Link to="/uranus" onClick={handleLinkClick}>
          Earth
        </Link>
        <Link to="/neptune" onClick={handleLinkClick}>
          Earth
        </Link>
      </div>
    </div>
  );
};