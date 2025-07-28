import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ServicePage from './components/pages/ServicePage';


const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Aquí se renderizará el contenido de cada página */}
      </main>
      <Footer />
    </div>
  );
};

// Componente principal de la aplicación
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rutas anidadas que se mostrarán dentro del Layout */}
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
