import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-2">© 2025 Repostería Catalina. Todos los derechos reservados.</p>
        <p className="mb-3">Síguenos en nuestras redes sociales:</p>
        <div className="social-icons">
          <a href="#" className="social-link" aria-label="Visita nuestro Facebook de Repostería Catalina">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/reposteriacatalina/" className="social-link" aria-label="Visita nuestro Instagram de Repostería Catalina">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://wa.me/56900000000" className="social-link" aria-label="Contacta a Repostería Catalina por WhatsApp" target="_blank">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;