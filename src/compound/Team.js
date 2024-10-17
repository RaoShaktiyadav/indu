import React from 'react';
import Footer from './Footer'
import './/Team.css'; // Add the respective CSS here

import { Link } from 'react-router-dom';


const doctorData = [
  {
    name: 'Dr. Anoop Misra',
    position: 'EXECUTIVE CHAIRMAN FORTIS C DOC | Fortis C-Doc',
    specialties: 'Diabetology/Endocrinology',
    expertise: ['Diabetology', 'Endocrinology'],
    experience: '40 Years',
    fees: '₹2500',
    imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
    profileLink: '/doc1', // React Router Link
    appointmentLink: '/appointment/anoop-misra' // React Router Link
  },
  {
    name: 'Dr. Ajay Kaul',
    position: 'CHAIRMAN CARDIAC SCIENCE | Fortis Noida',
    specialties: 'Cardiac Sciences',
    expertise: ['Adult CTVS (Cardiothoracic and Vascular Surgery)', 'Heart Transplant', 'Heart & Lung Transplant'],
    experience: '38 Years',
    fees: '₹1600',
    imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
    profileLink: '/doc2', // React Router Link
    appointmentLink: '/appointment/ajay-kaul' // React Router Link
  },
  {
    name: 'Dr. Anil Saxena',
    position: 'CHAIRMAN CARDIOLOGY | Fortis Okhla',
    specialties: 'Cardiac Sciences | Electrophysiology',
    expertise: ['Cardiac Sciences', 'Electrophysiology'],
    experience: '35 Years',
    fees: '₹2000',
    imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
    profileLink: '/doc3', // React Router Link
    appointmentLink: '/appointment/anil-saxena' // React Router Link
  },
  {
    name: 'Dr. Anoop Misra',
    position: 'EXECUTIVE CHAIRMAN FORTIS C DOC | Fortis C-Doc',
    specialties: 'Diabetology/Endocrinology',
    expertise: ['Diabetology', 'Endocrinology'],
    experience: '40 Years',
    fees: '₹2500',
    imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
    profileLink: '/doc4', // React Router Link
    appointmentLink: '/appointment/anoop-misra' // React Router Link
  },
  {
    name: 'Dr. Ajay Kaul',
    position: 'CHAIRMAN CARDIAC SCIENCE | Fortis Noida',
    specialties: 'Cardiac Sciences',
    expertise: ['Adult CTVS (Cardiothoracic and Vascular Surgery)', 'Heart Transplant', 'Heart & Lung Transplant'],
    experience: '38 Years',
    fees: '₹1600',
    imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
    profileLink: '/doc5', // React Router Link
    appointmentLink: '/appointment/ajay-kaul' // React Router Link
  },
  {
    name: 'Dr. Anil Saxena',
    position: 'CHAIRMAN CARDIOLOGY | Fortis Okhla',
    specialties: 'Cardiac Sciences | Electrophysiology',
    expertise: ['Cardiac Sciences', 'Electrophysiology'],
    experience: '35 Years',
    fees: '₹2000',
    imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
    profileLink: '/doc6', // React Router Link
    appointmentLink: '/appointment/anil-saxena' // React Router Link
  }
];

const Team = () => {
  return (
    <div>
    <div className="doctor-profiles-section">
      {doctorData.map((doctor, index) => (
        <div key={index} className="doctor-card">
          <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
          <h3>{doctor.name}</h3>
          <p className="position">{doctor.position}</p>
          <p className="specialties">{doctor.specialties}</p>
          <div className="expertise">
            {doctor.expertise.map((field, idx) => (
              <span key={idx} className="expertise-item">{field}</span>
            ))}
          </div>
          <div className="details">
            <p><strong>{doctor.experience}</strong> Experience</p>
            <p><strong>{doctor.fees}</strong> Fees</p>
          </div>
          <div className="actions">
            <Link to={doctor.profileLink} className="view-profile">View Full Profile</Link>
            <Link to={doctor.appointmentLink} className="book-appointment">Book An Appointment</Link>
          </div>
        </div>
      ))}
    </div>

    <Footer/>
    </div>
  );
};

export default Team;
