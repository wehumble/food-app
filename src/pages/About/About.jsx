import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About Tasty</h1>
          <p className="about-subtitle">Our story of passion, quality, and delicious food</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Tasty began as a small family-owned restaurant with a simple mission: 
                to serve delicious, high-quality food using fresh, locally sourced ingredients. What started 
                as a humble burger joint has grown into a beloved dining destination known for our innovative 
                menu and commitment to excellence.
              </p>
              <p>
                Our founder, Chef Michael Rodriguez, believed that great food should be accessible to everyone. 
                He spent years perfecting our signature recipes, ensuring that every dish meets our high standards 
                of taste, quality, and presentation.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Our Restaurant" 
              />
            </div>
          </div>

          <div className="mission-section">
            <h2>Our Mission</h2>
            <p className="mission-statement">
              To create memorable dining experiences by serving exceptional food made with love, 
              passion, and the finest ingredients, while fostering a welcoming community atmosphere 
              where every guest feels like family.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">Ìºü</div>
              <h3>Quality</h3>
              <p>We never compromise on ingredients or preparation methods.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">‚ù§Ô∏è</div>
              <h3>Passion</h3>
              <p>Every dish is prepared with genuine love and attention to detail.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">Ì¥ù</div>
              <h3>Community</h3>
              <p>We support local farmers and give back to our community.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">Ìº±</div>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly practices and responsible sourcing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
