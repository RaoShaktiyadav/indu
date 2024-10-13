// Contact.js
import React from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <div className="contact-container">

<section className="contact-section">
      <div className="text-box">
        <h1>Contact us</h1>
        <p>For all types of queries</p>
      </div>

      <div className="icon-container">
        <div className="icon">
          <i className="fas fa-at"></i> {/* At symbol icon */}
        </div>
        <div className="icon">
          <i className="fas fa-envelope"></i> {/* Email icon */}
        </div>
        <div className="icon">
          <i className="fas fa-phone-alt"></i> {/* Phone icon */}
        </div>
      </div>
    </section>
  


      <section className="contact-form-section">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Our Contact Information</h2>
        <div className="contact-info">
          <p><strong>Address:</strong> 123 Health St, Medical City, USA</p>
          <p><strong>Phone:</strong> +1 123 456 7890</p>
          <p><strong>Email:</strong> contact@hospital.com</p>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us on the Map</h2>
        {/* You can replace this iframe with an actual Google Map embed */}
        <iframe
          title="hospital-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112758.82680647926!2d76.41002321089398!3d27.97206416927119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d55743d094107%3A0xaf05ed01b57d930f!2sIndu%20hospital!5e0!3m2!1sen!2sin!4v1728697807057!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </section>
      





      <Footer/>
    </div>
  );
};

export default Contact;

