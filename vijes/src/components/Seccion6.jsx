import React from 'react';
import './Seccion6.css';

const Seccion6 = () => {
  return (
    <section id="seccion6" className="seccion6-container">
      <div className="seccion6-content">
        <h2 className="seccion6-title">PRECIO DE LOS PAQUETES </h2>
        <div className="seccion6-stats">
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$2,349,260</div>
            <div className="seccion6-stat-label">BOLIVIA</div>
          </div>
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$2,147,378</div>
            <div className="seccion6-stat-label">JAPÓN</div>
          </div>
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$11,832,901</div>
            <div className="seccion6-stat-label">PARIS</div>
          </div>
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$2,160,990</div>
            <div className="seccion6-stat-label">ITALIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seccion6;
