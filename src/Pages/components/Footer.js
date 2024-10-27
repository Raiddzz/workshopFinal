import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">E-Commerce</h2>
          <p className="footer-description">
            Tu destino para encontrar los mejores productos con la mejor calidad y precio.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Enlaces Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#features">Características</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>User123@example.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 E-Commerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;