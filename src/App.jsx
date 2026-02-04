import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainLayout from './components/Layouts/MainLayout';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import About from './pages/About/About';

function App() {
  return (
    <CartProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </Router>
    </CartProvider>
  );
}

export default App;
