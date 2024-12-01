import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">E-Commerce</Link>
      <ul className="navbar-links">
        <li><a href="/#features">Features</a></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
        <li><a href="/about">Contacto</a></li>
      </ul>
      <div className="auth-buttons">
        {user ? (
          <>
            <span className="user-greeting">Hola, {user.name}</span>
            <button onClick={handleLogout} className="auth-button logout-button">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="auth-button login-button">Iniciar Sesión</Link>
            <Link to="/register" className="auth-button register-button">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;