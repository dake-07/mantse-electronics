import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Zap className="logo-icon" size={24} />
          <span>Mantsé Electronics</span>
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
