import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Hello from './Components/Hero/Hero';
import HoverCards from './Components/HoverCards/HoverCards';
import CTA from './Components/CTA/CTA';
import Offer from './Components/Offer/Offer';
import ContactForm from './Components/ContactForm/ContactForm';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <CTA />
    <HoverCards />
    <Offer />
    <ContactForm />
  </React.StrictMode>,
  document.getElementById('root')
);
