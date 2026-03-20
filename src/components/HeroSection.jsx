import React from 'react';
import './HeroSection.css';
import macbookImg from '../assets/macbook_placeholder.png';
import ps5Img from '../assets/ps5_placeholder.png';

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="location-badge">Based in Accra</span>
          </div>
          <p className="hero-eyebrow">Ghana's Premium Electronics Hub</p>
          <h1 className="hero-headline">
            Level Up<br/>
            Your Tech Game
          </h1>
          <p className="hero-subheadline">
            Experience the future of electronics with premium gear designed for creators, gamers, and professionals.
          </p>
          <div className="hero-ctas">
            <button className="cta-primary">Browse Catalog</button>
            <button className="cta-secondary">Chat on WhatsApp</button>
          </div>
        </div>
        <div className="hero-visuals">
          <div className="visual-item floating-slow ps5-visual">
            <img src={ps5Img} alt="PlayStation 5" />
          </div>
          <div className="visual-item floating-fast macbook-visual">
            <img src={macbookImg} alt="MacBook Pro" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
