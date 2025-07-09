import './Seccion2.css';

const Seccion2 = () => {
  return (
    <section id="seccion2" className="travel-package-section">
      <h2 className="travel-package-title">PAQUETES DE VIAJES</h2>
      <div className="travel-package-cards">
        <div className="travel-package-card">
          <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=R4PoW7Ee5iql&format=png&color=a3d28e" alt="chica-boliviana"/>
          </span>
          <h3>Viaje a Bolivia</h3>
          <p className="justified">Explora Bolivia, un país lleno de paisajes impresionantes, culturas ancestrales y maravillas naturales que te dejarán sin aliento.</p>
        </div>

        <div className="travel-package-card">
                    <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=Blu79AjA7VgN&format=png&color=a3d28e" alt="japon-palitos"/>
          </span>
          <h3>Viaje a Japón</h3>
          <p className="justified">Descubre Japón, donde la tradición milenaria se encuentra con la innovación tecnológica en una experiencia única y fascinante.</p>
        </div>

        <div className="travel-package-card">
          <span className="travel-package-icon">
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=9877&format=png&color=a3d28e" alt="eiffel-tower"/>
          </span>
          <h3>Viaje a Paris</h3>
          <p className="justified">Vive París, la ciudad del amor, la moda y la gastronomía, donde cada rincón cuenta una historia inolvidable.</p>
        </div>

        <div className="travel-package-card">
          <span className="travel-package-icon">
          <img width="50" height="50" src="https://img.icons8.com/?size=100&id=AQOMUKsCvIso&format=png&color=a3d28e" alt="coliseo-ita"/>
          </span>
          <h3>Viaje a Italia</h3>
          <p className="justified">Sumérgete en Italia, cuna del arte, la historia y sabores que han conquistado al mundo entero</p>
        </div>
      </div>
    </section>
  );
};

export default Seccion2;
