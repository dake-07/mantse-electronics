import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import imgPill from '../assets/attachments/Beats pill.jpg';
import imgTclTv from "../assets/attachments/TCL Qled Tv 98''.jpg";
import imgIphone16ProMax from '../assets/attachments/Iphone 16 pro max.jpg';
import imgS25Ultra from '../assets/attachments/Samsung galaxy s25 Ultra.jpg';
import imgS25 from '../assets/attachments/Samsung galaxy s25.jpg';
import imgIpadA16 from '../assets/attachments/Ipad A16.jpg';
import imgHpOmni from '../assets/attachments/HP Omnibook.png';

const products = [
  {
    id: 1,
    name: "Samsung Galaxy Fold7",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB"],
    detailed_specs: {
      "display": "7.6-inch Foldable Dynamic AMOLED 2X",
      "processor": "Snapdragon 8 Gen 4",
      "camera": "50MP Triple Rear Camera System",
      "battery": "4400mAh with 45W Fast Charging"
    },
    image_alt: "Samsung Galaxy Fold7",
    glow_color: "rgba(0, 114, 255, 0.3)",
    image: imgFold7,
    badge: "Mobile & Tablets"
  },
  {
    id: 2,
    name: "Samsung Galaxy Z TriFold",
    category: "Mobile & Tablets",
    variants: ["16/512GB (Dual Sim)"],
    detailed_specs: {
      "display": "10.2-inch Triple-Folding Display",
      "hinge": "Advanced Dual-Hinge Mechanism",
      "os": "Android 16 with Tri-Tasking UI",
      "durability": "IPX8 Water Resistance"
    },
    image_alt: "Samsung Galaxy Z TriFold",
    glow_color: "rgba(0, 114, 255, 0.4)",
    image: imgTrifold,
    badge: "Mobile & Tablets"
  },
  {
    id: 3,
    name: "Samsung Galaxy S26 Ultra",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB"],
    detailed_specs: {
      "display": "6.8-inch QHD+ 144Hz AMOLED",
      "processor": "Snapdragon 8 Gen 5 (Antigravity Edition)",
      "camera": "200MP Main + 100x Space Zoom",
      "build": "Grade 5 Titanium Frame"
    },
    image_alt: "Samsung Galaxy S26 Ultra",
    glow_color: "rgba(0, 114, 255, 0.4)",
    image: imgS26,
    badge: "Mobile & Tablets"
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 8",
    category: "Wearables",
    variants: ["40mm", "44mm"],
    detailed_specs: {
      "sensors": "BioActive Sensor (ECG, Blood Pressure)",
      "battery": "Up to 80 hours (Normal mode)",
      "screen": "Sapphire Crystal Glass",
      "connectivity": "GPS, NFC, LTE Optional"
    },
    image_alt: "Samsung Galaxy Watch 8",
    glow_color: "rgba(255, 69, 0, 0.3)",
    image: imgWatch8,
    badge: "Wearables"
  },
  {
    id: 5,
    name: "iPhone Air",
    category: "Mobile & Tablets",
    variants: ["256GB (Esim Unlocked)", "512GB (Esim Unlocked)"],
    detailed_specs: {
      "design": "Ultra-Thin 5mm Chassis",
      "processor": "A18 Bionic Chip",
      "security": "FaceID 2.0 (Under-display)",
      "charging": "MagSafe only (No Port)"
    },
    image_alt: "iPhone Air",
    glow_color: "rgba(255, 255, 255, 0.2)",
    image: imgIphoneAir,
    badge: "Mobile & Tablets"
  },
  {
    id: 6,
    name: "iPhone 16",
    category: "Mobile & Tablets",
    variants: ["128GB (Physical Sim Unlocked)"],
    detailed_specs: {
      "display": "6.1-inch Super Retina XDR",
      "processor": "A18 Chip",
      "camera": "48MP Main Camera",
      "button": "Action Button Integration"
    },
    image_alt: "iPhone 16",
    glow_color: "rgba(255, 255, 255, 0.1)",
    image: imgIPhone16,
    badge: "Mobile & Tablets"
  },
  {
    id: 7,
    name: "iPhone 17 Pro Max",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB", "1TB", "2TB"],
    detailed_specs: {
      "display": "6.7-inch ProMotion 120Hz",
      "processor": "A19 Pro Chip",
      "zoom": "10x Optical Periscope Zoom",
      "video": "8K ProRes Video Recording"
    },
    image_alt: "iPhone 17 Pro Max",
    glow_color: "rgba(200, 200, 200, 0.3)",
    image: imgIphone17,
    badge: "Mobile & Tablets"
  },
  {
    id: 8,
    name: "Samsung Galaxy A07",
    category: "Mobile & Tablets",
    variants: ["64/4GB"],
    detailed_specs: {
      "display": "6.5-inch HD+ LCD",
      "battery": "5000mAh Long-lasting",
      "expansion": "MicroSD Slot up to 1TB",
      "box": "Includes 25W Power Adapter"
    },
    image_alt: "Samsung Galaxy A07",
    glow_color: "rgba(0, 114, 255, 0.1)",
    image: imgA07,
    badge: "Mobile & Tablets"
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S11 Ultra 5G",
    category: "Mobile & Tablets",
    variants: ["256/12GB (Cellular + WiFi)"],
    detailed_specs: {
      "screen": "14.6-inch Super AMOLED",
      "connectivity": "5G High-Speed Data",
      "stylus": "S-Pen with 2.8ms Latency",
      "sound": "Quad Speakers by AKG"
    },
    image_alt: "Samsung Galaxy Tab S11 Ultra 5G",
    glow_color: "rgba(0, 114, 255, 0.3)",
    image: imgTabS11,
    badge: "Mobile & Tablets"
  },
  {
    id: 10,
    name: "Tab A11",
    category: "Mobile & Tablets",
    variants: ["64/4GB", "128/8GB (Cellular + WiFi)"],
    detailed_specs: {
      "size": "11-inch IPS Display",
      "battery": "7040mAh",
      "os": "Android 15",
      "use": "Perfect for Education & Streaming"
    },
    image_alt: "Tab A11",
    glow_color: "rgba(100, 100, 100, 0.2)",
    image: imgTabA11,
    badge: "Mobile & Tablets"
  },
  {
    id: 11,
    name: "HP OmniBook Flip360",
    category: "Computing",
    variants: ["Core5 / 8GB / 512GB"],
    detailed_specs: {
      "type": "2-in-1 Convertible Laptop",
      "processor": "Intel Core 5 (Ultra Series)",
      "screen": "14-inch OLED Touchscreen",
      "hinge": "360-degree Rotating Screen"
    },
    image_alt: "HP OmniBook Flip360",
    glow_color: "rgba(0, 242, 255, 0.2)",
    image: imgHpOmni,
    badge: "Computing"
  },
  {
    id: 12,
    name: "Beats Pill",
    category: "Speakers",
    variants: ["Bluetooth Speakers"],
    detailed_specs: {
      "sound": "Enhanced Woofer & Tweeter",
      "battery": "24 Hours Playback",
      "resistance": "IP67 Dust & Water Proof",
      "pairing": "One-touch Apple & Android Pairing"
    },
    image_alt: "Beats Pill",
    glow_color: "rgba(255, 0, 50, 0.3)",
    image: imgPill,
    badge: "Speakers"
  },
  {
    id: 13,
    name: "Samsung Galaxy S25",
    category: "Mobile & Tablets",
    variants: ["128/12GB (Dual Sim)", "256/12GB (Dual Sim)"],
    detailed_specs: {
      "display": "6.2-inch Dynamic AMOLED 2X",
      "processor": "Snapdragon 8 Gen 4",
      "camera": "50MP Dual Pixel Main Sensor",
      "ai": "Galaxy AI Advanced Suite"
    },
    image_alt: "Samsung Galaxy S25",
    glow_color: "rgba(0, 114, 255, 0.2)",
    image: imgS25,
    badge: "Mobile & Tablets"
  },
  {
    id: 14,
    name: "Samsung Galaxy S25 Ultra",
    category: "Mobile & Tablets",
    variants: ["256GB (Dual Sim)", "512GB (Dual Sim)", "1TB (Dual Sim)"],
    detailed_specs: {
      "display": "6.8-inch Flat Display",
      "processor": "Snapdragon 8 Gen 4",
      "camera": "200MP Ultra Vision Camera",
      "build": "Symmetric Titanium Frame"
    },
    image_alt: "Samsung Galaxy S25 Ultra",
    glow_color: "rgba(255, 215, 0, 0.2)",
    image: imgS25Ultra,
    badge: "Mobile & Tablets"
  },
  {
    id: 15,
    name: "iPhone 16 Pro Max",
    category: "Mobile & Tablets",
    variants: ["256GB", "512GB (Physical & Esim)"],
    detailed_specs: {
      "display": "6.9-inch Borderless Display",
      "processor": "A18 Pro Chip",
      "camera": "Fusion Camera with 48MP Macro",
      "connection": "WiFi 7 Support"
    },
    image_alt: "iPhone 16 Pro Max",
    glow_color: "rgba(0, 242, 255, 0.4)",
    image: imgIphone16ProMax,
    badge: "Mobile & Tablets"
  },
  {
    id: 16,
    name: "iPad A16",
    category: "Mobile & Tablets",
    variants: ["128GB", "256GB", "WiFi Only", "Cellular + WiFi"],
    detailed_specs: {
      "chip": "A16 Bionic (Enhanced)",
      "display": "10.9-inch Liquid Retina",
      "port": "USB-C High Speed",
      "colors": "Available in 4 Vibrant Colors"
    },
    image_alt: "iPad A16",
    glow_color: "rgba(100, 100, 100, 0.2)",
    image: imgIpadA16,
    badge: "Mobile & Tablets"
  },
  {
    id: 17,
    name: "TCL QLED TV 98\"",
    category: "TV Sets",
    variants: ["98-inch 4K HDR"],
    detailed_specs: {
      "panel": "Quantum Dot (QLED) Technology",
      "gaming": "144Hz Variable Refresh Rate",
      "audio": "Onkyo 2.1.2 Surround Sound",
      "os": "Google TV Built-in"
    },
    image_alt: "TCL Qled Tv 98",
    glow_color: "rgba(255, 0, 0, 0.2)",
    image: imgTclTv,
    badge: "TV Sets"
  }
];

const categories = ["All", "Mobile & Tablets", "Computing", "Wearables", "Speakers", "TV Sets", "Gaming Zone"];

const ProductCard = ({ product, index, setSelectedProductForSpecs }) => {
  const displayVariants = product.variants.filter(v => !v.includes('GHS'));
  const [selectedVariant, setSelectedVariant] = useState(displayVariants[0] || "");

  const getWhatsAppLink = () => {
    let msg = `Hi Mantse Electronics Hub, I am inquiring about the price and availability of the ${product.name}`;
    if (selectedVariant) {
      msg += ` (${selectedVariant})`;
    } else if (displayVariants.length > 0) {
      msg += ` (${displayVariants.join(', ')})`;
    }
    return `https://wa.me/233240000000?text=${encodeURIComponent(msg + '.')}`;
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div 
      layout
      className="product-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1, ease: "easeOut" }}
      style={{ '--hover-glow': product.glow_color }}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.image_alt || product.name} className="product-img" loading="lazy" decoding="async" />
        <span className="product-badge">{product.badge}</span>
      </div>
      
      <div className="product-info">
        <div>
          <h3 className="product-name" style={{ marginBottom: product.name === "Samsung Galaxy A07" ? '0.25rem' : '0.5rem' }}>
            {product.name}
          </h3>
          {/* Custom badge for A07 adapter requirement */}
          {product.name === "Samsung Galaxy A07" && (
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              ✨ Includes Power Adapter
            </span>
          )}
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
            Inquire for Price <span>↗</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = ({ activeCategory = "All", setActiveCategory }) => {
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="featured" id="featured">
      <div className="featured-container">
        
        <div className="featured-header">
          <h2 className="section-title">Trending This Week</h2>
          <p className="section-subtitle">The most highly sought-after gear from top brands.</p>
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

        <div className="products-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
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
                  <h3 className="empty-state-title">Coming Soon to {activeCategory}</h3>
                  <p className="empty-state-desc">We're constantly restocking with the latest and greatest gear. Be the first to know when it drops.</p>
                  <a href={`https://wa.me/233240000000?text=${encodeURIComponent(`Hi Mantse Electronics Hub, do you have any new stock arriving for ${activeCategory}?`)}`} target="_blank" rel="noopener noreferrer" className="whatsapp-cta-link">
                    <button className="whatsapp-cta" style={{ background: 'transparent', border: '1px solid var(--accent-cyan)', padding: '0.8rem 1.5rem', color: 'var(--text-primary)', borderRadius: '8px', cursor: 'pointer' }}>Inquire via WhatsApp</button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
