import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { companyInfo } from '../data/company';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <span className="hero__institutional-eyebrow">{companyInfo.institutionalHeroLine}</span>
            <h2>{companyInfo.name}</h2>
            <p>{companyInfo.description}</p>

            <div className="hero__institutional-card">
              <span className="hero__institutional-label">Información institucional</span>
              <p>{companyInfo.institutionalStatement}</p>
            </div>

            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={companyInfo.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visita nuestra página web ServiPro
              </a>
            </div>

            <div className="hero__socials">
              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-icon social-icon--whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon social-icon--instagram"
              >
                <FaInstagram />
              </a>

              <a
                href={companyInfo.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon social-icon--facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="hero__card hero__card--gallery">
            <div className="hero__card-grid">
              {companyInfo.gallery.slice(0, 4).map((item) => (
                <div className="hero__card-item" key={item.title}>
                  <img src={item.image} alt={item.title} />
                </div>
              ))}
            </div>

            <div className="hero__card-overlay">
              <span>Tu empresa en internet</span>
              <strong>Más profesional, más visible, más confiable</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
