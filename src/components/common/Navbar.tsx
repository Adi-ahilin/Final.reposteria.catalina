import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleNavLinkClick = () => setExpanded(false);

  return (
    <BootstrapNavbar expand="lg" className="navbar" fixed="top" expanded={expanded}>
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="navbar-brand" onClick={handleNavLinkClick}>
          <img src="/logo.jpg" alt="Logo Repostería Catalina" />
          Repostería Catalina
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleToggle}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end onClick={handleNavLinkClick} className="nav-link">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={handleNavLinkClick} className="nav-link">
              Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavLinkClick} className="nav-link">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleNavLinkClick} className="nav-link">
              Contáctenos
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;