import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../common/ContactForm';
import LocationInfo from '../common/LocationInfo'; 

const ContactPage: React.FC = () => {
  return (
    <Container as="main" className="my-5">
      <section id="contactenos" className="py-5 bg-light rounded shadow-sm">
        <h2 className="text-center mb-4">Contáctenos</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="text-center lead mb-4">
              ¿Tienes una pregunta o quieres hacer un pedido especial? ¡Escríbenos! Estaremos felices de ayudarte.
            </p>
          </Col>
        </Row>

        <ContactForm />

        {/* Aquí llamamos al componente de ubicación y mapa */}
        <LocationInfo />
        
      </section>
    </Container>
  );
};

export default ContactPage;