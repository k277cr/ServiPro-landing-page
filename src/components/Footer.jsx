import React from 'react';
import { companyInfo } from '../data/company';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div>
            <h3>{companyInfo.name}</h3>
            <p>{companyInfo.locationLabel}</p>
          </div>

          <div className="footer__links">
            <a href="#inicio">Inicio</a>
            <a href="#videos">Videos</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a
              href={companyInfo.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="footer__website-link"
            >
              Visita nuestra página web ServiPro
            </a>
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