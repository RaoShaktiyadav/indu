import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Ns1.css'

const services = [
  { id: 1, name: '24 HRS. PHARMACY', description: 'Round-the-clock pharmacy service.', icon: '💊', },
  { id: 2, name: 'LABORATORY', description: 'Comprehensive diagnostic testing facilities.', icon: '🔬' },
  { id: 3, name: 'OPERATION THEATRE', description: 'State-of-the-art surgical operations.', icon: '🛏️' },
  { id: 4, name: 'NICU', description: 'Newborn Intensive Care Unit.', icon: '👶' },
  { id: 5, name: 'LABOR ROOM', description: 'Well-equipped labor and delivery rooms.', icon: '🏥' },
  { id: 6, name: 'BLOOD BANK', description: 'Facility for blood storage and donation.', icon: '🩸' },
  { id: 7, name: '32 SLICE CT SCAN', description: 'Advanced imaging with 32-slice CT scanner.', icon: '🖼️' },
  { id: 8, name: 'X RAY', description: 'High-quality radiographic imaging.', icon: '📸' },
  { id: 9, name: 'ICU', description: 'Intensive Care Unit for critical patients.', icon: '🛏️' }];

const ServiceCard1 = ({ id, name, description, icon }) => (
  <div className="service-card">
    <span>{icon}</span>
    <h3>{name}</h3>
    <p>{description}</p>
    <Link to={`/services/${id}`} className="read-more-link">Read More</Link> {/* Read More Link */}
  </div>
);

const Ns1 = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard1 key={service.id} id={service.id} name={service.name} description={service.description} icon={service.icon} />
        ))}
      </div></div>
  );
};

export default Ns1;


