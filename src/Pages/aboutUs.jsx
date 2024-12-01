import React from 'react';
import './styles/AboutUs.css'

export function AboutUs() {
    return (
        <div className="about-me-container">
            <h1 className="about-me-title">Sobre Mí</h1>
            <p className="about-me-description">
                Hola, soy Rodrigo Ale, tengo 17 años y soy un desarrollador el cual está siempre dispuesto a crecer cada día mas y en constante crecimiento. Actualmente estoy aprendiendo desarrollo front-end y proximamente back-end para trazar mi camino hacia el desarrollo full-stack
            </p>
            <h2 className="about-me-subtitle">Mi Misión</h2>
            <p className="about-me-description">
                Mi misión es construir soluciones que no solo sean efectivas, sino que también ofrezcan una experiencia de usuario excepcional, me gusta mucho innovar y realizar tareas complejas.
            </p>
            <h2 className="about-me-subtitle">Mis Habilidades</h2>
            <ul className="about-me-skills">
                <li>Desarrollo Frontend (React, JavaScript)</li>
                <li>Desarrollo de herramientas versatiles (Lua)</li>
            </ul>
            <h2 className="about-me-subtitle">Contacta Conmigo</h2>
            <p className="about-me-description">
                Si deseas saber más sobre mi trabajo o colaborar en un proyecto, no dudes en <a href="rorrodhx123@gmail.com">contactarme</a>.
            </p>
        </div>
    );
}