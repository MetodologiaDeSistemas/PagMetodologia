import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import '../Nav/Nav.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar expanded={expanded} expand="lg">
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ml-auto">
          {/* Uso de useNavigate en lugar de href */}
          <Nav.Link onClick={() => navigate('/Login')}>Iniciar Sesión</Nav.Link>
        </Nav>
        <Nav className="mr-auto ml-auto">
          {/* Uso de useNavigate en lugar de href */}
          <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
          <Nav.Link onClick={() => navigate('/HorariosFront')}>Horarios</Nav.Link>
          <Nav.Link onClick={() => navigate('/Servicios')}>Servicios</Nav.Link>
          <Nav.Link onClick={() => navigate('/Galeria')}>Trabajos Realizados</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
