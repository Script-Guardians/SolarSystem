import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { PopoutWindow }from './PopoutWindow';

export const Nav = () => {
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
        <Link to="/">Solar System</Link>
        <Link to="/venus">Venus</Link>
        <Link to="/mercury">Mercury</Link>
        <Link to="/earth">Earth</Link>
        <Link to="/mars">Mars</Link>
        <Link to="/jupiter">Jupiter</Link>
        <Link to="/saturn">Saturn</Link>
        <Link to="/uranus">Uranus</Link>
        <Link to="/neptune">Neptune</Link>
      </div>
      <button className="popout-toggle" onClick={handlePopoutToggle}>
        Toggle Popout
      </button>
      {isPopoutOpen && <PopoutWindow onClose={handleClosePopout} />}
    </div>
  );
};