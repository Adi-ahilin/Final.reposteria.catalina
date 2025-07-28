import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    console.log('Datos del formulario:', formData);
    alert('Mensaje enviado (revisa la consola para ver los datos).');
    // Opcional: limpiar el formulario después de enviar
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };
  
  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre completo" value={formData.nombre} onChange={handleInputChange} required />
          </Form.Group>
          
          <Form.Group controlId="email">
            <Form.Label>Correo Electrónico:</Form.Label>
            <Form.Control type="email" placeholder="tu.correo@ejemplo.com" value={formData.email} onChange={handleInputChange} required />
          </Form.Group>

          <Form.Group controlId="asunto">
            <Form.Label>Asunto:</Form.Label>
            <Form.Control type="text" placeholder="Motivo de tu consulta" value={formData.asunto} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="mensaje">
            <Form.Label>Mensaje:</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Escribe aquí tu mensaje..." value={formData.mensaje} onChange={handleInputChange} required />
          </Form.Group>
           <div className="d-grid">
                <Button type="submit" variant="primary">
                    Enviar Mensaje
                </Button>
            </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;