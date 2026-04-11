import React from 'react';
import { companyInfo } from '../data/company';

function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className="section__header section__header--center">
          <p className="section__eyebrow">Galería</p>
          <h2 className="section__title">Imágenes que refuerzan la confianza en tu marca</h2>
          <p className="section__text">
            Puedes reemplazar estas imágenes por fotos reales de tu otra página, tu local, tus servicios o tu equipo.
          </p>
        </div>

        <div className="gallery-grid">
          {companyInfo.gallery.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-card__overlay">
                <span>{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
