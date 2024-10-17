import React from 'react';
import { useParams } from 'react-router-dom';

const services = [
  { id: 1, name: '24 HRS. PHARMACY', description: 'Round-the-clock pharmacy service.', fullDescription: 'Here’s the full description for 24 HRS. PHARMACY.' },
  { id: 2, name: 'LABORATORY', description: 'Comprehensive diagnostic testing facilities.', fullDescription: 'Here’s the full description for LABORATORY.' },
  { id: 3, name: 'OPERATION THEATRE', description: 'State-of-the-art surgical operations.', fullDescription: 'Here’s the full description for OPERATION THEATRE.' },
  { id: 4, name: 'NICU', description: 'Newborn Intensive Care Unit.', fullDescription: 'Here’s the full description for NICU.' },
  { id: 5, name: 'LABOR ROOM', description: 'Well-equipped labor and delivery rooms.', fullDescription: 'Here’s the full description for LABOR ROOM.' },
  { id: 6, name: 'BLOOD BANK', description: 'Facility for blood storage and donation.', fullDescription: 'Here’s the full description for BLOOD BANK.' },
  { id: 7, name: '32 SLICE CT SCAN', description: 'Advanced imaging with 32-slice CT scanner.', fullDescription: 'Here’s the full description for 32 SLICE CT SCAN.' },
  { id: 8, name: 'X RAY', description: 'High-quality radiographic imaging.', fullDescription: 'Here’s the full description for X RAY.' },
  { id: 9, name: 'ICU', description: 'Intensive Care Unit for critical patients.', fullDescription: 'Here’s the full description for ICU.' }
];

const Ns2 = () => {
  const { id } = useParams(); // Get the service ID from the URL parameters
  const service = services.find(service => service.id === parseInt(id)); // Find the service by ID

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div className="service-detail">
      <h2>{service.name}</h2>
      <p>{service.fullDescription}</p>
    </div>
  );
};

export default Ns2;
