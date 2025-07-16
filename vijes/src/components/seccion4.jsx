import { useState } from "react";
import Gallery_portfolio from "./gallery_portfolio";
import Img_portfolio from "./img_portfolio";

const Seccion4 = () => {

  const [paisSeleccionado, setPaisSeleccionado] = useState("france");

  const paises = ["france", "england", "switzerland", "germany", "italy"];


  return (
  
    <section className="portfolio-section" id="seccion4">
      <h2 className="portfolio-title">Our trips</h2>
      <div class="portfolio-filters">
        {paises.map((pais) => (
            <span
              key={pais}
              className={`filter ${pais === paisSeleccionado ? "active" : ""}`}
              onClick={() => setPaisSeleccionado(pais)}
            >
              {pais.charAt(0).toUpperCase() + pais.slice(1)}
            </span>
          ))}
      </div>
      <Gallery_portfolio pais={paisSeleccionado}/>
    </section>
  );
};

export default Seccion4;
