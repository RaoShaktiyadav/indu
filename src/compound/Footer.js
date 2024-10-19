// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/logo.png"
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      <div className="social-icons">
           <img src={logo} alt='logo'/>
          
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong> NH 48, near cng pump, Neemrana, Rajasthan 301705</p>
          <p><strong>Phone:</strong> 01494-246400,  7426982628</p>
          <p><strong>Email:</strong> induhospitalneemrana@gmail.com</p>
        </div>

        
          
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Hospital Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
