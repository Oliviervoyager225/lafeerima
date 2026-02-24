import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const navItems = [
  {
    label: 'Le centre spécialisé',
    type: 'dropdown',
    items: [
      { label: 'Historique', to: '/historique' },
      { label: 'Les professionnels', to: '/professionnels' },
      { label: 'Nos valeurs', to: '/nos-valeurs' },
      { label: 'Notre engagement qualité', to: '/engagement-qualite' },
      { label: 'RSE', to: '/rse' },
      { label: 'Actualités', to: '/actualites' },
      { label: 'Partenaires', to: '/partenaires' },
    ]
  },
  {
    label: "L'offre de soins",
    type: 'dropdown',
    items: [
      { label: 'Les consultations externes', to: '#' },
      { label: "L'hôpital de jour", to: '#' },
      { label: "Le service d'accueil d'urgence", to: '#' },
      { label: 'Tarifications', to: '#' },
    ]
  },
  {
    label: 'Vos droits',
    type: 'dropdown',
    items: [
      { label: 'Chartes et règlement intérieur', to: '#' },
      { label: 'Chartes Usager', to: '#' },
      { label: 'Personne de confiance', to: '#' },
      { label: 'Sécurité des données personnelles', to: '#' },
      { label: 'Système de vidéosurveillance', to: '#' },
      { label: 'Accès à votre dossier médical', to: '#' },
      { label: 'Plaintes et réclamations', to: '#' },
      { label: 'Satisfaction', to: '#' },
    ]
  },
  { label: 'FAQ', type: 'link', to: '#' },
  { label: 'Espace Ressources', type: 'link', to: '#' },
  { label: 'Pôle Recherche & Innovation', type: 'link', to: '#' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleDropdownBlur = (event) => {
    // Si le nouveau focus est en dehors du dropdown actuel, on ferme
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  const closeNav = () => {
    setNavOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand" onClick={closeNav}>
          <img src="/assets/feerima/news-2.png" alt="FeeRima" className="brand-logo" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-expanded={navOpen}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <nav id="primary-nav" className={`nav-links ${navOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => {
            if (item.type === 'dropdown') {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={index}
                  className="dropdown"
                  onBlur={handleDropdownBlur}
                >
                  <button
                    type="button"
                    className={`nav-link ${isOpen ? 'active' : ''}`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>
                  <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.to}
                        className="dropdown-item"
                        onClick={closeNav}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={item.to}
                  className="nav-link"
                  onClick={closeNav}
                >
                  {item.label}
                </Link>
              );
            }
          })}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn outline">Se connecter</button>
          <Link to="/preadmission" className="btn primary small" onClick={closeNav}>S'inscrire</Link>
        </div>
      </div>
    </header>
  );
}
