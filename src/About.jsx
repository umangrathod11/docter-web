import React from 'react';
import './About.css'; // Import the CSS file
import img from './about.jpg'; // Replace with your about image

function About() {
  return (
    <div className="about-container">
     
      <div className="image-container">
  <img src={img} alt="About" />
  <div className="image-overlay">

  </div>
</div>

      <div className="timetable">
        <table>
          <caption className='edit'>Opening Hours</caption>
          <thead>
            <tr>
              <th>Day</th>
              <th>Opening Hours</th>
              <th>Break</th>

            </tr>
          </thead>
          <tbody>
            <tr className="break-row">
              <td>Monday</td>
              <td>9:00 AM - 9:00 PM</td>
              <td>1:00 PM - 4:30 PM</td>
            </tr>
            <tr className="break-row">
            <td>Tuesday</td>
              <td>9:00 AM - 9:00 PM</td>
              <td>1:00 PM - 4:30 PM</td>
            </tr>
            <tr className="break-row">
            <td>Wednesday</td>
              <td>9:00 AM - 9:00 PM</td>
              <td>1:00 PM - 4:30 PM</td>
            </tr>
            <tr className="break-row">
            <td>Thursday</td>
              <td>9:00 AM - 9:00 PM</td>
              <td>1:00 PM - 4:30 PM</td>
            </tr>
            <tr className="break-row">
            <td>Friday</td>
              <td>9:00 AM - 9:00 PM</td>
              <td>1:00 PM - 4:30 PM</td>
            </tr>
            <tr className="break-row">
            <td>Saturday</td>
            <td>9:00 AM - 9:00 PM</td>
            <td>1:00 PM - 4:30 PM</td>
            </tr>
            <tr className="break-row">
            <td>Sunday</td>
            <td>9:00 AM - 1:00 PM</td>
            <td>Holiday</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
