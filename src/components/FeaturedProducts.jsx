import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useMotionValueEvent } from 'framer-motion';
import './FeaturedProducts.css';

// Real Generated Renders
import imgFold7 from '../assets/attachments/samsung galaxy zfold 7.jpg';
import imgTrifold from '../assets/attachments/galaxy Z Trifold.jpg';
import imgS26 from '../assets/attachments/Samsung s26 ultra.jpg';
import imgWatch8 from '../assets/attachments/Samsung galaxy watch 8.jpg';
import imgIphoneAir from '../assets/attachments/Iphone air.jpg';
import imgIPhone16 from '../assets/attachments/Iphone 16.jpg';
import imgIphone17 from '../assets/attachments/Iphone 17 pro max.jpg';
import imgA07 from '../assets/attachments/Samsung galaxy AO7.jpg';
import imgTabS11 from '../assets/attachments/Samsung galaxy Tab S11 Ultra 5G.jpg';
import imgTabA11 from '../assets/attachments/Samsung Tab A11.jpg';
import imgHpOmni from '../assets/attachments/HP Omnibook.png';
import imgPill from '../assets/attachments/Beats pill.jpg';
import imgTclTv from "../assets/attachments/TCL Qled Tv 98''.jpg";
import imgS25 from '../assets/attachments/Samsung galaxy s25.jpg';
import imgS25Ultra from '../assets/attachments/Samsung galaxy s25 Ultra.jpg';
import imgIphone16ProMax from '../assets/attachments/Iphone 16 pro max.jpg';
import imgIpadA16 from '../assets/attachments/Ipad A16.jpg';

const products = [
  {
    id: 1,
    name: "Samsung Galaxy Fold7",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB"],
    detailed_specs: {
      display: "7.6-inch Foldable Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 5",
      camera: "50MP Triple Rear Camera",
      battery: "4400mAh with 45W Fast Charging"
    },
    image_alt: "Samsung Galaxy Fold7",
    glow_color: "rgba(0, 114, 255, 0.3)",
    image: imgFold7
  },
  {
    id: 2,
    name: "Samsung Galaxy Z Tri-Fold",
    category: "Mobile & Tablets",
    variants: ["16/512GB (Dual Sim)"],
    detailed_specs: {
      display: "10.2-inch Triple-Folding Screen",
      hinge: "Dual-Axis Elite Hinge",
      os: "Android 16 Optimized for Tri-Fold",
      durability: "IPX8 Water Resistance"
    },
    image_alt: "Samsung Galaxy Z Tri-Fold",
    glow_color: "rgba(111, 66, 193, 0.4)",
    is_flagship: true,
    image: imgTrifold
  },
  {
    id: 3,
    name: "Samsung Galaxy S26 Ultra",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB"],
    detailed_specs: {
      display: "6.8-inch QHD+ 144Hz AMOLED",
      processor: "Snapdragon 8 Gen 5",
      camera: "200MP Main + 100x Space Zoom",
      build: "Grade 5 Titanium Frame"
    },
    image_alt: "Samsung Galaxy S26 Ultra",
    glow_color: "rgba(100, 100, 100, 0.4)",
    is_flagship: true,
    image: imgS26
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 8",
    category: "Wearables",
    variants: ["40mm", "44mm"],
    detailed_specs: {
      sensors: "BioActive Health Sensor Suite",
      battery: "Up to 80 hours",
      screen: "Sapphire Crystal Glass",
      os: "WearOS 6"
    },
    image_alt: "Samsung Galaxy Watch 8",
    glow_color: "rgba(255, 69, 0, 0.3)",
    image: imgWatch8
  },
  {
    id: 5,
    name: "iPhone Air",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB (Esim Unlocked)"],
    detailed_specs: {
      design: "Ultra-Thin 5.1mm Chassis",
      processor: "A19 Bionic Chip",
      security: "FaceID 2.0 (Under-display)",
      weight: "Lightest iPhone ever"
    },
    image_alt: "iPhone Air",
    glow_color: "rgba(0, 242, 255, 0.2)",
    image: imgIphoneAir
  },
  {
    id: 6,
    name: "iPhone 16",
    category: "Mobile & Tablets",
    variants: ["128GB (Physical Sim Unlocked)"],
    detailed_specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A18 Chip",
      camera: "48MP Dual Camera System",
      feature: "Action Button Integration"
    },
    image_alt: "iPhone 16",
    glow_color: "rgba(0, 255, 127, 0.2)",
    image: imgIPhone16
  },
  {
    id: 7,
    name: "iPhone 17 Pro Max",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB", "2TB"],
    detailed_specs: {
      display: "6.7-inch ProMotion 120Hz",
      processor: "A19 Pro Chip",
      zoom: "10x Optical Periscope Zoom",
      video: "8K ProRes @ 60fps"
    },
    image_alt: "iPhone 17 Pro Max",
    glow_color: "rgba(200, 160, 110, 0.3)",
    is_flagship: true,
    image: imgIphone17
  },
  {
    id: 8,
    name: "Samsung Galaxy A07",
    category: "Mobile & Tablets",
    variants: ["64/4GB (With Power Adapter)"],
    detailed_specs: {
      display: "6.5-inch Infinity-V Display",
      battery: "5000mAh Massive Battery",
      storage: "Expandable via MicroSD",
      charger: "Includes 25W Wall Adapter"
    },
    image_alt: "Samsung Galaxy A07",
    glow_color: "rgba(255, 255, 255, 0.1)",
    image: imgA07
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S11 Ultra 5G",
    category: "Mobile & Tablets",
    variants: ["256/12GB (Cellular + WiFi)"],
    detailed_specs: {
      display: "14.6-inch Super AMOLED",
      connectivity: "5G & WiFi 7 Ready",
      pen: "Low-Latency S-Pen Included",
      multitasking: "Samsung DeX Support"
    },
    image_alt: "Galaxy Tab S11 Ultra",
    glow_color: "rgba(0, 114, 255, 0.3)",
    image: imgTabS11
  },
  {
    id: 10,
    name: "Tab A11",
    category: "Mobile & Tablets",
    variants: ["64/4GB", "128/8GB (Cellular + WiFi)"],
    detailed_specs: {
      screen: "11-inch WUXGA Display",
      battery: "7,040mAh",
      audio: "Dual Stereo Speakers",
      security: "Face Recognition"
    },
    image_alt: "Tab A11",
    glow_color: "rgba(200, 200, 200, 0.2)",
    image: imgTabA11
  },
  {
    id: 11,
    name: "HP OmniBook Flip360",
    category: "Computing",
    variants: ["Core5 / 8GB / 512GB"],
    detailed_specs: {
      type: "2-in-1 Convertible Design",
      cpu: "Intel Core 5 (Series 1)",
      screen: "14-inch Touchscreen OLED",
      security: "Fingerprint Reader"
    },
    image_alt: "HP OmniBook Flip360",
    glow_color: "rgba(255, 255, 255, 0.4)",
    image: imgHpOmni
  },
  {
    id: 12,
    name: "Beats Pill",
    category: "Speakers",
    variants: ["Bluetooth Speakers"],
    detailed_specs: {
      audio: "High-Excursion Woofer",
      battery: "24-Hour Battery Life",
      ruggedness: "IP67 Water/Dust Resistance",
      fast_charge: "10 mins = 2 hours play"
    },
    image_alt: "Beats Pill",
    glow_color: "rgba(255, 0, 0, 0.2)",
    image: imgPill
  },
  {
    id: 13,
    name: "TCL QLED TV 98\"",
    category: "TV Sets",
    variants: ["98-inch 4K HDR"],
    detailed_specs: {
      panel: "Quantum Dot QLED 144Hz",
      gaming: "Game Master 2.0 Mode",
      audio: "Onkyo Surround Sound",
      os: "Google TV Built-in"
    },
    image_alt: "TCL Qled Tv 98",
    glow_color: "rgba(255, 255, 0, 0.2)",
    is_flagship: true,
    image: imgTclTv
  },
  {
    id: 14,
    name: "Samsung Galaxy S25",
    category: "Mobile & Tablets",
    variants: ["128/12GB", "256/12GB (Dual sim)"],
    detailed_specs: {
      display: "6.2-inch Dynamic AMOLED",
      processor: "Snapdragon 8 Gen 4",
      camera: "50MP Main Camera",
      ai: "Galaxy AI Features"
    },
    image_alt: "Samsung Galaxy S25",
    glow_color: "rgba(0, 114, 255, 0.2)",
    image: imgS25
  },
  {
    id: 15,
    name: "Samsung Galaxy S25 Ultra",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB (Dual Sim)"],
    detailed_specs: {
      display: "6.8-inch Flat Frame",
      build: "Titanium Construction",
      camera: "200MP Quad Zoom System",
      stylus: "Embedded S-Pen"
    },
    image_alt: "Samsung Galaxy S25 Ultra",
    glow_color: "rgba(100, 100, 100, 0.3)",
    image: imgS25Ultra
  },
  {
    id: 16,
    name: "iPhone 16 Pro Max",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB (Physical + Esim)"],
    detailed_specs: {
      display: "6.9-inch Borderless Screen",
      processor: "A18 Pro Chip",
      camera: "Fusion 48MP Camera",
      connection: "WiFi 7 Ready"
    },
    image_alt: "iPhone 16 Pro Max",
    glow_color: "rgba(200, 160, 110, 0.2)",
    image: imgIphone16ProMax
  },
  {
    id: 17,
    name: "iPad A16",
    category: "Mobile & Tablets",
    variants: ["128GB", "256GB", "Cellular+WiFi", "WiFi only"],
    detailed_specs: {
      chip: "A16 Bionic (6-core CPU)",
      display: "10.9-inch Liquid Retina",
      ports: "USB-C Connectivity",
      video: "4K Video Recording"
    },
    image_alt: "iPad A16",
    glow_color: "rgba(0, 242, 255, 0.1)",
    image: imgIpadA16
  }
];

const categories = ["All", "Mobile & Tablets", "Computing", "Wearables", "Speakers", "TV Sets", "Gaming Zone"];

const ProductCard = ({ product, index, isActive, setSelectedProductForSpecs }) => {
  const displayVariants = product.variants.filter(v => !v.includes('GHS'));
  const [selectedVariant, setSelectedVariant] = useState(displayVariants[0] || "");

  const getWhatsAppLink = () => {
    let msg = `Hi Mantse Hub, I'm looking at the ${product.name}. What's the best price today?`;
    return `https://wa.me/233240000000?text=${encodeURIComponent(msg)}`;
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const badgeText = product.is_flagship ? "2026 FLAGSHIP" : (product.id === 12 ? "NEW" : (product.id === 8 ? "✨ Includes Power Adapter" : product.category));

  return (
    <motion.div 
      layout
      className={`product-card ${isActive ? 'active-focus' : ''}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ '--hover-glow': product.glow_color }}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.image_alt || product.name} className="product-img" loading="lazy" decoding="async" />
        <span className="product-badge">{badgeText}</span>
      </div>
      
      <div className="product-info">
        <div>
          <h3 className="product-name" style={{ marginBottom: '0.5rem' }}>
            {product.name}
          </h3>
        </div>

        {displayVariants.length > 1 ? (
          <div className="variant-picker-wrapper" style={{ marginBottom: 'auto', minHeight: '2.5rem' }}>
            <select 
              className="variant-picker"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-secondary)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.5rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                outline: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-accent)'
              }}
            >
              {displayVariants.map((v, i) => (
                <option key={i} value={v} style={{background: '#1A1A1A', color: '#fff'}}>{v}</option>
              ))}
            </select>
          </div>
        ) : displayVariants.length === 1 ? (
          <div className="product-variants" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'auto', minHeight: '2.5rem', fontFamily: 'var(--font-accent)' }}>
            {displayVariants[0]}
          </div>
        ) : (
          <div style={{ minHeight: '2.5rem', marginBottom: 'auto' }}></div>
        )}
        
        <div className="product-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <button 
            className="view-specs-btn" 
            style={{ padding: 0 }}
            onClick={() => setSelectedProductForSpecs({ product, selectedVariant, getWhatsAppLink })}
          >
            {product.detailed_specs && Object.keys(product.detailed_specs).length > 0 ? "View Specs" : "Product Details"}
          </button>
          
          <a 
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta-link"
          >
            Get Best Price <span className="pulse-arrow">↗</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = ({ activeCategory = "All", setActiveCategory }) => {
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState(null);
  const trackRef = useRef(null);
  
  const [trackConstraints, setTrackConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const calculateConstraints = () => {
    if (trackRef.current && trackRef.current.parentElement) {
      const containerWidth = trackRef.current.parentElement.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const maxScroll = Math.max(0, trackWidth - containerWidth);
      setTrackConstraints({ left: -maxScroll, right: 0 });
    }
  };

  useEffect(() => {
    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, [filteredProducts]);

  useMotionValueEvent(x, "change", (latest) => {
    if (!trackRef.current || trackRef.current.children.length === 0) return;
    const containerWidth = trackRef.current.parentElement.offsetWidth;
    const targetCenter = -latest + (containerWidth / 2);
    
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(trackRef.current.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + (child.offsetWidth / 2);
      const distance = Math.abs(childCenter - targetCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  });

  const dragTransition = {
    power: 0.1,
    timeConstant: 250,
    modifyTarget: (target) => {
      if (!trackRef.current || trackRef.current.children.length === 0) return target;
      const containerWidth = trackRef.current.parentElement.offsetWidth;
      const targetCenter = -target + (containerWidth / 2);
      
      let closestDistance = Infinity;
      let closestX = target; 

      Array.from(trackRef.current.children).forEach(child => {
        const childCenter = child.offsetLeft + (child.offsetWidth / 2);
        const distance = Math.abs(childCenter - targetCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestX = -(childCenter - (containerWidth / 2));
        }
      });
      
      return Math.max(trackConstraints.left, Math.min(0, closestX));
    }
  };

  return (
    <section className="featured" id="featured">
      <div className="featured-container">
        
        <div className="featured-header">
          <h2 className="section-title">Trending Now</h2>
          <p className="section-subtitle">Swipe through our comprehensive flagship inventory.</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory?.(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="carousel-viewport">
          <motion.div 
            className="carousel-track" 
            ref={trackRef}
            drag="x"
            dragConstraints={trackConstraints}
            dragTransition={dragTransition}
            style={{ x }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    isActive={activeIndex === index}
                    setSelectedProductForSpecs={setSelectedProductForSpecs} 
                  />
                ))
              ) : (
                <motion.div
                  layout
                  key="empty-state"
                  className="empty-state-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="empty-state-content">
                    <h3 className="empty-state-title">No products found in {activeCategory}</h3>
                    <p className="empty-state-desc">Try clearing the filter or checking another category.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Specs Modal (Slide-over) */}
        <AnimatePresence>
          {selectedProductForSpecs && (
            <>
              <motion.div 
                className="specs-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProductForSpecs(null)}
              />
              <motion.div 
                className="specs-slideover"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <button className="specs-close-btn" onClick={() => setSelectedProductForSpecs(null)}>✕</button>
                <div className="specs-slideover-content">
                  <div className="specs-header">
                    <img src={selectedProductForSpecs.product.image} alt={selectedProductForSpecs.product.name} className="specs-img-small" loading="lazy" decoding="async" />
                    <div>
                      <span className="specs-badge">{selectedProductForSpecs.product.category}</span>
                      <h3 className="specs-title">{selectedProductForSpecs.product.name}</h3>
                      {selectedProductForSpecs.selectedVariant && (
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginTop: '0.25rem' }}>
                          Variant: {selectedProductForSpecs.selectedVariant}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="specs-body">
                    <h4 className="specs-section-title">Technical Specifications</h4>
                    {selectedProductForSpecs.product.detailed_specs && Object.keys(selectedProductForSpecs.product.detailed_specs).length > 0 ? (
                      <ul className="specs-list">
                        {Object.entries(selectedProductForSpecs.product.detailed_specs).map(([key, value], i) => (
                          <li key={i}>
                            <span className="spec-bullet"></span>
                            <div>
                              <span style={{ textTransform: 'capitalize', color: 'var(--text-primary)', fontWeight: '600' }}>{key}</span> - {value}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="no-specs-text">Full details arriving soon.</p>
                    )}
                  </div>
                  
                  <div className="specs-footer">
                      <a 
                        href={selectedProductForSpecs.getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-cta-link-btn"
                        style={{ display: 'block', width: '100%', boxSizing: 'border-box' }}
                      >
                        Inquire Now
                      </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FeaturedProducts;
