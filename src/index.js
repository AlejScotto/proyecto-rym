import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Characters from './pages/Characters/Characters';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

