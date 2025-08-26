import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

// 1. Importar el archivo de módulo CSS
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleNavLinkClick = () => setExpanded(false);

  return (
    // 2. Aplicar la clase del módulo al componente de Bootstrap
    <BootstrapNavbar 
      expand="lg" 
      className={styles.navbar} // Clase modular para el contenedor principal
      fixed="top" 
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand 
          as={NavLink} 
          to="/" 
          className={styles.navbarBrand} // Clase modular para la marca
          onClick={handleNavLinkClick}
        >
          <img src="/logo.jpg" alt="Logo Repostería Catalina" />
          Repostería Catalina
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleToggle}
        />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* 3. Aplicar la clase modular a los links */}
            <Nav.Link as={NavLink} to="/" end onClick={handleNavLinkClick} className={styles.navLink}>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={handleNavLinkClick} className={styles.navLink}>
              Servicios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavLinkClick} className={styles.navLink}>
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleNavLinkClick} className={styles.navLink}>
              Contáctenos
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;