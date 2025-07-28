# Proyecto: Migración de Repostería Catalina a React

Este proyecto es el resultado de la migración de un sitio web estático desarrollado con HTML, CSS y jQuery a una Aplicación de Página Única (SPA) dinámica construida con React.

## Tecnologías Utilizadas

* **Framework/Librería:** React 18+
* **Herramienta de Build:** Vite
* **Enrutamiento:** React Router DOM v6
* **Estilos:** React-Bootstrap y Bootstrap 5
* **Íconos:** Bootstrap Icons

## Cómo Ejecutar el Proyecto

1.  Clonar el repositorio:
    ```bash
    git clone [URL-DE-TU-REPOSITORIO]
    ```
2.  Navegar a la carpeta del proyecto:
    ```bash
    cd [NOMBRE-DE-LA-CARPETA]
    ```
3.  Instalar las dependencias:
    ```bash
    npm install
    ```
4.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Arquitectura

El proyecto está estructurado con una arquitectura basada en componentes, separando los componentes de página (ubicados en `src/components/pages`) de los componentes reutilizables (ubicados en `src/components/common`).

Los estilos globales y las fuentes se gestionan a través de una hoja de estilos principal (`style.css`), mientras que los assets estáticos como imágenes y el favicon se sirven desde la carpeta `public` para optimizar su carga, siguiendo las convenciones de Vite.

---