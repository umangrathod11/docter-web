import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to your backend or perform any necessary actions.
    console.log(formData);
    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div className="content">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: contact@example.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone:(+91) 8866301223</p>
          <p><FontAwesomeIcon icon={faMapMarker} /> Address: shop no 2, Amipark society no 2, kargil chok to sagar road, kargil-chok, surat</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
