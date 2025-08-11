import React from 'react';
import './Seccion6.css';

const Seccion6 = () => {
  return (
    <section id="seccion6" className="seccion6-container">
      <div className="seccion6-content">
        <h2 className="seccion6-title">Precio de los paquetes </h2>
        <h4 className="seccion6-subtitle2">Viaje Redondo</h4>
        <div className="seccion6-stats">
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$8,663</div>
            <div className="seccion6-stat-label">BOLIVIA</div>
          </div>
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$19,335</div>
            <div className="seccion6-stat-label">JAPÓN</div>
          </div>
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$17,770</div>
            <div className="seccion6-stat-label">PARIS</div>
          </div>
          <div className="seccion6-stat-card">
            <div className="seccion6-stat-number">$19,566</div>
            <div className="seccion6-stat-label">ITALIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seccion6;

