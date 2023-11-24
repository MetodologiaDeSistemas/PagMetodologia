import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Nav/Nav.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./../Login/Login";
import Galeria from "./../Galeria/Galeria";
import Horarios from "./../Horarios/Horarios";
import Inicio from "./../Inicio/Inicio";
import Descripcion from "./../Descripcion/Descripcion";


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
          <Nav.Link href="/Login">Iniciar Sesión</Nav.Link>
        </Nav>
        <Nav className="mr-auto ml-auto">
          <Nav.Link href="#Inicio">Inicio</Nav.Link>
          <Nav.Link href="#Horarios">Horarios</Nav.Link>
          <Nav.Link href="#Descripcion">Servicios</Nav.Link>
          <Nav.Link href="#Galeria">Trabajos Realizados</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;