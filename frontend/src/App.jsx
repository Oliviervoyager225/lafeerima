import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Centre spécialisé
import Home from './pages/Home';
import Preadmission from './pages/Preadmission';
import Historique from './pages/Historique';
import Professionals from './pages/Professionals';
import Actualites from './pages/Actualites';
import NosValeurs from './pages/NosValeurs';
import Engagement from './pages/Engagement';
import RSE from './pages/RSE';
import Partenaires from './pages/Partenaires';

// Offre de soins
import ConsultationsExternes from './pages/ConsultationsExternes';
import HopitalDeJour from './pages/HopitalDeJour';
import ServiceAccueilUrgence from './pages/ServiceAccueilUrgence';
import Tarifications from './pages/Tarifications';

// Vos droits
import ChartesReglement from './pages/ChartesReglement';
import ChartesUsager from './pages/ChartesUsager';
import PersonneDeConfiance from './pages/PersonneDeConfiance';
import SecuriteDonnees from './pages/SecuriteDonnees';
import Videosurveillance from './pages/Videosurveillance';
import DossierMedical from './pages/DossierMedical';
import PlaintesReclamations from './pages/PlaintesReclamations';
import Satisfaction from './pages/Satisfaction';

// Navigation principale
import FAQ from './pages/FAQ';
import EspaceRessources from './pages/EspaceRessources';
import PoleRechercheInnovation from './pages/PoleRechercheInnovation';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />
          <Route path="/preadmission" element={<Preadmission />} />

          {/* Centre spécialisé */}
          <Route path="/historique" element={<Historique />} />
          <Route path="/professionnels" element={<Professionals />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/engagement-qualite" element={<Engagement />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/actualites" element={<Actualites />} />

          {/* Offre de soins */}
          <Route path="/consultations-externes" element={<ConsultationsExternes />} />
          <Route path="/hopital-de-jour" element={<HopitalDeJour />} />
          <Route path="/service-accueil-urgence" element={<ServiceAccueilUrgence />} />
          <Route path="/tarifications" element={<Tarifications />} />

          {/* Vos droits */}
          <Route path="/chartes-reglement" element={<ChartesReglement />} />
          <Route path="/chartes-usager" element={<ChartesUsager />} />
          <Route path="/personne-de-confiance" element={<PersonneDeConfiance />} />
          <Route path="/securite-donnees" element={<SecuriteDonnees />} />
          <Route path="/videosurveillance" element={<Videosurveillance />} />
          <Route path="/dossier-medical" element={<DossierMedical />} />
          <Route path="/plaintes-reclamations" element={<PlaintesReclamations />} />
          <Route path="/satisfaction" element={<Satisfaction />} />

          {/* Navigation principale */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/espace-ressources" element={<EspaceRessources />} />
          <Route path="/pole-recherche-innovation" element={<PoleRechercheInnovation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
