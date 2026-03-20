import React from 'react';
import { Truck, ShieldCheck, Clock } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="trust-container">
        
        <div className="trust-item">
          <div className="trust-icon-wrapper">
            <Truck className="trust-icon" size={28} />
          </div>
          <div className="trust-text">
            <h4 className="trust-title">Fast Delivery</h4>
            <p className="trust-desc">Fast delivery in Accra</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-wrapper">
            <ShieldCheck className="trust-icon" size={28} />
          </div>
          <div className="trust-text">
            <h4 className="trust-title">Genuine Warranty</h4>
            <p className="trust-desc">100% authentic products</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon-wrapper">
            <Clock className="trust-icon" size={28} />
          </div>
          <div className="trust-text">
            <h4 className="trust-title">24/7 Support</h4>
            <p className="trust-desc">Always here to help you</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;
