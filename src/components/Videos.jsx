import React from 'react';
import { companyInfo } from '../data/company';

function Videos() {
  return (
    <section className="section section--soft" id="videos">
      <div className="container">
        <div className="section__header section__header--center">
          <p className="section__eyebrow">Cómo funciona</p>
          <h2 className="section__title">Mira cómo funciona nuestra plataforma</h2>
          <p className="section__text">
            Conoce de forma visual cómo funciona la otra página web y cómo puede ayudar a tu negocio.
          </p>
        </div>

        <div className="videos-grid">
          {companyInfo.videos.map((video) => (
            <article className="video-card" key={video.title}>
              <div className="video-card__frame">
                {video.type === 'embed' ? (
                  <iframe
                    src={video.url}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video controls preload="metadata">
                    <source src={video.url} type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                )}
              </div>

              <div className="video-card__content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;