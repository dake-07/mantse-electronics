import React from 'react';
import Navbar from './Navbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="atmospheric-orb orb-cyan"></div>
      <div className="atmospheric-orb orb-green"></div>
      <Navbar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
