import React, { useState } from 'react';
import './Estimate.css';

const servicePrices = {
  Cardiology: 150,
  Neurology: 200,
  Orthopedics: 180,
  'Emergency Care': 300,
  'Outpatient Services': 100,
};

const Estimate = () => {
  const [selectedService, setSelectedService] = useState('');
  const [estimate, setEstimate] = useState(null);

  const handleEstimate = () => {
    setEstimate(servicePrices[selectedService]);
  };

  return (
    <div className="cost-estimator">
      <h2>Cost Estimator</h2>
      <select onChange={(e) => setSelectedService(e.target.value)} value={selectedService}>
        <option value="">Select Service</option>
        {Object.keys(servicePrices).map(service => (
          <option key={service} value={service}>{service}</option>
        ))}
      </select>
      <button onClick={handleEstimate}>Get Estimate</button>
      {estimate && <p>Estimated cost: ${estimate}</p>}
    </div>
  );
};

export default Estimate;
