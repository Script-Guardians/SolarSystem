import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Saturn.css';

export const Saturn = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost/bodies/Saturn')
      .then(response => {
        setBodies(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios
      .get('http://localhost/planets?name=Saturn')
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
    <div className="saturn-page">
      <h1 className="title">{planets[0].name}</h1>
      <p>Adorned with a dazzling, complex system of icy rings,<br></br> Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.

</p>
      
      <p className="property">Mass: {planets[0].mass}</p>
      <p className="property">Distance (Light Years): {planets[0].distance_light_year}</p>
      <p className="property">Temperature: {planets[0].temperature}</p>
      <p className="property">Gravity: {bodies.gravity}</p>
      <p className="property">Density: {bodies.density}</p>
      <p className="property">Discovery Date: {bodies.discoveryDate}</p>
      <p className="read-more" ><a href="https://solarsystem.nasa.gov/planets/saturn/overview/">READ MORE</a></p>

    </div>
    //comment
  );
}
