import React, { useState } from 'react';
import MainLayout from './components/MainLayout';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import ContactSection from './components/ContactSection';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <MainLayout>
      <HeroSection />
      <CategorySection setActiveCategory={setActiveCategory} />
      <FeaturedProducts activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ContactSection />
      <TrustBar />
      <Footer />
      <FloatingWhatsApp />
    </MainLayout>
  );
}

export default App;
