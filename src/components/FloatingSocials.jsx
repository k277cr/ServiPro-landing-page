import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { companyInfo } from '../data/company';

function FloatingSocials() {
  return (
    <div className="floating-socials">
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
  );
}

export default FloatingSocials;