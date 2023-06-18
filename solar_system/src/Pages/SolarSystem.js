import React, { useState } from "react";
import "./SolarSystem.css";

const SolarSystem = () => {
  const [planetInfo, setPlanetInfo] = useState(null);

  const fetchPlanetInfo = async (id) => {
    try {
      const response = await fetch(`http://localhost/bodies/${id}`);
      const data = await response.json();
      setPlanetInfo(data);
    } catch (error) {
      console.log("Error fetching planet information:", error);
    }
  };

  const handlePlanetHover = (id) => {
    fetchPlanetInfo(id);
  };

  const renderPlanet = (id) => {
    return (
      <div
        className={id}
        onMouseEnter={() => handlePlanetHover(id)}
        onMouseLeave={() => setPlanetInfo(null)}
      ></div>
    );
  };



  return (
<div class="solar-system">
  <div className="planet neptune" >
      <div className="planet uranus" >{renderPlanet("uranus")}
      <div className= "planet saturn" >{renderPlanet("saturn")}
        <div className="planet jupiter" >{renderPlanet("jupiter")}
        <div className="planet mars" >{renderPlanet("mars")}
        <div className="planet earth" >{renderPlanet("earth")}
        <div className="planet venus" >{renderPlanet("venus")}
        <div className="planet mercury" >{renderPlanet("mercury")}
          <div className="sun"></div>
     
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    {planetInfo && (
      <div className="planet-info">
        <h2>{planetInfo.englishName}</h2>
        <p>Gravity:{planetInfo.gravity}</p>
        <p>Density:{planetInfo.density}</p>
        <p>Mass:{planetInfo.mass.massValue}</p>
        <p>Discovery Date:{planetInfo.discoveryDate}</p>
        <p>dimension:{planetInfo.dimension}</p>
        <p>Discovered By:{planetInfo.discoveredBy}</p>
        
      </div>
    )}
  </div>
  );
};

      export default SolarSystem;