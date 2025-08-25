import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_vj9xey9',
  TEMPLATE_ID: 'template_f55yte8', 
  PUBLIC_KEY: 'NkxfrAY2aoOSlSeY_'
};

// Interface para los datos del formulario
interface ContactFormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

// Interface para la respuesta del servicio
interface EmailResponse {
  success: boolean;
  message: string;
}

// Función para enviar email
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Preparar los datos para EmailJS
    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      subject: formData.asunto,
      message: formData.mensaje,
      to_name: 'Repostería Catalina',
    };

    // Enviar email usando EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Email enviado exitosamente:', result);
    
    return {
      success: true,
      message: '¡Mensaje enviado correctamente! Te contactaremos pronto.'
    };

  } catch (error) {
    console.error('Error al enviar email:', error);
    
    return {
      success: false,
      message: 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos directamente.'
    };
  }
};