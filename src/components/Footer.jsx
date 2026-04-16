import React from 'react';
import { companyInfo } from '../data/company';
import { legalLinks } from '../data/legal';

function Footer() {
  const basePath = typeof window !== 'undefined' ? window.location.pathname || '/' : '/';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div>
            <h3>{companyInfo.name}</h3>
            <p>{companyInfo.locationLabel}</p>
          </div>

          <div className="footer__nav-group">
            <div className="footer__links">
              <a href="#inicio">Inicio</a>
              <a href="#videos">Videos</a>
              <a href="#servicios">Servicios</a>
              <a href="#contacto">Contacto</a>
              <a href={companyInfo.paginaPlantillas}>Plantillas de sitios web</a>
              <a
                href={companyInfo.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="footer__website-link"
              >
                Visita nuestra página web ServiPro
              </a>
            </div>

            <div className="footer__legal">
              <span className="footer__legal-label">Información legal</span>

              <div className="footer__legal-links">
                {legalLinks.map((link) => (
                  <a key={link.key} href={`${basePath}?legal=${link.key}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>


          <div className="footer__love">
            <span>
              Para Costa Rica y por Costa Rica
              <span className="footer__love-heart">♡</span>
            </span>
          </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
