import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Characters from './pages/Characters/Characters';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Contact />
    <Characters />
  </React.StrictMode>
);

