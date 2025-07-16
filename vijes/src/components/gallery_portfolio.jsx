import React, { useEffect, useState } from 'react'
import Img_portfolio from './img_portfolio'

const Gallery_portfolio = ({pais}) => {
  const [imagenes, setimagenes] = useState([]);

  useEffect(() => {
    const nuevasImagenes = [];
    for (let i = 1; i<=8; i++){

      let nombrePais = pais.toLowerCase();

      
      let prefix = "";
      if (nombrePais === "france") {
        prefix = "img_fr" + i;
      } else if (nombrePais === "england") {
        prefix = "img_eng0" + i;
      } else if (nombrePais === "germany") {
        prefix = "img_ger0" + i;
      } else if (nombrePais === "italy") {
        prefix = "img_it0" + i;
      } else if (nombrePais === "switzerland") {
        prefix = "img_swi0" + i;
      }


      nuevasImagenes.push(`/img/${nombrePais}/${prefix}.jpg`);


    }
    setimagenes(nuevasImagenes);
  }, [pais]);
  return (
    <div className='portfolio-grid'>
      {imagenes.map((src, idx) => (
        <Img_portfolio key={idx} source = {src} />
      ))}
    </div>
  )
}

export default Gallery_portfolio
