import React from 'react';

import Landing from './landing';
import Acercade from './Acercade'
import Contactanos from './Contactanos'
import Planes from './Planes'
import Registro from './registro'
import Login from './login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/acercade" element={<Acercade />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactanos" element={<Contactanos />} />

        </Routes>
    </Router>
  );
}

export default App;