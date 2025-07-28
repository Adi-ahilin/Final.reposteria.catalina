import React from 'react';
import { Row, Col } from 'react-bootstrap';

const LocationInfo: React.FC = () => {
  return (
    <Row className="justify-content-center mt-5">
      <Col lg={8} className="text-center">
        <h3>Nuestra Ubicación</h3>
        <p className="text-muted">Estamos ubicados en el corazón de Marchigüe, San Fernando.</p>
        <div className="embed-responsive embed-responsive-16by9" style={{ height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe 
            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13168.525927243703!2d-71.62147449999999!3d-34.398003849999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663f18869ce3fa3%3A0x6826bcc5cecc1cb4!2sMarchig%C3%BCe%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1750973082969!5m2!1ses!2scl"
            width="600" 
            height="450" 
            style={{ border:0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Ubicación de Repostería Catalina">
          </iframe>
        </div>
        <p className="mt-4"><strong>Horario de Atención:</strong> Lunes a Sábado de 9:00 a 19:00 hrs.</p>
      </Col>
    </Row>
  );
};

export default LocationInfo;