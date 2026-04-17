import React from 'react';
import Navbar from './components/Navbar';
import InstitutionalBar from './components/InstitutionalBar';
import Hero from './components/Hero';
import LegalInfo from './components/LegalInfo';
import Videos from './components/Videos';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import { legalDocuments } from './data/legal';

function getActiveLegalDocument() {
  if (typeof window === 'undefined') {
    return null;
  }

  const legalParam = new URLSearchParams(window.location.search).get('legal');
  return legalParam && legalDocuments[legalParam] ? legalParam : null;
}

function App() {
  const activeLegalDocument = getActiveLegalDocument();

  if (activeLegalDocument) {
    return <LegalPage documentKey={activeLegalDocument} />;
  }

  return (
    <>
      <Navbar />
      <InstitutionalBar />
      <Hero />
      <LegalInfo />
      <Videos />
      <Services />
      <Gallery />
      <Contact />
      <FloatingSocials />
      <Footer />
    </>
  );
}

export default App;
