import React from 'react';
import './Seccion3.css';

const Seccion3 = () => {
  return (
    <section id='seccion3' className="oferta-section">
      <div className="oferta-content">
        <div className="oferta-left">
          <h2>Nuevas ofertas han llegado,<br />¡Aprovéchalas ahora mismo!</h2>
          <p>
            Descubre productos seleccionados con precios especiales por tiempo limitado. 
            Disfruta de sabores únicos, ingredientes frescos y opciones para todos los gustos.
          </p>
          <p>
            Perfecto para compartir en familia o sorprender a alguien especial. 
            Ordena ahora y disfruta de lo mejor en la comodidad de tu hogar.
          </p>
          <div className="oferta-buttons">
            <button className="btn-discover">DESCUBRIR</button>
            <button className="btn-purchase">COMPRAR AHORA</button>
          </div>
        </div>

        <div className="oferta-images">
          <img src="/src/assets/italia2.jpg" alt="Comida 1" className="img img1" />
          <img src="/src/assets/japon2.jpg" alt="Comida 2" className="img img2" />
          <img src="/src/assets/mexico.jpg" alt="Comida 3" className="img img3" />
        </div>
      </div>
    </section>
  );
};

export default Seccion3;
