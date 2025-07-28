import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <h2 className="text-center mb-4">Sobre Repostería Catalina</h2>
      <p className="lead text-center">
        Repostería Catalina nació de la pasión por traer un toque de innovación y diversidad al sector rural, donde la oferta de 
        pastelería tradicional chilena era la norma. Nos propusimos ir más allá de lo típico, introduciendo una exquisita selección de 
        pastelería americana que incluye delicias como nuestras irresistibles galletas estilo New York, los aromáticos cinnamon rolls, 
        las aclamadas Carrot Cake y Red Velvet, y el clásico cheesecake.
      </p>

      <h3 className="text-center mt-5">Nuestra Misión</h3>
      <p className="text-center">Endulzar los momentos especiales de nuestros clientes con productos de alta calidad, creativos y elaborados con amor, ofreciendo una experiencia única que combine sabores tradicionales e innovadores.</p>
      
      <h3 className="text-center mt-4">Nuestra Visión</h3>
      <p className="text-center">Ser la repostería de referencia en la zona, reconocida por nuestra innovación, la calidad de nuestros ingredientes y nuestro compromiso con la satisfacción del cliente, expandiendo nuestro servicio de banquetearía personalizada a toda la región.</p>
      
      <p className="text-center mt-4">
        <img
          src="/img-about/pastelera.png"
          alt="Dibujo de una pastelera cocinando"
          className="img-fluid rounded"
        />
        <small className="d-block mt-2 text-muted">Nuestro equipo, listo para crear tus dulces favoritos.</small>
      </p>
    </>
  );
};

export default About;