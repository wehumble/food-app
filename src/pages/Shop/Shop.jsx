import React from 'react';
import './Shop.css';

const Shop = () => {
  const products = [
    { id: 1, name: 'Fresh Vegetables', description: 'Locally sourced organic vegetables.', price: '$12.99', image: 'íµ¦' },
    { id: 2, name: 'Premium Meats', description: 'High-quality cuts of meat.', price: '$24.99', image: 'íµ©' },
    { id: 3, name: 'Spices & Herbs', description: 'Fresh and dried spices for cooking.', price: '$8.99', image: 'í¼¿' },
    { id: 4, name: 'Kitchen Tools', description: 'Essential tools for cooking.', price: '$19.99', image: 'í´ª' },
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#333' }}>Our Shop</h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        Welcome to our shop! Browse our selection of premium food products and ingredients.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '30px' 
      }}>
        {products.map(product => (
          <div key={product.id} style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '12px',
            padding: '25px',
            background: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'translateY(-5px)' }
          }}>
            <div style={{ 
              fontSize: '3rem', 
              textAlign: 'center', 
              marginBottom: '20px' 
            }}>
              {product.image}
            </div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: '10px', 
              color: '#333' 
            }}>
              {product.name}
            </h3>
            <p style={{ 
              color: '#666', 
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              {product.description}
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <span style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: '#ff6b6b' 
              }}>
                {product.price}
              </span>
              <button style={{ 
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background 0.3s ease',
                ':hover': { background: '#ff5252' }
              }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
