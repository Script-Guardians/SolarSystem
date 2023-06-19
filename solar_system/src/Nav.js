import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PopoutWindow } from './PopoutWindow';
import logo from "./images/guardians.png";
import './Nav.css';

export const Nav = ({ pages }) => {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  const handleClosePopout = () => {
    setIsPopoutOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="nav-links">
        {pages.map((page) => (
          <Link key={page.path} to={page.path}>
            {page.name} |
          </Link>
        ))}
      </div>
      {isPopoutOpen && (
        <PopoutWindow isOpen={isPopoutOpen} onClose={handleClosePopout} pages={pages} />
      )}
    </div>
  );
};

