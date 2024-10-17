// Services.js
import React from 'react';
 import { useState } from 'react';
import './Services.css';
import Footer from './Footer';
import Ns1 from './Ns1';
import Estimate from './Estimate';
import si1 from './img/Group 22867_0.svg'
import si2 from './img/bad.svg'
import si3 from './img/doct.svg'

const services = [
  { id: 1, name: 'Cardiology', description: 'Heart care and treatment.', icon: '❤️' },
  { id: 2, name: 'Neurology', description: 'Brain and nervous system treatments.', icon: '🧠' },
  { id: 3, name: 'Orthopedics', description: 'Bone and muscle treatments.', icon: '🦴' },
  { id: 4, name: 'Emergency Care', description: '24/7 emergency services.', icon: '🚑' },
  ];
const ServiceCard = ({ name, description, icon }) => (
  <div className="service-card">
    <span>{icon}</span>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);





const Services = () => {
  // const packages = [
  //   {
  //     title: "Basic Health Checkup",
  //     description: "Includes blood tests, ECG, and consultation.",
  //     price: "$150",
  //     image: "/images/basic-checkup.png"
  //   },
  //   {
  //     title: "Advanced Health Checkup",
  //     description: "Includes MRI, CT scan, and full blood work.",
  //     price: "$300",
  //     image: "/images/advanced-checkup.png"
  //   },
  //   {
  //     title: "Heart Care Package",
  //     description: "Includes ECG, Echo, and a cardiologist consultation.",
  //     price: "$400",
  //     image: "/images/heart-checkup.png"
  //   },
  // ];
   
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    doctor: ''
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    // Send data to the server here.
  };


    
  return (
    <div className="services-container">

    <div className="healthcare-section">
      {/* Background with Overlay Text */}
      <div className="banner">
        <div className="overlay">
          <h1>Indu Healthcare</h1>
          <p>Leading Integrated Healthcare Services Provider in India</p>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat-box noi">
        <div>
         
          </div>
          <div>
          <h3>4 JCI & 26 NABH</h3>
          <p>ACCREDITED HOSPITALS</p>
          </div>
        </div>
        <div className="stat-box hos">
          <div>
          <img src={si1} alt='i' />
          </div>
          <div>
          <h3>28</h3>
          <p>Healthcare Facilities</p>
          </div>
        </div>
        <div className="stat-box bad">
        <div>
          <img src={si2} alt='i'  />
          </div>
          <div>
          <h3>4,500+</h3>
          <p>Operational Beds</p>
          </div>
        </div>
        <div className="stat-box doc">
        <div>
          <img src={si3} alt='i'  />
          </div>
          <div>
          <h3>12,500+</h3>
          <p>Healthcare professionals</p>
          </div>
        </div>
      </div>
    </div>


    
     <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard key={service.id} name={service.name} description={service.description} icon={service.icon} />
        ))}
      </div>
    </div>

    <Ns1/>
    
      
      <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={appointment.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={appointment.email}
        onChange={handleChange}
        required
      />
      <select name="service" value={appointment.service} onChange={handleChange} required>
        <option value="">Select Service</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Neurology">Neurology</option>
        <option value="Orthopedics">Orthopedics</option>
        <option value="Emergency Care">Emergency Care</option>
        <option value="Outpatient Services">Outpatient Services</option>
      </select>
      <input
        type="date"
        name="date"
        value={appointment.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="doctor"
        placeholder="Preferred Doctor (optional)"
        value={appointment.doctor}
        onChange={handleChange}
      />
      <button type="submit">Book Appointment</button>
    </form>
    <Estimate/>
     


      <Footer/>
    </div>
  );
};

export default Services;

