import './App.css';
import logo from './compound/img/logo.png'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './compound/Home';
import Services from './compound/Services';
import About from './compound/About';
import Contact from './compound/Contact';
import FAQ from './compound/FAQ';



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
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon">&#9776;</span>
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
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
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
