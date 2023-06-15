import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Neptune.css';

export const Neptune = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost/bodies/Neptune')
      .then(response => {
        setBodies(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios
      .get('http://localhost/planets?name=Neptune')
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
    <div className="neptune-page">
      <h1 className="title">{planets[0].name}</h1>
      <p>Neptune—the eighth and most distant major planet orbiting our Sun—is dark, <br></br>cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.

</p>
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
