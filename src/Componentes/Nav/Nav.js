import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Nav/Nav.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg">
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav ml-auto">
          <Nav.Link href="login">Iniciar Sesión</Nav.Link>
        </Nav>
        <Nav className="mr-auto ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Horarios</Nav.Link>
          <Nav.Link href="#link">Servicios</Nav.Link>
          <Nav.Link href="#link">Trabajos Realizados</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;