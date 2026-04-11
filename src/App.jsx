import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
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