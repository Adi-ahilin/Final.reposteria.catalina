import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { sendContactEmail } from '../../services/emailService';

interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

type AlertType = 'success' | 'danger' | null;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [alertInfo, setAlertInfo] = useState<{type: AlertType; message: string}>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    // Limpiar alertas cuando el usuario empiece a escribir
    if (alertInfo.type) {
      setAlertInfo({ type: null, message: '' });
    }
  };

  const resetForm = () => {
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Llamar al servicio de email
    const result = await sendContactEmail(formData);

    // Mostrar resultado
    setAlertInfo({
      type: result.success ? 'success' : 'danger',
      message: result.message
    });

    // Limpiar formulario si fue exitoso
    if (result.success) {
      resetForm();
    }

    setIsSubmitting(false);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        
        {/* Mostrar alertas de éxito o error */}
        {alertInfo.type && (
          <Alert variant={alertInfo.type} className="mb-4">
            {alertInfo.message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Tu nombre completo" 
              value={formData.nombre} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo Electrónico:</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="tu.correo@ejemplo.com" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="asunto">
            <Form.Label>Asunto:</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Motivo de tu consulta" 
              value={formData.asunto} 
              onChange={handleInputChange} 
              disabled={isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="mensaje">
            <Form.Label>Mensaje:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Escribe aquí tu mensaje..." 
              value={formData.mensaje} 
              onChange={handleInputChange} 
              required 
              disabled={isSubmitting}
            />
          </Form.Group>

          <div className="d-grid">
            <Button 
              type="submit" 
              variant="primary" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </Button>
          </div>
        </Form>

        {/* Información de contacto alternativa */}
        <div className="text-center mt-4 p-3 bg-light rounded">
          <p className="mb-1"><strong>¿Prefieres contactarnos directamente?</strong></p>
          <p className="mb-0">
            WhatsApp: <a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer">+56 9 0000 0000</a> | 
            Email: <a href="mailto:contacto@reposteriacatalina.com">contacto@reposteriacatalina.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;