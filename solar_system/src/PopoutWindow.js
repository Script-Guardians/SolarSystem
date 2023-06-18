import React from 'react';
import { Link } from 'react-router-dom';
import './PopoutWindow.css';

export const PopoutWindow = ({ isOpen, onClose, pages }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`popout-window ${isOpen ? 'open' : ''}`} onClick={handleLinkClick}>
      <div className="popout-window-content">
        <button className="close-button" onClick={onClose}>X</button>
        {pages.map((page) => (
          <Link to={page.path} className="nav-link" key={page.path}>
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
};