import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    image: '/img-service/torta-hojarasca.jpeg',
    title: 'Tortas Temáticas',
    text: 'Creamos la torta perfecta para tu evento. Precio desde $25.000 (chica) y $40.000 (grande). Agendar con 1 semana de anticipación.',
    buttonText: 'Cotizar mi Torta',
  },
  {
    image: '/img-service/cinamon-roll.jpeg',
    title: 'Cinnamon Rolls',
    text: 'Clásicos rollos de canela con glaseado de queso crema. Precio: $1.500 c/u. Consulta por pedido mínimo.',
    buttonText: 'Encargar',
  },
  {
    image: '/img-service/kuchen-frambuesas.jpeg',
    title: 'Kuchen y Pies',
    text: 'Exquisitas variedades como Kuchen de Nuez, Pie de Limón y más. Precio: $15.000. Sujeto a disponibilidad.',
    buttonText: 'Ver variedades',
  },
  {
    image: '/img-service/galletas-variedad2.jpeg',
    title: 'Galletas Estilo NY',
    text: 'Crujientes por fuera, suaves por dentro y llenas de chocolate. Precio: $1.500 c/u. ¡Las favoritas!',
    buttonText: 'Pedir ahora',
  },
  {
    image: '/img-service/torta-americana.avif',
    title: 'Tortas Americanas',
    text: 'Disfruta de clásicos como la Red Velvet o Carrot Cake. Precio: $28.000. Un lujo que debes probar.',
    buttonText: 'Reservar',
  },
  {
    image: '/img-service/banqueteria-dulce.jpg',
    title: 'Servicio de Banquetearía',
    text: 'Montamos mesas dulces personalizadas para matrimonios, cumpleaños y eventos. Contáctanos para planificar.',
    buttonText: 'Cotizar Evento',
  }
];

const ServiceList: React.FC = () => {
  return (
    <Row>
      {servicesData.map((service, index) => (
        <Col lg={4} md={6} className="mb-4" key={index}>
          <Card className="h-100">
            <Card.Img variant="top" src={service.image} alt={service.title} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.text}</Card.Text>

              <Link to="/contact" className="mt-auto" style={{ textDecoration: 'none' }}>
                <div className="d-grid">
                  <Button variant="primary">
                    {service.buttonText}
                  </Button>
                </div>
              </Link>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ServiceList;