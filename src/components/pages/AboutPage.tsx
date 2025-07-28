import React from 'react';
import About from '../common/About';

const AboutPage: React.FC = () => {
  return (
    <main className="container my-5">
      <section id="sobre-reposteria-catalina" className="py-5 bg-white rounded shadow-sm">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <About />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;