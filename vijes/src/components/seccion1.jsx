const Seccion1 = () => {
  return (
    <section id="seccion1">
      {/* Cargar CSS desde public */}
      <link rel="stylesheet" href="/seccion1.css" />

      {/* Video desde un enlace de internet */}
      <video autoPlay muted loop playsInline>
        <source src="https://cdn.pixabay.com/video/2024/03/12/203974-923133846_large.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Capa oscura encima del video */}
      <div className="overlay"></div>

      {/* Contenido centrado */}
      <div className="content">
        <h1>Explora el mundo con nosotros</h1>
        <p>Viajes inolvidables, aventuras únicas y recuerdos para toda la vida.</p>
        <a href="#seccion7" className="boton">Ver paquetes</a>
      </div>
    </section>
  );
};

export default Seccion1;
