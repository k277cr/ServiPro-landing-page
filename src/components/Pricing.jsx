import React from 'react';
import { FaCheckCircle, FaInfoCircle, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { companyInfo, pricingHighlights, pricingPlans } from '../data/company';

function Pricing() {
  const defaultMessage = companyInfo.whatsappMessage || 'Necesito información de la empresa';

  return (
    <section className="section" id="planes">
      <div className="container">
        <div className="section__header section__header--center pricing-section__header">
          <span className="pricing-chip">Precios</span>
          <h2 className="section__title">Simple y transparente</h2>
          <div className="pricing-banner">
            <FaInfoCircle />
            <span>{companyInfo.pricingBanner}</span>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => {
            const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
              plan.whatsappMessage || defaultMessage
            )}`;

            return (
              <article
                className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
                key={plan.name}
              >
                <div className="pricing-card__top">
                  <div>
                    <p className="pricing-card__eyebrow">{plan.name}</p>
                    <div className="pricing-card__price-row">
                      <h3>{plan.price}</h3>
                      <span>{plan.period}</span>
                    </div>
                    {plan.secondaryPrice ? (
                      <p className="pricing-card__secondary">{plan.secondaryPrice}</p>
                    ) : null}
                  </div>

                  {plan.popular ? <span className="pricing-card__badge">Más popular</span> : null}
                </div>

                <div className="pricing-card__divider" />

                <ul className="pricing-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <FaCheckCircle />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.note ? (
                  <div className="pricing-note">
                    <FaTimes />
                    <span>{plan.note}</span>
                  </div>
                ) : null}

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn btn--full ${plan.popular ? 'pricing-btn' : 'btn--outline pricing-btn--ghost'}`}
                >
                  <FaWhatsapp />
                  {plan.buttonLabel}
                </a>
              </article>
            );
          })}
        </div>

        <div className="pricing-highlights">
          {pricingHighlights.map((item) => (
            <div className="pricing-highlights__item" key={item}>
              <span className="pricing-highlights__icon">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
