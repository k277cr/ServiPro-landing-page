import React from 'react';
import { companyInfo } from '../data/company';

function LegalInfo() {
  return (
    <section className="section section--soft legal-info" id="informacion-legal">
      <div className="container">
        <div className="section__header section__header--center">
          <p className="section__eyebrow">Información legal</p>
          <h2 className="section__title">Respaldo empresarial visible para ServiPro</h2>
          <p className="section__text">
            Información institucional y legal de la empresa operadora de la marca en Costa Rica.
          </p>
        </div>

        <div className="legal-info__panel">
          <dl className="legal-info__grid">
            <div className="legal-info__item legal-info__item--company">
              <dt>Razón social</dt>
              <dd>{companyInfo.operatorCompany}</dd>
            </div>

            <div className="legal-info__item">
              <dt>Cédula jurídica</dt>
              <dd>{companyInfo.legalIdentifier}</dd>
            </div>

            <div className="legal-info__item">
              <dt>Ubicación</dt>
              <dd>{companyInfo.address}</dd>
            </div>
          </dl>

          <p className="legal-info__statement">{companyInfo.institutionalStatement}</p>
        </div>
      </div>
    </section>
  );
}

export default LegalInfo;
