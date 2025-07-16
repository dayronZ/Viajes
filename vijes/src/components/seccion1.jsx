const Seccion1 = () => {
  return (
    <section id="seccion1">
    
      <link rel="stylesheet" href="/seccion1.css" />

      
      <video autoPlay muted loop playsInline>
        <source src="https://videos.pexels.com/video-files/3121327/3121327-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      
      <div className="overlay"></div>

      
      <div className="content">
        <h1>Explora el mundo con nosotros</h1>
        <p>Viajes inolvidables, aventuras únicas y recuerdos para toda la vida.</p>
        <a href="#seccion7" className="boton">Ver paquetes</a>
      </div>
    </section>
  );
};

export default Seccion1;
