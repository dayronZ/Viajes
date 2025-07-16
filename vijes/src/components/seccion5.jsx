import BlogCard from './blogcard';

import franceImg from "../assets/fr01.jpg";
import italyImg from "../assets/it01.jpeg";
import germanyImg from "../assets/ge01.jpg";

const Seccion5 = () => {
  return (
    <section id="seccion5" className="blog-section">
      <h2 className="">VISITA NUESTROS BLOGS</h2>
      <div className="blog-grid-layout">
        <div className="left-large-card">
          <BlogCard
            image={franceImg}
            title="France"
            description="Explora París, la Riviera Francesa y viñedos históricos. Ideal para primavera y otoño."
            author="Viajes Europa"
            date="Mejor en: Abril - Junio"
            category="Europa"
          />
        </div>
        <div className="right-small-cards">
          <BlogCard
            image={italyImg}
            title="Italy"
            description="Desde Roma hasta Venecia: arte, gastronomía y costas mediterráneas inolvidables."
            author="Guía Mediterránea"
            date="Mejor en: Mayo - Septiembre"
            category="Europa"
          />
          <BlogCard
            image={germanyImg}
            title="Germany"
            description="Castillos de Baviera, Oktoberfest y ciudades modernas como Berlín y Múnich."
            author="Tours Alemania"
            date="Mejor en: Septiembre - Octubre"
            category="Europa"
          />
        </div>
      </div>
    </section>
  );
};

export default Seccion5;
