import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '../data/company';

function Navbar() {
  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    companyInfo.whatsappMessage
  )}`;

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href={companyInfo.websiteUrl} className="brand">
          <span className="brand__logo">LP</span>
          <div>
            <h1>{companyInfo.name}</h1>
            <p>Conectamos servicios, impulsamos negocios.</p>
          </div>
        </a>

        <nav className="nav">
          <a href="#videos">Videos</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href={companyInfo.paginaPlantillas}target="_blank" rel="noreferrer" className="btn btn--light btn--sm">
          Plantillas de sitios web
        </a>
      </div>
    </header>
  );
}

export default Navbar;
