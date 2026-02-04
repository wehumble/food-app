import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: 'Ì≥ç', title: 'Address', detail: '123 Food Street, Culinary City' },
    { icon: 'Ì≥û', title: 'Phone', detail: '(123) 456-7890' },
    { icon: '‚úâÔ∏è', title: 'Email', detail: 'info@foodorder.com' },
    { icon: '‚è∞', title: 'Hours', detail: 'Mon-Sun: 8AM - 10PM' },
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#333' }}>Contact Us</h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        Have questions or feedback? We'd love to hear from you!
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '50px',
        '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
      }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
            Get in Touch
          </h2>
          <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            We're here to help and answer any questions you might have about our services.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '25px' }}>
            {contactInfo.map((info, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{ 
                  background: '#ff6b6b', 
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {info.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '5px', 
                    color: '#333' 
                  }}>
                    {info.title}
                  </h3>
                  <p style={{ color: '#666' }}>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ 
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                ':focus': { 
                  outline: 'none', 
                  borderColor: '#ff6b6b' 
                }
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ 
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                ':focus': { 
                  outline: 'none', 
                  borderColor: '#ff6b6b' 
                }
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{ 
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                resize: 'vertical',
                ':focus': { 
                  outline: 'none', 
                  borderColor: '#ff6b6b' 
                }
              }}
            />
            <button type="submit" style={{ 
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              ':hover': { background: '#ff5252' }
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
