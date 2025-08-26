import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const products = [
  {
    image: '/img-home/cinamon-roll.jpeg',
    title: 'Cinnamon Rolls',
    text: 'Nuestros famosos rollos de canela, suaves, aromáticos y con el glaseado perfecto.',
    link: '/services',
  },
  {
    image: '/img-home/torta-cumpleaños.png',
    title: 'Tortas Temáticas',
    text: 'Creamos la torta perfecta para tu evento. Diseños personalizados y sabores que enamoran.',
    link: '/services',
  },
  {
    image: '/img-home/pie-limon.jpeg',
    title: 'Kuchen y Pies',
    text: 'Desde el tradicional kuchen de nuez hasta el refrescante pie de limón. ¡Pura delicia!',
    link: '/services',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <Container as="main" className="my-5">
      <section id="nuestras-delicias" className="text-center">
        <h2 className="mb-5">Nuestras Delicias Destacadas</h2>
        <Row>
          {products.map((product) => (
            <Col lg={4} md={6} className="mb-4" key={product.title}>
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.text}</Card.Text>
                  <Link to={product.link} className="mt-auto" style={{ textDecoration: 'none' }}>
                    <div className="d-grid">
                      <Button variant="primary">
                        Ver más
                      </Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default FeaturedProducts;