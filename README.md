Repostería Catalina - Aplicación Web Moderna

 Una aplicación web completamente funcional desarrollada con React y TypeScript para una repostería local. 
 Este proyecto demuestra una arquitectura modular profesional, manejo de estado avanzado y las mejores 
 prácticas de desarrollo front-end moderno.

 Tecnologías Utilizadas:
- Framework Principal: React 19 + TypeScript
- Herramienta de Build: Vite
- Enrutamiento:  React Router DOM v7
- UI Framework: React Bootstrap + Bootstrap 5
- Estilos: CSS Modules y CSS Global
- Servicios Externos: EmailJS para formulario de contacto
- Iconografía: Bootstrap Icons
- Calidad de Código: ESLint con configuración estricta para TypeScript
 
 Características Principales

 Funcionalidades Completas:
- Formulario de Contacto Funcional: Envía emails reales utilizando EmailJS.
- Single Page Application (SPA): Navegación fluida y sin recargas de página.
- Diseño Totalmente Responsivo: Experiencia de usuario optimizada para escritorio, tablets y móviles.
- Feedback de Usuario Avanzado: Indicadores de carga (spinners) y alertas visuales para una mejor UX.

Arquitectura Técnica:

-Componentes Modulares y Reutilizables: Estructura organizada en pages y common.
-Separación de Responsabilidades: Lógica de negocio aislada en services, desacoplada de la UI.
-Estilos Encapsulados: Uso de CSS Modules para prevenir conflictos de estilos globales.
-Manejo de Estado Controlado: Hooks de React para gestionar el estado de formularios y la navegación de manera eficiente.
-Tipado Estricto con TypeScript: Código robusto, seguro y auto-documentado.

Calidad de Código y Buenas Prácticas

Este proyecto implementa prácticas estándar de la industria para asegurar un código mantenible y seguro:

-Variables de Entorno: Las claves y credenciales de servicios externos (EmailJS) se gestionan de forma segura a través de un archivo .env y no se exponen en el código fuente.
-Keys Estables en Listas: Se utilizan identificadores únicos (product.title) para las keys en el renderizado de listas, optimizando el rendimiento de React y previniendo bugs.
-Código Limpio: El código sigue los principios de legibilidad y está libre de variables o importaciones innecesarias, gracias a una configuración de linter estricta.Instalación y UsoRequisitos PreviosNode.js v18+npm o yarnInstalación# 

1. Clonar el repositorio

git clone [URL-DE-TU-REPOSITORIO]

# 2. Navegar al directorio del proyecto
cd Final.reposteria.catalina

# 3. Instalar dependencias
npm install
Iniciar la Aplicación# Iniciar el servidor de desarrollo
npm run dev
Configuración del Formulario de ContactoEl formulario utiliza EmailJS. Para que funcione en tu entorno local, sigue estos pasos:Crea una cuenta en EmailJS.Añade un nuevo servicio (ej. Gmail).Crea una plantilla de email.En la raíz del proyecto, crea un archivo llamado .env y añade tus credenciales con el siguiente formato:# .env
VITE_EMAILJS_SERVICE_ID="tu_service_id"
VITE_EMAILJS_TEMPLATE_ID="tu_template_id"
VITE_EMAILJS_PUBLIC_KEY="tu_public_key"

🔒 Importante: El archivo .env está incluido en .gitignore para asegurar que tus claves nunca se suban al repositorio.
Próximas MejorasImplementación de lazy loading para componentes y rutas.
Tests unitarios y de integración con Vitest y React Testing Library.Sistema de gestión de productos consumiendo una API REST.
Conversión a Progressive Web App (PWA) para funcionalidades offline.DesplieguePara crear una versión de producción, ejecuta:npm run build.

El proyecto está listo para ser desplegado en plataformas como Vercel o Netlify, que ofrecen integración continua y soporte nativo para aplicaciones Vite.Desarrollado con ❤️ y las mejores prácticas de React + TypeScript | 2025