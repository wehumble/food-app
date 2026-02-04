import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Burgers"
    },
    {
      id: 2,
      name: "BBQ Chicken Pizza",
      description: "Wood-fired pizza with BBQ sauce, grilled chicken, red onions, and cilantro",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Pizza"
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Salads"
    },
    {
      id: 4,
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Pasta"
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Desserts"
    },
    {
      id: 6,
      name: "Fresh Lemonade",
      description: "Homemade lemonade with fresh lemons, mint, and a touch of honey",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1621264443767-f7c7b9321e49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Drinks"
    }
  ];

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">Delicious dishes made with passion and the finest ingredients</p>
        </div>
      </section>

      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                  <span className="menu-category">{item.category}</span>
                </div>
                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="menu-price">{item.price}</span>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
