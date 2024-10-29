import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Hero() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleShopNow = () => {
    if (user) {
      // Si el usuario está autenticado, redirige a productos
      navigate('/products');
    } else {
      // Si no está autenticado, redirige al login
      navigate('/login');
    }
  };

  return (
    <section className="hero">
      <h2 className="hero-title">Bienvenido a E-Commerce</h2>
      <p className="hero-description">Encuentra los mejores productos a los mejores precios.</p>
      <button className="hero-button" onClick={handleShopNow}>
        Compra ahora
      </button>
    </section>
  );
}

export default Hero;