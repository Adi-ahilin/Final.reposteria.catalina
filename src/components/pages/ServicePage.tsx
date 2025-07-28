import React from 'react';
import { Container } from 'react-bootstrap';
import ServiceList from '../common/ServiceList'; // Importamos el nuevo componente

const ServicePage: React.FC = () => {
  return (
    <Container as="main" className="my-5">
      <section id="nuestros-servicios">
        <h2 className="text-center mb-5">Nuestros Productos y Servicios</h2>
        <ServiceList />
      </section>
    </Container>
  );
};

export default ServicePage;