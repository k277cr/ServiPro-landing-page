import React, { useEffect, useMemo, useState } from 'react';
import { companyInfo } from '../data/company';
import { legalDocuments, legalLinks } from '../data/legal';

function getBasePath() {
  if (typeof window === 'undefined') {
    return '/';
  }

  return window.location.pathname || '/';
}

function getSectionLabel(title) {
  return title.replace(/^\d+\.\s*/, '');
}

function LegalPage({ documentKey }) {
  const legalDocument = legalDocuments[documentKey];
  const initialOpenSection = useMemo(() => {
    if (!legalDocument || typeof window === 'undefined') {
      return null;
    }

    const currentHash = window.location.hash.replace('#', '');
    return legalDocument.sections.some((section) => section.id === currentHash) ? currentHash : null;
  }, [legalDocument]);
  const [openSectionId, setOpenSectionId] = useState(initialOpenSection);
  const basePath = getBasePath();

  useEffect(() => {
    if (!legalDocument) {
      return;
    }

    setOpenSectionId(initialOpenSection);
  }, [initialOpenSection, legalDocument]);

  if (!legalDocument) {
    return null;
  }

  const handleSectionToggle = (sectionId) => {
    setOpenSectionId((currentSectionId) => (currentSectionId === sectionId ? null : sectionId));
  };

  return (
    <main className="legal-page">
      <div className="container legal-page__shell">
        <header className="legal-page__hero">
          <a href={`${basePath}#inicio`} className="legal-page__back-link">
            Volver al inicio
          </a>

          <p className="legal-page__eyebrow">Documentación legal de {companyInfo.name}</p>
          <h1>{legalDocument.title}</h1>
          <p className="legal-page__intro">{legalDocument.description}</p>

          <div className="legal-page__hero-groups">
            <div className="legal-page__hero-group legal-page__hero-group--meta">
              <p className="legal-page__group-label">Información general</p>

              <div className="legal-page__meta">
                <span className="legal-page__meta-item">Última actualización: {legalDocument.lastUpdated}</span>
                <span className="legal-page__meta-item">{companyInfo.name} · {companyInfo.locationLabel}</span>
                <span className="legal-page__meta-item">Sitio informativo y ecosistema digital</span>
              </div>
            </div>

            <div className="legal-page__hero-group legal-page__hero-group--highlights">
              <p className="legal-page__group-label">Temas principales</p>

              <div className="legal-page__highlights">
                {legalDocument.highlights.map((highlight) => (
                  <span key={highlight} className="legal-page__highlight">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="legal-page__documents-nav">
          <p className="legal-page__group-label legal-page__group-label--nav">Documentos legales</p>

          <nav className="legal-page__tabs" aria-label="Documentos legales">
            {legalLinks.map((link) => (
              <a
                key={link.key}
                href={`${basePath}?legal=${link.key}`}
                className={`legal-page__tab ${link.key === documentKey ? 'legal-page__tab--active' : ''}`}
                aria-current={link.key === documentKey ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="legal-page__layout">
          <aside className="legal-page__sidebar">
            <div className="legal-page__card legal-page__card--sticky">
              <p className="legal-page__card-label">Contenido</p>
              <p className="legal-page__card-helper">Explora cada sección de forma rápida y clara.</p>

              <div className="legal-page__toc legal-page__toc--desktop">
                {legalDocument.sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="legal-page__toc-link"
                    aria-label={section.title}
                  >
                    <span className="legal-page__toc-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="legal-page__toc-title">{getSectionLabel(section.title)}</span>
                  </a>
                ))}
              </div>

              <div className="legal-page__accordion" aria-label="Contenido desplegable">
                {legalDocument.sections.map((section, index) => {
                  const isOpen = openSectionId === section.id;

                  return (
                    <div
                      key={section.id}
                      className={`legal-page__accordion-item ${isOpen ? 'legal-page__accordion-item--open' : ''}`}
                    >
                      <button
                        type="button"
                        className="legal-page__accordion-trigger"
                        aria-expanded={isOpen}
                        aria-controls={`legal-panel-${section.id}`}
                        onClick={() => handleSectionToggle(section.id)}
                      >
                        <span className="legal-page__toc-number">{String(index + 1).padStart(2, '0')}</span>
                        <span className="legal-page__accordion-text">{getSectionLabel(section.title)}</span>
                        <span className="legal-page__accordion-icon" aria-hidden="true">
                          <svg viewBox="0 0 20 20" fill="none">
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div
                        id={`legal-panel-${section.id}`}
                        className="legal-page__accordion-panel"
                        aria-hidden={!isOpen}
                      >
                        <div className="legal-page__accordion-panel-inner">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}

                          {section.list ? (
                            <ul>
                              {section.list.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <article className="legal-page__article">
            <div className="legal-page__sections">
              {legalDocument.sections.map((section) => (
                <section key={section.id} id={section.id} className="legal-section">
                  <h2>{section.title}</h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="legal-section legal-section--contact">
              <h2>Contacto legal</h2>
              <p>
                Si necesitas realizar una consulta relacionada con estos documentos, privacidad, pagos o
                revisiones de cobros, puedes comunicarte con ServiPro a través de los canales oficiales.
              </p>

              <div className="legal-page__contact-links">
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                <a href={`${basePath}#contacto`}>Ir a la sección de contacto</a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}

export default LegalPage;
