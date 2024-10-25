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
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };
  
      const links = document.querySelectorAll('.navbar-links a, .footer a');
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
