import React from 'react';
import { Instagram, Zap } from 'lucide-react';
// Since TikTok isn't in lucide-react by default, we'll use a standard SVG or an alternative. 
// For now, we'll build a custom simple SVG for TikTok to ensure the requirement is met.
import './Footer.css';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <Zap className="footer-logo-icon" size={24} />
            <span>Mantsé</span>
          </div>
          <p className="footer-copyright">
            &copy; 2026 Mantse Electronic Hub.
          </p>
        </div>

        <div className="footer-address">
          <p>Heart Ave, Accra, Ghana</p>
        </div>

        <div className="footer-socials">
          <a href="#" className="social-link" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-link" aria-label="TikTok">
            <TikTokIcon size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
