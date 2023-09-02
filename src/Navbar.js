import React from 'react';
import { Link } from 'react-router-dom'; // You'll need this if you're using React Router
import './Navbar.css'
const Navbar = () => {
  return (
    
    <nav className="navbar">
    <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
