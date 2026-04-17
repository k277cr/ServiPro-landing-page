import React from 'react';
import { companyInfo } from '../data/company';

function InstitutionalBar() {
  const topBarLead = companyInfo.topBarInstitutionalText
    .replace(companyInfo.operatorCompany, '')
    .trim();

  return (
    <div className="institutional-bar" aria-label="Información institucional de la empresa operadora">
      <div className="container">
        <p className="institutional-bar__content">
          {topBarLead} <strong>{companyInfo.operatorCompany}</strong>
        </p>
      </div>
    </div>
  );
}

export default InstitutionalBar;
