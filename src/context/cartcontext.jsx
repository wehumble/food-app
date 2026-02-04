import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const cartTotal = cart.length;

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
