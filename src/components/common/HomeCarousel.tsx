import React from 'react';
import { Carousel } from 'react-bootstrap';


const HomeCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img-home/torta-hojarasca.jpeg" 
          alt="Torta de hojarasca con manjar"
        />
        <Carousel.Caption>
          <h5>Tortas para cada ocasión</h5>
          <p>Celebra tus momentos especiales con nuestras creaciones únicas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img-home/galletas-variedad.jpeg" 
          alt="Galletas estilo New York con chispas de chocolate"
        />
        <Carousel.Caption>
          <h5>Galletas y Delicias</h5>
          <p>Descubre nuestra pasión por la repostería en cada bocado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img-home/banqueteria.png" 
          alt="Mesa dulce con variedad de productos de banquetería"
        />
        <Carousel.Caption>
          <h5>Banquetería y Eventos</h5>
          <p>Llevamos el sabor y la dulzura a tus eventos más importantes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;