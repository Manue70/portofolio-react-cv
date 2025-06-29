import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import MentionsLegales from './components/MentionsLegales'; 


function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>

          <Route path="/" element={<Home />} />      
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        
        </Routes>

      </div>  

      <Footer />
    </>
  );
}

export default App;
