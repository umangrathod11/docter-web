import React from 'react';
import './Home.css'; // Import the CSS file
import img1 from './home.jpg';
import img2 from './images.jpg';
import img3 from './images3.jpg';
import img4 from './images5.jpg';


function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h2>Dr.Kishor D Vala</h2>
        <p>Hadvaidh</p>
        <p>Last 10 years of experience in Ayurveda</p>
        <p>
        છેલ્લા ઘણા વર્ષોનો અનુભવ
        શ્રેષ્ઠ સારવાર અને શ્રેષ્ઠ દવા
        હાડકાના ડૉક્ટરનો સારો અનુભવ
        </p>
      
      </div>
      <div className="image-container">
        <div className="image-card">
          <img src={img1} alt="Home 1" />
        </div>
        <div className="image-card">
          <img src={img2} alt="Home 2" />
        </div>
        <div className="image-card">
          <img src={img3} alt="Home 2" />
        </div>
        <div className="image-card">
          <img src={img4} alt="Home 2" />
        </div>
      </div>
    </div>
  );
}

export default Home;
