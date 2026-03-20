import React from 'react';
import './CategorySection.css';
import { Gamepad2, Smartphone, Laptop, Watch, Speaker, Tv } from 'lucide-react';

const CategorySection = ({ setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    if (setActiveCategory) setActiveCategory(category);
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="categories" id="categories">
      <div className="categories-header">
        <h2 className="section-title">Explore by Category</h2>
        <p className="section-subtitle">Find exactly what you need from our curated collections</p>
      </div>
      
      <div className="bento-grid">
        
        {/* Large Tile - Gaming Zone */}
        <div 
          className="bento-item bento-large gaming-tile"
          onClick={() => handleCategoryClick('Gaming Zone')}
          style={{ cursor: 'pointer' }}
        >
          <div className="bento-content">
            <Gamepad2 className="bento-icon" size={32} />
            <h3 className="bento-title">Gaming Zone</h3>
            <p className="bento-desc">Next-gen consoles, handhelds, and premium peripherals.</p>
            <button className="bento-btn pointer-events-none">Shop Gaming</button>
          </div>
          <div className="glow-overlay"></div>
        </div>

        {/* Wide Tile - Mobile & Tablets */}
        <div 
          className="bento-item bento-wide mobile-tile"
          onClick={() => handleCategoryClick('Mobile & Tablets')}
          style={{ cursor: 'pointer' }}
        >
          <div className="bento-content">
            <Smartphone className="bento-icon" size={32} />
            <h3 className="bento-title">Mobile & Tablets</h3>
            <p className="bento-desc">The newest flagships and foldable devices.</p>
            <button className="bento-btn pointer-events-none">Shop Mobile</button>
          </div>
          <div className="glow-overlay"></div>
        </div>

        {/* Small Square 1 - Computing */}
        <div 
          className="bento-item bento-small computing-tile"
          onClick={() => handleCategoryClick('Computing')}
          style={{ cursor: 'pointer' }}
        >
          <div className="bento-content">
            <Laptop className="bento-icon" size={28} />
            <h3 className="bento-title">Computing</h3>
            <p className="bento-desc">Powerhouses for work and play.</p>
            <button className="bento-btn pointer-events-none">Shop Computing</button>
          </div>
          <div className="glow-overlay"></div>
        </div>

        {/* Small Square 2 - Wearables */}
        <div 
          className="bento-item bento-small wearables-tile"
          onClick={() => handleCategoryClick('Wearables')}
          style={{ cursor: 'pointer' }}
        >
          <div className="bento-content">
            <Watch className="bento-icon" size={28} />
            <h3 className="bento-title">Wearables</h3>
            <p className="bento-desc">Smart tech for your wrist.</p>
            <button className="bento-btn pointer-events-none">Shop Wearables</button>
          </div>
          <div className="glow-overlay"></div>
        </div>

        {/* Wide Tile - Speakers */}
        <div 
          className="bento-item bento-wide speakers-tile"
          onClick={() => handleCategoryClick('Speakers')}
          style={{ cursor: 'pointer' }}
        >
          <div className="bento-content">
            <Speaker className="bento-icon" size={32} />
            <h3 className="bento-title">Speakers</h3>
            <p className="bento-desc">Room-filling audio and crystal clear sound.</p>
            <button className="bento-btn pointer-events-none">Shop Speakers</button>
          </div>
          <div className="glow-overlay"></div>
        </div>

        {/* Small Tile - TV Sets */}
        <div 
          className="bento-item bento-small tv-tile"
          onClick={() => handleCategoryClick('TV Sets')}
          style={{ cursor: 'pointer' }}
        >
          <div className="bento-content">
            <Tv className="bento-icon" size={28} />
            <h3 className="bento-title">TV Sets</h3>
            <p className="bento-desc">Cinematic 4K and 8K displays.</p>
            <button className="bento-btn pointer-events-none">Shop TVs</button>
          </div>
          <div className="glow-overlay"></div>
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
