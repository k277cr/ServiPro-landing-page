import React from 'react';
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook
} from 'react-icons/fa';
import { companyInfo } from '../data/company';

function Contact() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    companyInfo.whatsappMessage
  )}`;

  return (
    <section className="section section--soft" id="contacto">
      <div className="container contact__grid">
        <div>
          
          <p className="section__eyebrow">Contáctanos</p>
          
          
          


          <div className="contact-list">
            <a href={`mailto:${companyInfo.email}`} className="contact-item">
              <FaEnvelope />
              <div>
                <strong>Correo</strong>
                <span>{companyInfo.email}</span>
              </div>
            </a>

            <a href={`tel:${companyInfo.phone}`} className="contact-item">
              <FaPhoneAlt />
              <div>
                <strong>Teléfono</strong>
                <span>{companyInfo.phone}</span>
              </div>
            </a>

            <a href={companyInfo.websiteUrl} target="_blank" rel="noreferrer" className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <strong>Web</strong>
                <span>{companyInfo.web}</span>
              </div>
            </a>
          </div>
        </div>

        <aside className="contact-card">
          <h3>Accesos directos</h3>

          <div className="contact-card__buttons">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn--full contact-btn contact-btn--whatsapp"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--full contact-btn contact-btn--instagram"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href={companyInfo.messengerUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--full contact-btn contact-btn--messenger"
            >
              <FaFacebookMessenger />
              Messenger
            </a>

            <a
              href={companyInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--full contact-btn contact-btn--facebook"
            >
              <FaFacebook />
              Facebook
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
