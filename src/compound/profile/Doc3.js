import React from 'react';
import './Doc.css'; // CSS file for the layout

const doctorData = {
  name: 'Dr. Anoop Misra',
  position: 'EXECUTIVE CHAIRMAN FORTIS C DOC | Fortis C-Doc',
  specialties: 'Diabetology/Endocrinology',
  expertise: ['Diabetology', 'Endocrinology'],
  experience: '40 Years',
  fees: '₹2500',
  imageUrl: 'https://th.bing.com/th?id=OIP.PBPYVES_vO2MW-UMqpAXQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Update with actual image path
};

const Doc3 = () => {
  return (
    <div>
    <div className="doctor-profile-horizontal">
      <div className="left-section">
        <img src={doctorData.imageUrl} alt={doctorData.name} className="doctor-image" />
      </div>
      <div className="right-section">
        <h3>{doctorData.name}</h3>
        <p className="position">{doctorData.position}</p>
        <p className="specialties">
          {doctorData.specialties.split('/').map((specialty, index) => (
            <span key={index} className="specialty-item">{specialty}</span>
          ))}
        </p>
        <div className="details">
          <p><span className="icon-calendar" /> <strong>{doctorData.experience}</strong> Experience</p>
          <p><span className="icon-fees" /> <strong>{doctorData.fees}</strong> Fees</p>
        </div>
      </div>
      <div className="share-icon">
        <button className="share-btn">
          <span role="img" aria-label="share">🔗</span> {/* Replace with actual share icon */}
        </button>
      </div>
    </div>
   
    <div className="profile-container">
      {/* Left side: Main content */}
      <div className="main-content">
        <section className="about">
          <h2>About</h2>
          <p>
            Prof. (Dr.) Anoop Misra is Chairman, Fortis C-DOC Hospital for Diabetes and Allied Sciences.
            Director, National Diabetes Obesity and Cholesterol Foundation (NDOC). President, Diabetes
            Foundation (India). Former Professor (Medicine), AIIMS, New Delhi. Major Achievements:
          </p>
          <a href="#">Read More</a>
        </section>

        <section className="awards">
          <h2>Awards & Accolades</h2>
          <p>
            He has been awarded the highest award for medicine in India Dr. BC Roy award (2006), prestigious 
            National Honor, Padma Shree (2007), and "Outstanding Investigator Award" from World India Diabetes Foundation (2013).
            He has also received two national awards: Americare Award and Swastha Bharat Samman (from Zee TV).
          </p>
        </section>
      </div>
        


      {/* Right side: Sidebar with Schedule appointment and Education */}
      <div className="sidebar">
        <div className='s1'>
        {/* Education Section */}
        <section className="education">
          <h2>Education</h2>
          <p>MBBS, MD</p>
        </section>
        </div>
        <div className='s2'>
        <h3>Schedule Appointment</h3>
        <div className="tabs">
          <button className="active">Book Hospital Visit</button>
          <button>Book Video Consult</button>
        </div>
        <p>No Hospital Visit slots available currently. Please Request a callback</p>
        <button className="callback-button">Request A Call Back</button>

       
      </div>
    </div>
    </div>
   </div>
  );
};

export default Doc3;
