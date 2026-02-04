import React from 'react';
import Header from './Header';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">TASTY</div>
            <p className="footer-text">
              © 2024 Food App - All rights reserved
            </p>
            <p className="footer-subtext">
              Delicious food delivered to your doorstep
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
