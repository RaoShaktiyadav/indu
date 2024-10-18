// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Include your responsive CSS file
import Footer from './Footer';
import award from './img/award.jpeg'

const Home = () => {
    const newsArticles = [
        { title: 'New Cardiology Wing Opens', date: '2024-10-01', link: '/news/new-cardiology-wing' },
        { title: 'Free Health Camp on October 15th', date: '2024-10-05', link: '/news/health-camp' },
      ];
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Hospital</h1>
        <p>Providing the best medical care for your health.</p>
        <Link to="/services" className="cta-button">Our Services</Link>
      </header>
  




      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Our hospital has been delivering exceptional healthcare services for over 20 years.
          We specialize in a wide range of medical fields, with experienced doctors and state-of-the-art technology.
        </p>
        <Link to="/about" className="learn-more">Learn More</Link>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <span>❤️</span>
            <h3>Cardiology</h3>
            <p>Comprehensive heart care by top cardiologists.</p>
          </div>
          <div className="service-item">
            <span>🧠</span>
            <h3>Neurology</h3>
            <p>Expert neurological treatments for a variety of conditions.</p>
          </div>
          <div className="service-item">
            <span>🦴</span>
            <h3>Pediatrics</h3>
            <p>Dedicated care for children and newborns.</p>
          </div>
        </div>
        <Link to="/services" className="view-all">View All Services</Link>
      </section>

      <section className="doctors-section">
        <h2>Meet Our Doctors</h2>
        <p>Our team of doctors are leaders in their fields, providing top-notch care.</p>
        <Link to="/team" className="meet-doctors">Meet Our Doctors</Link>
      </section>

    

<section className="news-updates">
  <h2>Latest News & Updates</h2>
  <ul>
    {newsArticles.map((article) => (
      <li key={article.title}>
        <a href={article.link}>
          <h4>{article.title}</h4>
          <p>{article.date}</p>
        </a>
      </li>
    ))}
  </ul>
</section>

<section className="awards">
  <h2>Awards & Accreditations</h2>
  <div className="awards-grid">
    <img src={award} alt="Award 1" />
    <img src={award} alt="Award 2" />
    <img src={award} alt="Award 3" />
  </div>
</section>


      <footer className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
        <Link to="/contact" className="contact-link">Get In Touch</Link>
      </footer>







      <Footer/>
    </div>
  );
};

export default Home;

