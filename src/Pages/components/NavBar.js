import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">E-Commerce</h1>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#products">Productos</a></li>
        <li><Link to="/favorites">Favoritos</Link></li>
        <li><a href="#footer">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;