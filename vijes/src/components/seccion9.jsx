import React, { useState } from 'react';
import './Seccion9.css';

const testimonios = [
  {
    nombre: 'Ana Martinez',
    pais: 'México 🇲🇽',
    imagen: 'https://eaqxr36k8gu.exactdn.com/wp-content/uploads/2022/08/que-ver-hacer-bolivia-salar-uyuni.jpg?lossy=0&ssl=1',
    texto: 'Bolivia me sorprendió por su autenticidad. Visitar el Salar de Uyuni fue como caminar sobre las nubes, ¡una experiencia mágica! La cultura andina, la calidez de la gente y la comida tradicional como la salteña hicieron de este viaje algo inolvidable. Es un destino que muchos subestiman, pero que tiene una belleza natural impresionante.'
  },
  {
    nombre: 'Luis Hernández',
    pais: 'Colombia 🇨🇴',
    imagen: 'https://static.vecteezy.com/system/resources/previews/046/769/819/non_2x/man-traveling-in-traditional-japanese-city-kyoto-in-momiji-season-photo.jpeg',
    texto: 'Viajar a Japón fue como entrar en otro mundo. Me fascinó la combinación entre lo moderno y lo tradicional. Caminar por Kioto entre templos antiguos y luego ver la tecnología de Tokio fue increíble. La puntualidad, la limpieza y el respeto por la cultura te hacen sentir en paz. ¡Y el ramen, simplemente delicioso!'
  },
  {
    nombre: 'Camila Ríos',
    pais: ' Chile 🇨🇱',
    imagen: 'https://plus.unsplash.com/premium_photo-1663036583472-84bee4a90090?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    texto: 'Siempre soñé con ver la Torre Eiffel y cuando por fin lo hice, se me salieron las lágrimas. París es tan romántico como lo pintan. Los museos, las calles, los cafés... todo tiene un encanto único. Me enamoré del arte en el Louvre y del ambiente bohemio de Montmartre. Sin duda, una ciudad que hay que vivir al menos una vez.'
  },
  {
    nombre: ' Javier Soto',
    pais: 'Perú 🇵🇪',
    imagen: 'https://static.vecteezy.com/system/resources/previews/032/985/943/non_2x/rear-view-of-young-man-looking-at-colosseum-in-rome-italy-male-tourist-standing-in-front-of-a-sandy-beach-and-watching-the-sea-rear-view-full-body-ai-generated-free-photo.jpg',
    texto: 'Italia es historia viva. Desde Roma con su Coliseo hasta los canales de Venecia, todo parece sacado de una película. Amé la comida: la pasta, la pizza, el gelato… ¡es como si cada bocado fuera una obra de arte! Pero más allá de eso, la pasión de los italianos y la belleza de sus ciudades me dejaron con ganas de volver.'
  }
];

const getVisibleTestimonials = (current, perPage) => {
  const total = testimonios.length;
  let start = current * perPage;
  let end = start + perPage;
  if (end > total) {
    start = Math.max(0, total - perPage);
    end = total;
  }
  return testimonios.slice(start, end);
};

const Seccion9 = () => {
  const [current, setCurrent] = useState(0);
  const perPage = 1;

  const totalSlides = Math.ceil(testimonios.length / perPage);

  const goTo = (idx) => setCurrent(idx);

  const visible = getVisibleTestimonials(current, perPage);

  return (
    <section id="seccion9" className="testimonials-section">
      <h2 className="testimonials-title">TESTIMONIOS</h2>
      <h5 className='testimonials-title2'>Escucha lo que dicen nuestros increibles clientes </h5>
      
      <div className="testimonials-carousel-wrapper" style={{position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button
          className="carousel-arrow left"
          onClick={() => goTo((current - 1 + totalSlides) % totalSlides)}
          aria-label="Anterior"
          style={{position: 'absolute', left: 'calc(50% - 410px)', top: '50%', transform: 'translateY(-50%)'}}
        >
          <span className="arrow-icon">{/* SVG flecha izquierda */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M19.5 24L12.5 16L19.5 8" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </button>
        <div className="testimonials-carousel">
          {visible.map((t, idx) => (
            <div className="testimonial-card" key={t.nombre + idx}>
              <div className="testimonial-content">
                <div className="testimonial-text">«{t.texto.split('.')[0] + (t.texto.includes('.') ? '.' : '')}»</div>
                <div className="testimonial-description">{t.texto.slice(t.texto.indexOf('.') + 1).trim()}</div>
                <div style={{marginTop: 'auto'}}>
                  <div className="testimonial-name">{t.nombre}</div>
                  {t.pais && <div className="testimonial-country">{t.pais}</div>}
                </div>
              </div>
              <img className="testimonial-img" src={t.imagen} alt={t.nombre} />
            </div>
          ))}
        </div>
        <button
          className="carousel-arrow right"
          onClick={() => goTo((current + 1) % totalSlides)}
          aria-label="Siguiente"
          style={{position: 'absolute', right: 'calc(50% - 410px)', top: '50%', transform: 'translateY(-50%)'}}
        >
          <span className="arrow-icon">{/* SVG flecha derecha */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M12.5 8L19.5 16L12.5 24" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </button>
      </div>
      <div className="testimonials-dots">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`dot ${current === idx ? 'active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Seccion9; 