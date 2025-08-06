import React, { useState } from 'react';
import './Seccion8.css';
import Footer from './Footer.jsx';

const faqs = [
  {
    question: '¿Cuáles son los destinos más populares que ofrecen?',
    answer: 'Ofrecemos destinos populares como París, Italia, Japón, Bolivia y muchos más, adaptados a tus preferencias de viaje.'
  },
  {
    question: '¿Cómo puedo reservar un viaje?',
    answer: 'Puedes reservar un viaje a través de nuestro formulario de contacto, por teléfono o visitando nuestras oficinas.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos pagos con tarjeta de crédito, débito, transferencias bancarias y pagos en efectivo en nuestras oficinas.'
  },
  {
    question: '¿Ofrecen paquetes personalizados?',
    answer: 'Sí, diseñamos paquetes de viaje personalizados según tus necesidades y preferencias.'
  },
  {
    question: '¿Qué documentos necesito para viajar al extranjero?',
    answer: 'Generalmente necesitas pasaporte vigente y, dependiendo del destino, una visa. Te asesoramos en todo el proceso.'
  },
  {
    question: '¿Puedo cancelar o modificar mi reserva?',
    answer: 'Sí, puedes cancelar o modificar tu reserva según nuestras políticas. Contáctanos para más detalles.'
  },
  {
    question: '¿Tienen promociones o descuentos especiales?',
    answer: 'Frecuentemente lanzamos promociones y descuentos exclusivos. ¡Síguenos en redes sociales para no perderte ninguna oferta!'
  },
  {
    question: '¿Qué incluye el precio del paquete de viaje?',
    answer: 'Nuestros paquetes incluyen transporte, alojamiento y actividades principales. Consulta cada paquete para detalles específicos.'
  }
];

const Seccion8 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const rows = [];
  for (let i = 0; i < faqs.length; i += 2) {
    rows.push([faqs[i], faqs[i + 1]]);
  }

  return (
    <section id="seccion8">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-bg">
        <div className="faq-table">
          {rows.map((row, rowIdx) => (
            <div className="faq-row" key={rowIdx}>
              {row.map((faq, colIdx) => {
                const idx = rowIdx * 2 + colIdx;
                if (!faq) return <div className="faq-cell" key={colIdx}></div>;
                return (
                  <div className="faq-cell" key={colIdx}>
                    <button className="faq-question-row" onClick={() => toggleAccordion(idx)}>
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-icon-row">{openIndex === idx ? '-' : '+'}</span>
                    </button>
                    <div className="faq-answer-row" style={{ maxHeight: openIndex === idx ? '200px' : '0px' }}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Seccion8;