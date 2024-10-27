// src/Pages/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <section className="hero">
      <h2 className="hero-title">Bienvenido a E-Commerce</h2>
      <p className="hero-description">Encuentra los mejores productos a los mejores precios.</p>
      <button className="hero-button" onClick={handleShopNow}>Compra ahora</button>
    </section>
  );
}

export default Hero;