import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Preadmission from './pages/Preadmission';
import Historique from './pages/Historique';
import Professionals from './pages/Professionals';
import Actualites from './pages/Actualites';
import NosValeurs from './pages/NosValeurs';
import Engagement from './pages/Engagement';
import RSE from './pages/RSE';
import Partenaires from './pages/Partenaires';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preadmission" element={<Preadmission />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/professionnels" element={<Professionals />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/engagement-qualite" element={<Engagement />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/actualites" element={<Actualites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
