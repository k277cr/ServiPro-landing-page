import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { companyInfo } from '../data/company';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
    companyInfo.whatsappMessage
  )}`;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href={companyInfo.websiteUrl} className="brand" onClick={closeMenu}>
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

        <a
          href={companyInfo.paginaPlantillas}
          target="_blank"
          rel="noreferrer"
          className="btn btn--light btn--sm navbar__desktop-button"
        >
          Plantillas de sitios web
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'nav-toggle--active' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="container mobile-menu__content">
          <a href="#videos" onClick={closeMenu}>
            Videos
          </a>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#galeria" onClick={closeMenu}>
            Galería
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>

          <a
            href={companyInfo.paginaPlantillas}
            target="_blank"
            rel="noreferrer"
            className="btn btn--light btn--sm mobile-menu__button"
            onClick={closeMenu}
          >
            Plantillas de sitios web
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;