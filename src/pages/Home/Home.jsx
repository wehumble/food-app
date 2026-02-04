import React from 'react';
import { 
  FaSeedling, 
  FaTruck, 
  FaTags 
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaSeedling size={48} />,
      title: "Fresh Ingredients",
      description: "We use only the freshest, locally sourced ingredients for all our dishes.",
      color: "#4CAF50"
    },
    {
      icon: <FaTruck size={48} />,
      title: "Fast Delivery",
      description: "Get your food delivered hot and fresh in under 30 minutes or it's free.",
      color: "#2196F3"
    },
    {
      icon: <FaTags size={48} />,
      title: "Best Prices",
      description: "Enjoy delicious meals at affordable prices with our daily specials.",
      color: "#FF9800"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge">ONLY</span>
              <span className="hero-title">BURGER</span>
            </div>
            <div className="hero-price">$6.99</div>
            <h2 className="hero-subtitle">NEW BURGER WITH ONION</h2>
            <p className="hero-description">
              Introducing our latest creation: the Ultimate Onion Burger! Featuring a premium beef patty, 
              crispy fried onions, fresh lettuce, tomato, and our signature sauce, all served on a toasted 
              brioche bun. This mouthwatering combination will satisfy your burger cravings like never before.
            </p>
            <a href="/menu" className="hero-cta">
              ORDER NOW
            </a>
          </div>
          <div className="hero-image">
            <div className="image-badge">NEW</div>
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Delicious Burger" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="features-title">Why Choose Our Food</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <div className="feature-divider"></div>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
