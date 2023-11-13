import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import Landing from './routes/landing/Landing';
import About from './routes/about/About';
import Work from './routes/work/Work';
import Contact from './routes/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/contact" element={<Contact />}/>
        
    </Routes>
  </BrowserRouter>
);

