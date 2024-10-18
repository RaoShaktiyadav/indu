import './App.css';
import logo from './compound/img/logo.png'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './compound/Home';
import Services from './compound/Services';
import About from './compound/About';
import Contact from './compound/Contact';
import Team from './compound/Team';
import FAQ from './compound/FAQ';
import Doc1 from './compound/profile/Doc1';
import Doc2 from './compound/profile/Doc2';
import Doc3 from './compound/profile/Doc3';
import Doc4 from './compound/profile/Doc4';
import Doc5 from './compound/profile/Doc5';
import Doc6 from './compound/profile/Doc6';
import Ns1 from './compound/Ns1';
import ServiceDetail from './compound/ServiceDetail';



const App = () => { 
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Router>
      <div>
      <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" />
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon">&#9776;</span>
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          
        </ul>
      </div>
    </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/doc1" element={<Doc1 />} />
          <Route path="/doc2" element={<Doc2 />} /> 
          <Route path="/doc3" element={<Doc3 />} /> 
          <Route path="/doc4" element={<Doc4 />} /> 
          <Route path="/doc5" element={<Doc5 />} /> 
          <Route path="/doc6" element={<Doc6 />} />
          <Route path="/" element={<Ns1 />} /> {/* Home page with services list */}
          <Route path="/services/:id" element={<ServiceDetail />} /> {/* Service details page */}
          
      
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
