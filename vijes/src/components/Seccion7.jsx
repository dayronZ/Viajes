import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Seccion7.css';

const SetMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 13);
  return null;
};

const Seccion7 = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    destino: '',
    mensaje: '',
  });

  const [location, setLocation] = useState([19.4326, -99.1332]); // CDMX por defecto
  const [savedData, setSavedData] = useState([]); // Esto es tu "JSON" en memoria

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Buscar coordenadas del lugar que escribió el usuario
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${formData.destino}`);
      const data = await response.json();
      if (data.length > 0) {
        setLocation([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    } catch (error) {
      console.error(error);
    }

    // Guardar en JSON local (en memoria, simulando un archivo .json)
    setSavedData([...savedData, formData]);
    console.log('Datos guardados:', [...savedData, formData]);

    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      destino: '',
      mensaje: '',
    });
  };

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
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre..." className="contact-input" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Tu email..." className="contact-input" />
          </div>
          <input type="text" name="destino" value={formData.destino} onChange={handleChange} placeholder="¿A qué lugar deseas viajar?" className="contact-input" />
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Tu mensaje..." className="contact-textarea"></textarea>
          <button type="submit" className="contact-btn">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Seccion7;
