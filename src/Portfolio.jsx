import React from 'react';
import './Portfolio.css'; // Import the CSS file
import img1 from './images1.jpg';
import img2 from './images2.jpg';
import img3 from './images3.jpg';
import img4 from './port.jpg';
import img5 from './port2.jpg';
import img6 from './port3.jpg';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="image-slider">
        <img src={img1} alt="Project 1" />
        <img src={img2} alt="Project 2" />
        <img src={img3} alt="Project 3" />
        <img src={img4} alt="Project 4" />
        <img src={img5} alt="Project 5" />
        <img src={img6} alt="Project 6" />
      </div>
    </div>
  );
}

export default Portfolio;
