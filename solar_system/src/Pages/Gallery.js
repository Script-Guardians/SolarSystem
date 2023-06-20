import React from "react";
import './Gallery.css';

export const Gallery = () => {
    return (
      <div className="planet-gallery">
        <h1>Image Gallery</h1>
        <div className="planet-grid">
          <div className="planet-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/640px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg" alt="Neptune" />
            <p>Neptune</p>
          </div>
          <div className="planet-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg" alt="Uranus" />
            <p>Uranus</p>
          </div>
          <div className="planet-item">
            <img src="https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/0b52f9b9-4612-400e-9505-ac72818fb2b8/saturn.png" alt="Saturn" />
            <p>Saturn</p>
          </div>

          <div className="planet-item">
            <img src="https://cdn.shortpixel.ai/spai/q_lossy+w_998+h_950+to_auto+ret_img/https://cosmosmagazine.com/wp-content/uploads/2020/04/venus_resized.jpg" alt="Venus" />
            <p>Venus</p>
          </div>

          <div className="planet-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/640px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg" alt="Neptune" />
            <p>Neptune</p>
          </div>

          <div className="planet-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg" alt="Mercury" />
            <p>Mercury</p>
          </div>

          <div className="planet-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg" alt="Jupiter" />
            <p>Jupiter</p>
          </div>

          <div className="planet-item">
            <img src="https://solarsystem.nasa.gov/system/stellar_items/image_files/6_mars.jpg" alt="Mars" />
            <p>Mars</p>
          </div>


        </div>
      </div>
    );
  };