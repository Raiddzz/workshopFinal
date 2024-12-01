import React, {useEffect} from "react";
import Navbar from "./components/NavBar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import './styles/LandingPage.css';


export function LandingPage() {
    useEffect(() => {
      const handleSmoothScroll = (event) => {
        const href = event.target.getAttribute('href');
        
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
        <Footer />
      </div>
    );
}

export default LandingPage;