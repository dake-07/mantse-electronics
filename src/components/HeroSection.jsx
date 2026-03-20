import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import macbookImg from '../assets/macbook_placeholder.png';
import ps5Img from '../assets/ps5_placeholder.png';

const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="badge-wrapper" variants={fadeUp}>
            <span className="location-badge">
              <span className="live-dot"></span>
              Based in Accra
            </span>
          </motion.div>
          <motion.p className="hero-eyebrow" variants={fadeUp}>Ghana's Premium Electronics Hub</motion.p>
          <motion.h1 className="hero-headline" variants={fadeUp}>
            Level Up<br/>
            Your Tech Game
          </motion.h1>
          <motion.p className="hero-subheadline" variants={fadeUp}>
            Experience the future of electronics with premium gear designed for creators, gamers, and professionals.
          </motion.p>
          <motion.div className="hero-ctas" variants={fadeUp}>
            <MagneticButton className="cta-primary">Browse Catalog</MagneticButton>
          </motion.div>
        </motion.div>
        <div className="hero-visuals">
          <div className="visual-item floating-slow ps5-visual">
            <img src={ps5Img} alt="PlayStation 5" fetchpriority="high" />
          </div>
          <div className="visual-item floating-fast macbook-visual">
            <img src={macbookImg} alt="MacBook Pro" fetchpriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
