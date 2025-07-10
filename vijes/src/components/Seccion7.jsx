import React from 'react';
import './Seccion7.css';

const Seccion7 = () => {
  return (
    <section id="seccion7">
      <h2 className="contact-title">CONTACT US</h2>
      <div className="contact-container">
        <div className="contact-card-empty">Aqui va el mapa</div>

        <form className="contact-form">
          <div className="contact-row">
            <input type="text" placeholder="Your name..." className="contact-input" />
            <input type="email" placeholder="Your email..." className="contact-input" />
          </div>
          <textarea placeholder="Your message..." className="contact-textarea"></textarea>
          <button type="submit" className="contact-btn">SEND MESSAGE</button>
        </form>
        
      </div>
    </section>
  );
};

export default Seccion7;
