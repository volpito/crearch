import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Hello from './Components/Hero/Hero';
import HoverCards from './Components/HoverCards/HoverCards';
import CTA from './Components/CTA/CTA';
import Offer from './Components/Offer/Offer';
import ContactForm from './Components/ContactForm/ContactForm';
import BtnReturn from './Components/BtnReturn/BtnReturn';

function App() {
  return (
    <>
      <BtnReturn to="#hero" content="Haut de page"/>
      <Hello id="hero"/>
      <CTA id="cta"/>
      <HoverCards id="project"/>
      <Offer id="offer"/>
      <ContactForm id="contact"/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
