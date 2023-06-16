import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className="header bg-dark">



      <div className="logo-container">
        <img src="./guardians.png" alt="Logo" className="logo-image" />
      </div>
      <p className="header-title">Solar System </p>
      <div className="header-right">
    
      </div>
      <Nav />
    </header>
    
  );
};

