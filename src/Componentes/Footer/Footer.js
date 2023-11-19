import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-links">
        <a href="/contacto">Whatsapp:</a>
        <a href="/servicios">Instagram:</a>
        <a href="/nosotros">Nosotros</a>
      </div>
      <p>&copy; 2023 - Nas - Espacio de Belleza</p>
    </footer>
  );
};

export default Footer;
