Repostería Catalina - Aplicación Web Moderna
Una aplicación web completamente funcional desarrollada con React y TypeScript para una repostería local, que incluye formulario de contacto real, navegación responsiva y arquitectura modular profesional.
Tecnologías Utilizadas

Frontend Framework: React 19 + TypeScript
Build Tool: Vite
Enrutamiento: React Router DOM v7
UI Framework: React Bootstrap + Bootstrap 5
Servicios Externos: EmailJS para formulario de contacto
Iconografía: Bootstrap Icons
Linting: ESLint con configuración TypeScript

Características Principales
Funcionalidades Completas

Formulario de contacto funcional que envía emails reales via EmailJS
Navegación responsiva con menú móvil completamente operativo
Diseño responsive optimizado para todos los dispositivos
Single Page Application (SPA) con navegación fluida
Estados de carga y feedback visual para mejor UX

Arquitectura Técnica

Separación de responsabilidades con servicios independientes
Componentes reutilizables organizados modularmente
Tipado TypeScript estricto sin conflictos
Manejo de errores robusto y user-friendly
Estado controlado para formularios y navegación

Estructura del Proyecto
src/
├── components/
│   ├── common/                 # Componentes reutilizables
│   │   ├── ContactForm.tsx     # Formulario con validaciones
│   │   ├── Navbar.tsx          # Navegación responsiva
│   │   ├── Footer.tsx          # Pie de página
│   │   └── ...
│   └── pages/                  # Componentes de página
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── ContactPage.tsx
│       └── ServicePage.tsx
├── services/                   # Lógica de negocio
│   └── emailService.ts         # Integración EmailJS
├── assets/                     # Recursos procesados
│   └── style.css              # Estilos personalizados
└── App.tsx                    # Configuración de rutas
Mejoras Implementadas
1. Navegación Móvil Funcional

Migración de jQuery/Bootstrap nativo a React controlado
Estado de expansión manejado con hooks
Cierre automático del menú al navegar
Compatibilidad total con React Router v7

2. Formulario de Contacto Real

Antes: Solo simulación con console.log
Después: Emails reales enviados via EmailJS
Loading states y spinners durante envío
Validaciones y manejo de errores
Feedback visual con alertas Bootstrap

3. Arquitectura Modular

Separación de UI y lógica de negocio
Servicio independiente para comunicación externa
Interfaces TypeScript bien definidas
Código reutilizable y mantenible

4. Experiencia de Usuario Mejorada

Estados de carga visibles
Alertas contextuales de éxito/error
Formulario auto-limpiable tras éxito
Información de contacto alternativa
Navegación intuitiva en todos los dispositivos

Instalación y Uso
Requisitos Previos

Node.js 18+
npm o yarn

Instalación
bash# Clonar el repositorio
git clone [URL-DE-TU-REPOSITORIO]

# Navegar al directorio
cd reposteria-catalina

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
Scripts Disponibles
bashnpm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Linting con ESLint
npm run preview  # Preview del build
Configuración del Formulario de Contacto
El formulario utiliza EmailJS para envío real de emails. Para configurar:

Crear cuenta en EmailJS
Configurar servicio de email (Gmail recomendado)
Crear plantilla de email
Actualizar configuración en src/services/emailService.ts:

typescriptconst EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id',
  TEMPLATE_ID: 'tu_template_id', 
  PUBLIC_KEY: 'tu_public_key'
};
Despliegue
Build de Producción
bashnpm run build
Despliegue Recomendado

Vercel: Configuración automática para React/Vite
Netlify: Soporte nativo para SPAs
GitHub Pages: Requiere configuración adicional para rutas

Configuración para SPA
Asegurar que el servidor redirija todas las rutas a index.html para funcionamiento correcto del enrutamiento del lado cliente.
Decisiones Técnicas
Por qué React Router v7

Última versión con mejoras de rendimiento
Mejor integración con React 19
Soporte mejorado para TypeScript

Por qué EmailJS

Sin necesidad de backend propio
Integración simple y confiable
Perfecto para proyectos de portafolio
200 emails gratuitos/mes

Por qué Arquitectura Modular

Mejor mantenibilidad del código
Facilita testing unitario
Código reutilizable
Separación clara de responsabilidades

Próximas Mejoras

 Implementación de lazy loading para componentes
 Sistema de gestión de productos dinámico
 Panel de administración básico
 Integración con sistema de pagos
 PWA (Progressive Web App) features
 Tests unitarios con Jest/React Testing Library

Rendimiento

Bundle size optimizado con tree-shaking de Vite
Imágenes optimizadas servidas desde public/
CSS modular sin dependencias innecesarias
TypeScript compilation para código optimizado

Compatibilidad

Navegadores modernos (Chrome 90+, Firefox 88+, Safari 14+)
Dispositivos móviles completamente responsive
Accesibilidad básica implementada (ARIA labels, alt text)

Contribución
Este proyecto forma parte de un portafolio profesional. Para sugerencias o mejoras, contactar al desarrollador.
Licencia
Proyecto desarrollado para fines educativos y de demostración técnica.

Desarrollado con React + TypeScript | 2025