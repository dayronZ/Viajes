import { useState } from 'react';
import './Seccion2.css';

const countryDetails = {
  Bolivia: {
    title: 'Bolivia',
    image: '/src/assets/bolivia.jpeg',
    description: 'Bolivia es un país con una impresionante diversidad geográfica y cultural. Entre sus principales atractivos destacan el Salar de Uyuni, el lago Titicaca y la cordillera Real. Su cultura es rica en tradiciones indígenas, con danzas, música, gastronomía típica y festividades como el Carnaval de Oruro. Es ideal para los amantes de la aventura, con opciones como trekking, visitas arqueológicas y tours en la selva amazónica. Aunque la infraestructura turística ha mejorado, en algunas zonas sigue siendo limitada, y el transporte se basa principalmente en autobuses, taxis y tours organizados.'
  },
  Japón: {
    title: 'Japón',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Japón es un país con una rica cultura, historia milenaria y paisajes impresionantes. Destacan sus tradiciones como la ceremonia del té, su arquitectura con templos y santuarios, y una gastronomía reconocida mundialmente. Entre sus paisajes naturales figuran el Monte Fuji, jardines tradicionales e islas paradisíacas como Okinawa. Las ciudades como Tokio, Kioto y Osaka combinan modernidad con tradición. Japón también es líder en tecnología e innovación, con lugares como Akihabara. A lo largo del año, se celebran festivales importantes como el Hanami, el Obon y el Año Nuevo japonés.'
  },
  Paris: {
    title: 'París',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'París, la ciudad del amor, es famosa por la Torre Eiffel, el Louvre, la gastronomía y su ambiente romántico.'
  },
  Italia: {
    title: 'Italia',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    description: 'Italia es la cuna del arte y la historia europea. Destacan Roma, Venecia, Florencia y su exquisita cocina.'
  }
};

const Seccion2 = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCardClick = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  return (
    <section id="seccion2" className="travel-package-section">
      <h2 className="travel-package-title">PAQUETES DE VIAJES</h2>
      <div className="travel-package-cards">
        <div className="travel-package-card" onClick={() => handleCardClick('Bolivia')} style={{cursor:'pointer'}}>
          <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=R4PoW7Ee5iql&format=png&color=a3d28e" alt="chica-boliviana"/>
          </span>
          <h3>Viaje a Bolivia</h3>
          <p className="justified">Explora Bolivia, un país lleno de paisajes impresionantes, culturas ancestrales y maravillas naturales que te dejarán sin aliento.</p>
        </div>

        <div className="travel-package-card" onClick={() => handleCardClick('Japón')} style={{cursor:'pointer'}}>
          <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=Blu79AjA7VgN&format=png&color=a3d28e" alt="japon-palitos"/>
          </span>
          <h3>Viaje a Japón</h3>
          <p className="justified">Descubre Japón, donde la tradición milenaria se encuentra con la innovación tecnológica en una experiencia única y fascinante.</p>
        </div>

        <div className="travel-package-card" onClick={() => handleCardClick('Paris')} style={{cursor:'pointer'}}>
          <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=9877&format=png&color=a3d28e" alt="eiffel-tower"/>
          </span>
          <h3>Viaje a Paris</h3>
          <p className="justified">Vive París, la ciudad del amor, la moda y la gastronomía, donde cada rincón cuenta una historia inolvidable.</p>
        </div>

        <div className="travel-package-card" onClick={() => handleCardClick('Italia')} style={{cursor:'pointer'}}>
          <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=AQOMUKsCvIso&format=png&color=a3d28e" alt="coliseo-ita"/>
          </span>
          <h3>Viaje a Italia</h3>
          <p className="justified">Sumérgete en Italia, cuna del arte, la historia y sabores que han conquistado al mundo entero</p>
        </div>
      </div>

      {selectedCountry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>{countryDetails[selectedCountry].title}</h2>
            <img 
              src={countryDetails[selectedCountry].image} 
              alt={countryDetails[selectedCountry].title} 
              style={{
                width: '100%',
                maxHeight: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '16px'
              }} 
            />
            <p>{countryDetails[selectedCountry].description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Seccion2;
