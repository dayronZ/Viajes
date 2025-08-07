import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";  // Importa useNavigate
import "leaflet/dist/leaflet.css";
import "./seccion10.css"; 

const aeropuertos = [
  { id: 1, name: "Estados Unidos (JFK)", lat: 40.6413, lng: -73.7781 },
  { id: 2, name: "Reino Unido (LHR)", lat: 51.4700, lng: -0.4543 },
  { id: 3, name: "Francia (CDG)", lat: 49.0097, lng: 2.5479 },
  { id: 4, name: "Alemania (FRA)", lat: 50.0379, lng: 8.5622 },
  { id: 5, name: "Japón (NRT)", lat: 35.7739, lng: 140.3929 },
  { id: 6, name: "Australia (SYD)", lat: -33.9399, lng: 151.1753 },
  { id: 7, name: "Canadá (YYZ)", lat: 43.6777, lng: -79.6248 },
  { id: 8, name: "Brasil (GRU)", lat: -23.4356, lng: -46.4731 },
  { id: 9, name: "México (MEX)", lat: 19.4361, lng: -99.0719 },
  { id: 10, name: "India (DEL)", lat: 28.5562, lng: 77.1 },
  { id: 11, name: "Emiratos Árabes Unidos (DXB)", lat: 25.2532, lng: 55.3657 },
  { id: 12, name: "España (MAD)", lat: 40.4983, lng: -3.5676 },
  { id: 13, name: "Italia (FCO)", lat: 41.8003, lng: 12.2389 },
  { id: 14, name: "Sudáfrica (JNB)", lat: -26.1337, lng: 28.242 },
  { id: 15, name: "China (PEK)", lat: 40.0801, lng: 116.5846 },
  { id: 16, name: "Tailandia (BKK)", lat: 13.69, lng: 100.7501 },
  { id: 17, name: "Países Bajos (AMS)", lat: 52.3105, lng: 4.7683 },
  { id: 18, name: "Turquía (IST)", lat: 40.9769, lng: 28.8146 },
  { id: 19, name: "Suiza (ZRH)", lat: 47.4581, lng: 8.5481 },
  { id: 20, name: "Argentina (EZE)", lat: -34.8222, lng: -58.5358 },
];

function generaVuelos(origen, destino, fechaIda, fechaVuelta, tipoViaje, pasajeros, maletas, clase) {
  if (!origen || !destino || origen.id === destino.id) return [];
  const opciones = [];
  for (let i = 0; i < 5; i++) {
    const base = Math.floor(Math.random() * 200) + 50;
    const factorClase = clase === "primera" ? 1.7 : 1;
    const factorMaletas = maletas * 25;
    const pasajerosCount = pasajeros;

    let priceIda = (base + i * 10) * factorClase + factorMaletas * pasajerosCount;
    priceIda = Math.round(priceIda);

    let priceVuelta = 0;
    if (tipoViaje === "ida_vuelta") {
      priceVuelta = (base + i * 8 + 15) * factorClase + factorMaletas * pasajerosCount;
      priceVuelta = Math.round(priceVuelta);
    }

    opciones.push({
      id: i,
      ida: `${fechaIda} ${8 + i}:00`,
      vuelta: tipoViaje === "ida_vuelta" ? `${fechaVuelta} ${14 + i}:00` : null,
      price: tipoViaje === "ida_vuelta" ? priceIda + priceVuelta : priceIda,
      direct: Math.random() > 0.5,
      clase,
      pasajeros: pasajerosCount,
      maletas,
      tipoViaje,
    });
  }
  return opciones;
}

export default function CotizadorConMapa() {
  const navigate = useNavigate(); // Hook para navegación

  const [origen, setOrigen] = useState(null);
  const [destino, setDestino] = useState(null);
  const [fechaIda, setFechaIda] = useState("");
  const [fechaVuelta, setFechaVuelta] = useState("");
  const [tipoViaje, setTipoViaje] = useState("ida_vuelta");
  const [pasajeros, setPasajeros] = useState(1);
  const [maletas, setMaletas] = useState(0);
  const [clase, setClase] = useState("comercial");
  const [mostrarDirectos, setMostrarDirectos] = useState(false);
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    if (tipoViaje === "ida") setFechaVuelta("");
  }, [tipoViaje]);

  useEffect(() => {
    if (
      origen &&
      destino &&
      origen.id !== destino.id &&
      fechaIda &&
      (tipoViaje === "ida" || (tipoViaje === "ida_vuelta" && fechaVuelta))
    ) {
      setVuelos(
        generaVuelos(
          origen,
          destino,
          fechaIda,
          fechaVuelta,
          tipoViaje,
          pasajeros,
          maletas,
          clase
        )
      );
    } else {
      setVuelos([]);
    }
  }, [origen, destino, fechaIda, fechaVuelta, tipoViaje, pasajeros, maletas, clase]);

  const vuelosFiltrados = mostrarDirectos ? vuelos.filter((v) => v.direct) : vuelos;

  // Función para regresar al home
  const handleRegresarHome = () => {
    navigate('/');
  };

  return (
    <div className="cotizador-container">
      <button
        onClick={handleRegresarHome}
        className="cotizador-button"
      >
        ← Regresar al inicio
      </button>

      <h2 className="cotizador-title">Cotiza tu vuelo ida y vuelta</h2>

      <div className="cotizador-form-flex">
        <div className="cotizador-form-group">
          <label>Tipo de viaje:</label>
          <select
            value={tipoViaje}
            onChange={(e) => setTipoViaje(e.target.value)}
          >
            <option value="ida_vuelta">Ida y Vuelta</option>
            <option value="ida">Solo Ida</option>
          </select>
        </div>

        <div className="cotizador-form-group">
          <label htmlFor="select-origen">Origen:</label>
          <select
            id="select-origen"
            value={origen?.id || ""}
            onChange={(e) =>
              setOrigen(aeropuertos.find((a) => a.id === +e.target.value) || null)
            }
          >
            <option value="">Selecciona origen</option>
            {aeropuertos.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div className="cotizador-form-group">
          <label htmlFor="select-destino">Destino:</label>
          <select
            id="select-destino"
            value={destino?.id || ""}
            onChange={(e) =>
              setDestino(aeropuertos.find((a) => a.id === +e.target.value) || null)
            }
          >
            <option value="">Selecciona destino</option>
            {aeropuertos.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div className="cotizador-form-group">
          <label htmlFor="fecha-ida">Fecha Ida:</label>
          <input
            type="date"
            id="fecha-ida"
            value={fechaIda}
            onChange={(e) => setFechaIda(e.target.value)}
          />
        </div>

        {tipoViaje === "ida_vuelta" && (
          <div className="cotizador-form-group">
            <label htmlFor="fecha-vuelta">Fecha Vuelta:</label>
            <input
              type="date"
              id="fecha-vuelta"
              value={fechaVuelta}
              onChange={(e) => setFechaVuelta(e.target.value)}
              min={fechaIda}
            />
          </div>
        )}

        <div className="cotizador-form-group">
          <label htmlFor="pasajeros">Pasajeros:</label>
          <input
            type="number"
            id="pasajeros"
            min={1}
            max={9}
            value={pasajeros}
            onChange={(e) => setPasajeros(Number(e.target.value))}
          />
        </div>

        <div className="cotizador-form-group">
          <label htmlFor="maletas">Maletas:</label>
          <input
            type="number"
            id="maletas"
            min={0}
            max={5}
            value={maletas}
            onChange={(e) => setMaletas(Number(e.target.value))}
          />
        </div>

        <div className="cotizador-form-group">
          <label htmlFor="clase">Clase:</label>
          <select
            id="clase"
            value={clase}
            onChange={(e) => setClase(e.target.value)}
          >
            <option value="comercial">Turista</option>
            <option value="primera">Primera Clase</option>
          </select>
        </div>
      </div>

      <label className="cotizador-checkbox-group">
        <input
          type="checkbox"
          checked={mostrarDirectos}
          onChange={(e) => setMostrarDirectos(e.target.checked)}
        />
        Mostrar solo vuelos directos
      </label>

      <div className="cotizador-map-wrapper" style={{ height: "400px", marginTop: "20px" }}>
        <MapContainer
          center={[19.4333, -99.1333]}
          zoom={3}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          dragging={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {origen && (
            <Marker position={[origen.lat, origen.lng]}>
              <Popup>Origen: {origen.name}</Popup>
            </Marker>
          )}
          {destino && (
            <Marker position={[destino.lat, destino.lng]}>
              <Popup>Destino: {destino.name}</Popup>
            </Marker>
          )}
          {origen && destino && (
            <Polyline positions={[[origen.lat, origen.lng], [destino.lat, destino.lng]]} />
          )}
        </MapContainer>
      </div>

      <div>
        <h3 style={{ color: "#0b3d91", marginBottom: "14px", fontWeight: "700" }}>
          Opciones disponibles:
        </h3>
        {!vuelosFiltrados.length && (
          <p className="cotizador-mensaje-info">Elige origen, destino, fechas y demás para ver opciones.</p>
        )}
        <div className="cotizador-vuelos-list">
          {vuelosFiltrados.map((v) => (
            <div key={v.id} className="cotizador-vuelo-card" tabIndex={0}>
              <strong>Vuelo {v.id + 1}</strong> — Ida: {v.ida}
              {v.tipoViaje === "ida_vuelta" && v.vuelta && `, Vuelta: ${v.vuelta}`} —{" "}
              {v.direct ? "Directo" : "1 escala"} — Pasajeros: {v.pasajeros} — Maletas: {v.maletas} —{" "}
              Clase: {v.clase === "primera" ? "Primera Clase" : "Turista"} — Precio:{" "}
              <span style={{ color: "#2a7ae2" }}>${v.price} USD</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
