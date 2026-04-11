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
          <h2 className="section__title">Tus clientes pueden encontrarte rápido</h2>
          <p className="section__text">
            Agrega aquí tu correo, tu número, tu ubicación y tus redes sociales para facilitar el contacto directo.
          </p>

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
          <p>Haz que el cliente te escriba con un solo clic desde la landing page.</p>

          <div className="contact-card__buttons">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary btn--full">
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline btn--full"
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href={companyInfo.messengerUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline btn--full"
            >
              <FaFacebookMessenger />
              Messenger
            </a>

            <a
              className="btn btn--outline btn--full"
              href={companyInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
              Facebook
            </a>
          </div>

          <div className="contact-card__note">
            <strong>Ubicación:</strong>
            <span>{companyInfo.locationLabel}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
