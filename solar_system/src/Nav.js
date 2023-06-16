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
        {pages.map((page) => (
          <Link key={page.path} to={page.path}>
            {page.name}
          </Link>
        ))}
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

