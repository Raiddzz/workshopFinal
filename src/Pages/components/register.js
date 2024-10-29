import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Aca importo el auth context
import '../styles/Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // llamo a la funcion de authContext
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Un check de si el mail está registrado
    if (users.find(user => user.email === email)) {
      setError('El email ya está registrado');
      return;
    }

    // creo un nuevo usuario
    const newUser  = {
      id: Date.now(),
      name,
      email,
      password
    };

    // Guardo el usuario en localstorage pasando los datos que obtengo de newUser con un push
    users.push(newUser );
    localStorage.setItem('users', JSON.stringify(users));

    // Inicio sesion automaticamente
    login(newUser );
    
    // Redirijo a la pag de inicio
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Crear Cuenta</h2>
          <p>Completa tus datos para registrarte</p>
        </div>

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crea tu contraseña"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Registrarse
          </button>
        </form>

        <div className="divider">
          <span>O regístrate con</span>
        </div>

        <div className="social-auth">
          <button className="social-button">
            <i className="fab fa-google"></i>
            Google
          </button>
          <button className="social-button">
            <i className="fab fa-facebook-f"></i>
            Facebook
          </button>
        </div>

        <div className="auth-links">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;