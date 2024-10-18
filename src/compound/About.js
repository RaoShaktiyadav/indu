// About.js
import React from 'react';
import './About.css';
import Footer from './Footer';
import cert from './img/certi.jpg'

const About = () => {
    const milestones = [
        { year: 1990, description: 'Founded as a small community clinic.' },
        { year: 2000, description: 'Opened a new cardiology wing.' },
        { year: 2015, description: 'Became a nationally recognized hospital.' },
      ];
      const patientStories = [
        {
          name: 'Michael Johnson',
          story: 'I received life-saving surgery here. The doctors and staff were incredibly supportive.',
          image: 'https://img.freepik.com/premium-photo/very-weak-cancer-patient-hospital-beautiful-illustration-picture-generative-ai_146671-93587.jpg?w=2000'
        },
        {
          name: 'Linda Brown',
          story: 'Thanks to the medical care I received, I’m now fully recovered and healthier than ever.',
          image: 'https://img.freepik.com/premium-photo/very-weak-cancer-patient-hospital-beautiful-illustration-picture-generative-ai_146671-93587.jpg?w=2000'
        }
      ];

      const outreachPrograms = [
        { title: 'Free Health Checkup Camps', description: 'We organize free health camps in underserved areas.' },
        { title: 'Medical Education Programs', description: 'Providing training for aspiring medical professionals.' },
      ];
  return (
    <div className="about-container">

<section className="healthcare-banner">
      <div className="overlay">
        <h1>Your Health, Our Priority</h1>
        <p>Comprehensive care for you and your family</p>
      </div>
    </section>

      <section className="about-us">
        <h1>About Our Hospital</h1>
        <p>
          Our hospital is dedicated to providing the highest quality care to our patients. With over 50 years of experience, we are a leading healthcare provider in the region, offering a wide range of medical services and specialties.
        </p>
      </section>

      <section className="mission-values">
        <h2>Our Mission & Values</h2>
        <div className="mission-values-content">
          <div className="mission">
            <h3>Mission</h3>
            <p>
              To provide exceptional healthcare services that enhance the lives of our patients and communities.
            </p>
          </div>
          <div className="values">
            <h3>Values</h3>
            <ul>
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </section>

      
 
<section className="history-milestones">
  <h2>Our History & Milestones</h2>
  <ul>
    {milestones.map((milestone) => (
      <li key={milestone.year}>
        <h4>{milestone.year}</h4>
        <p>{milestone.description}</p>
      </li>
    ))}
  </ul>
</section>
<section className="accreditations">
  <h2>Accreditations & Certifications</h2>
  <div className="certifications-grid">
    <img src={cert} alt="Certification 1" />
    <img src={cert} alt="Certification 2" />
    <img src={cert} alt="Certification 3" />
  </div>
</section>



<section className="patient-stories">
  <h2>Patient Success Stories</h2>
  <div className="stories-grid">
    {patientStories.map((story) => (
      <div key={story.name} className="story-card">
        <img src={story.image} alt={story.name} />
        <h4>{story.name}</h4>
        <p>{story.story}</p>
      </div>
    ))}
  </div>
</section>


<section className="community-outreach">
  <h2>Community Outreach Programs</h2>
  <ul>
    {outreachPrograms.map((program) => (
      <li key={program.title}>
        <h4>{program.title}</h4>
        <p>{program.description}</p>
      </li>
    ))}
  </ul>
</section>

<section className="partnerships">
  <h2>Our Partnerships & Collaborations</h2>
  <p>We collaborate with leading hospitals and research institutions to bring the best medical care to our patients.</p>
  <div className="partners-logos">
    <img src="partner1.png" alt="Partner 1" />
    <img src="partner2.png" alt="Partner 2" />
    <img src="partner3.png" alt="Partner 3" />
  </div>
</section>
<section className="hospital-stats">
  <h2>Our Impact in Numbers</h2>
  <div className="stats-grid">
    <div className="stat-item">
      <h3>100,000+</h3>
      <p>Patients Treated</p>
    </div>
    <div className="stat-item">
      <h3>5,000+</h3>
      <p>Successful Surgeries</p>
    </div>
    <div className="stat-item">
      <h3>1,200</h3>
      <p>Qualified Staff</p>
    </div>
  </div>
</section>

<section className="future-plans">
  <h2>Sustainability & Future Plans</h2>
  <p>We are committed to reducing our environmental footprint while expanding our services to meet future healthcare needs.</p>
  <div className="future-goals">
    <h4>Upcoming Projects:</h4>
    <ul>
      <li>Building a new pediatric care unit by 2025</li>
      <li>Implementing renewable energy systems</li>
    </ul>
  </div>
</section>






      <Footer/>
    </div>
  );
};

export default About;
