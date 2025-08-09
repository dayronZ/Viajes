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
    image: '/src/assets/japon.jpg',
    description: 'Japón es un país con una rica cultura, historia milenaria y paisajes impresionantes. Destacan sus tradiciones como la ceremonia del té, su arquitectura con templos y santuarios, y una gastronomía reconocida mundialmente. Entre sus paisajes naturales figuran el Monte Fuji, jardines tradicionales e islas paradisíacas como Okinawa. Las ciudades como Tokio, Kioto y Osaka combinan modernidad con tradición. Japón también es líder en tecnología e innovación, con lugares como Akihabara. A lo largo del año, se celebran festivales importantes como el Hanami, el Obon y el Año Nuevo japonés.'
  },
  Paris: {
    title: 'París',
    image: '/src/assets/paris.jpeg',
    description: 'París, conocida como la Ciudad de la Luz, es un destino cultural y romántico por excelencia. Sus monumentos icónicos incluyen la Torre Eiffel, Notre-Dame y el Arco de Triunfo. Es un centro de arte con museos como el Louvre y el Museo de Orsay, y una destacada vida cultural en lugares como la Ópera Garnier. La gastronomía parisina es refinada, con cafés, bistrós y mercados tradicionales. Sus barrios, como Montmartre, Le Marais y Champs-Élysées, ofrecen experiencias únicas. Además, París celebra eventos todo el año, como la Fiesta de la Música, la Noche Blanca y la Navidad.'
  },
  Italia: {
    title: 'Italia',
    image: '/src/assets/italia.jpg',
    description: 'Italia es un país lleno de historia, arte y belleza natural. Entre sus principales atractivos están los restos de la Antigua Roma, el arte del Renacimiento y la arquitectura barroca. Su gastronomía es reconocida mundialmente por platos como la pizza, la pasta y sus excelentes vinos. Ofrece paisajes variados como la costa Amalfitana, los lagos del norte y los Alpes. Sus ciudades más destacadas son Roma, Florencia y Venecia, todas con un gran valor cultural. Además, Italia celebra festivales emblemáticos como el Carnaval de Venecia y la Fiesta de la República.'
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
      <h2 className="travel-package-title">Paquetes de Viajes</h2>
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
                maxHeight: '300px',
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
