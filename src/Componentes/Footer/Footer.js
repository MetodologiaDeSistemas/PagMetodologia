import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-links">
        <a href="/contacto">Contacto</a>
        <a href="/servicios">Servicios</a>
        <a href="/nosotros">Nosotros</a>
      </div>
      <p>&copy; 2023 - Nas Estética</p>
    </footer>
  );
};

export default Footer;
