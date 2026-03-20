import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column: Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-heading">Visit Our Accra Showroom</h2>
          
          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <p>Heart Ave, Adabraka/Asylum Down area, Accra, Ghana</p>
            </div>
            
            <div className="contact-item">
              <Clock className="contact-icon" />
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="contact-actions">
            <a href="tel:+233000000000" className="btn-call">
              <Phone size={18} />
              Call Us
            </a>
            <a 
              href="https://maps.google.com/?q=Heart+Ave,+Adabraka,+Accra,+Ghana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-directions"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Right Column: Map */}
        <motion.div 
          className="contact-map"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="map-container">
            <iframe 
              src="https://maps.google.com/maps?q=Ring%20Road%20Central%20and%20Heart%20Ave,%20Accra,%20Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mantse Electronic Hub Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
