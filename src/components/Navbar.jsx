import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import globeImg from '../assets/globe.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={globeImg} alt="Mantse Electronic Hub Icon" style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.3))' }} />
          <span style={{ fontWeight: '600' }}>Mantse Electronic Hub</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#categories" onClick={() => setIsMobileMenuOpen(false)}>Categories</a></li>
          <li><a href="#featured" onClick={() => setIsMobileMenuOpen(false)}>Trending</a></li>
          <li className="mobile-contact"><a href="#contact" className="contact-btn w-full" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#contact" className="contact-btn desktop-only">Contact</a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
