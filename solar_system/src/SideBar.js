import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const planets = [
    { id: 'mercury', name: 'Mercury' },
    { id: 'venus', name: 'Venus' },
    { id: 'earth', name: 'Earth' },
    { id: 'mars', name: 'Mars' },
    { id: 'jupiter', name: 'Jupiter' },
    { id: 'saturn', name: 'Saturn' },
    { id: 'uranus', name: 'Uranus' },
    { id: 'neptune', name: 'Neptune' },
    // Add more planets
  ];

  return (
    <div className="sidebar">
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>
            <Link to={`/planet/${planet.id}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;