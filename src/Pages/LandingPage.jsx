// src/Pages/LandingPage.jsx
import React, {useEffect} from "react";
import Navbar from "./components/NavBar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import './styles/LandingPage.css';
import './styles/Products.css'

export function LandingPage() {
    useEffect(() => {
      const handleSmoothScroll = (event) => {
        const href = event.target.getAttribute('href');
        
        // Solo aplicar smooth scroll a enlaces internos (que empiezan con #)
        if (href && href.startsWith('#')) {
          const targetElement = document.querySelector(href);
    
          if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      };
    
      // Seleccionar solo los enlaces internos
      const links = document.querySelectorAll('.navbar-links a[href^="#"], .footer a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
      });
    
      return () => {
        links.forEach(link => {
          link.removeEventListener('click', handleSmoothScroll);
        });
      };
    }, []);

    return (
      <div>
        <Navbar />
        <Hero />
        <Features />
        <ProductList />
        <Footer />
      </div>
    );
}

export default LandingPage;