import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;