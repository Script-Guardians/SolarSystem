import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Venus.css';

export const Venus = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost/bodies/Venus')
      .then(response => {
        setBodies(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios
      .get('http://localhost/planets?name=Venus')
      .then(response => {
        setPlanets(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!bodies || !planets) {
    return <div className="loading">Loading...</div>; // Apply loading style
  }

  return (
    <div className="venus">
      <h1 className="title">{planets[0].name}</h1>
      <p>Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, <br></br>making it the hottest planet in our solar system.</p>
      <p className="read-more">READ MORE</p>
      <p className="property">Mass: {planets[0].mass}</p>
      <p className="property">Distance (Light Years): {planets[0].distance_light_year}</p>
      <p className="property">Temperature: {planets[0].temperature}</p>
      <p className="property">Gravity: {bodies.gravity}</p>
      <p className="property">Density: {bodies.density}</p>
      <p className="property">Discovery Date: {bodies.discoveryDate}</p>
    </div>
    //comment
  );
}
