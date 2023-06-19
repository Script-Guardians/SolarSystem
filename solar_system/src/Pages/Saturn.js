import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Saturn.css";

export const Saturn = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/Saturn")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Saturn")
      .then((response) => {
        setPlanets(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!bodies || !planets) {
    return <div className="loading">Loading...</div>; // Apply loading style
  }

  return (
    <div className="saturn-page">
        <img 
          src="https://images.unsplash.com/photo-1639548206755-b20081a7cadc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
          className="saturn-image" 
          alt="saturn-logo" 
        />
      <div className="saturn-info">
        <h1 className="title">{planets[0].name}</h1>
        <p>
          Adorned with a dazzling, complex system of icy rings,<br/> 
          Saturn is unique in our solar system. The other giant planets <br/>  
          have rings, but none are as spectacular as Saturn's.
        </p>
        <p className="property"><b>Mass:</b> {planets[0].mass}</p>
        <p className="property">
          <b>Distance (Light Years):</b> {planets[0].distance_light_year}
        </p>
        <p className="property"><b>Orbital Period:</b> {planets[0].period}</p>
        <p className="property"><b>Temperature:</b> {planets[0].temperature}</p>
        <p className="property"><b>Gravity:</b> {bodies.gravity}</p>
        <p className="property"><b>Density:</b> {bodies.density}</p>
        <p className="property"><b>Discovery Date:</b> {bodies.discoveryDate}</p>
        <p className="read-more">
          <a href="https://solarsystem.nasa.gov/planets/saturn/overview/">
            READ MORE
          </a>
        </p>
      </div>
    </div>
  );
};