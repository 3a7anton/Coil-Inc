// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/shop" style={{ margin: '10px' }}>Shop</Link>
      <Link to="/privacy-policy" style={{ margin: '10px' }}>Privacy Policy</Link>
    </nav>
  );
}

export default Navbar;
