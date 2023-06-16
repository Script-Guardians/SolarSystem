import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file for styling

export const Nav = () => {
  return (
    <div className="nav-container">
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
  );
}
