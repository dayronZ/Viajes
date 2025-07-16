import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Seccion7.css';
import { useContactForm } from '../hooks/useContactForm.js';
import Notification from './Notification.jsx';

const SetMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 13);
  return null;
};

const Seccion7 = () => {
  const [location, setLocation] = useState([19.4326, -99.1332]); // CDMX por defecto

  const {
    formData,
    isSubmitting,
    notification,
    handleInputChange,
    handleSubmit,
    hideNotification
  } = useContactForm(setLocation); // Le pasamos setLocation al hook para que actualice el mapa

  return (
    <section id="seccion7">
      <h2 className="contact-title">CONTACT US</h2>
      <div className="contact-container">
        <div className="contact-card-map">
          <MapContainer center={location} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={location} icon={L.icon({
              iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })} />
            <SetMapView coords={location} />
          </MapContainer>
        </div>

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