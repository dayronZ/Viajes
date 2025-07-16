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
  const {
    formData,
    isSubmitting,
    notification,
    handleInputChange,
    handleSubmit: handleSubmitFromHook,
    hideNotification,
    resetForm,
  } = useContactForm();

  const [location, setLocation] = useState([19.4326, -99.1332]); 
  const [savedData, setSavedData] = useState([]);

  const countries = [
    { name: 'México', coords: [19.4326, -99.1332], flag: ' ' },
    { name: 'España', coords: [40.4168, -3.7038], flag: '' },
    { name: 'Francia', coords: [48.8566, 2.3522], flag: ' ' },
    { name: 'Italia', coords: [41.9028, 12.4964], flag: '  ' },
    { name: 'Japón', coords: [35.6762, 139.6503], flag: '  ' },
    { name: 'Estados Unidos', coords: [40.7128, -74.0060], flag: '  ' },
    { name: 'Canadá', coords: [45.5017, -73.5673], flag: ' ' },
    { name: 'Brasil', coords: [-23.5505, -46.6333], flag: ' ' },
    { name: 'Argentina', coords: [-34.6118, -58.3960], flag: '  ' },
    { name: 'Chile', coords: [-33.4489, -70.6693], flag: ' ' },
    { name: 'Perú', coords: [-12.0464, -77.0428], flag: '  ' },
    { name: 'Colombia', coords: [4.7110, -74.0721], flag: '  ' }
  ];

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(country => country.name === e.target.value);
    if (selectedCountry) {
      setLocation(selectedCountry.coords);
      handleInputChange('destination', selectedCountry.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    setSavedData(prev => [...prev, formData]);

   
    await handleSubmitFromHook(e);

    
    resetForm?.();
  };

  return (
    <section id="seccion7">
      <h2 className="contact-title">CONTACTANOS</h2>
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

          <select 
            className="contact-input country-select"
            value={formData.destination}
            onChange={handleCountryChange}
            required
          >
            <option value="">Selecciona un destino...</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>

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
