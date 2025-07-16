import React from 'react';
import './Seccion7.css';
import { useContactForm } from '../hooks/useContactForm.js';
import Notification from './Notification.jsx';

const Seccion7 = () => {
  const {
    formData,
    isSubmitting,
    notification,
    handleInputChange,
    handleSubmit,
    hideNotification
  } = useContactForm();

  return (
    <section id="seccion7">
      <h2 className="contact-title">CONTACT US</h2>
      <div className="contact-container">
        <div className="contact-card-empty">Aqui va el mapa</div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input 
              type="text" 
              placeholder="Tu nombre..." 
              className="contact-input"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
            <input 
              type="email" 
              placeholder="Tu email..." 
              className="contact-input"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          
          <input 
            type="text" 
            placeholder="¿A qué lugar deseas viajar?" 
            className="contact-input"
            value={formData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
            required
          />
          
          <textarea 
            placeholder="Tu mensaje..." 
            className="contact-textarea"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            required
          ></textarea>
          
          <button 
            type="submit" 
            className="contact-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>

      {/* Notificación elegante */}
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.show}
        onClose={hideNotification}
      />
    </section>
  );
};

export default Seccion7;
