import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const dropdownItems = [
  { label: 'Historique', to: '/historique' },
  { label: 'Les professionnels', to: '#' },
  { label: 'Nos valeurs', to: '#' },
  { label: 'Notre engagement qualite', to: '#' },
  { label: 'RSE', to: '#' },
  { label: 'Actualites', to: '#' },
  { label: 'Partenaires', to: '#' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand">
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
          <div
            className="dropdown"
            onBlur={handleDropdownBlur}
          >
            <button
              type="button"
              className="nav-link"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Le centre specialise
              <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {dropdownItems.map((item) => (
                item.to && item.to !== '#' ? (
                  <Link key={item.label} to={item.to} className="dropdown-item">
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.label} className="dropdown-item">{item.label}</span>
                )
              ))}
            </div>
          </div>
          <a href="#" className="nav-link">L offre de soins <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg></a>
          <a href="#" className="nav-link">Vos droits <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg></a>
          <button
            className="nav-link"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => {
              if (location.pathname === '/') {
                const el = document.getElementById('actualites');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                navigate('/', { state: { scrollToActualites: true } });
              }
            }}
          >
            Actualités
          </button>
          <a href="#" className="nav-link">FAQ <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg></a>
          <a href="#" className="nav-link">Ressources <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg></a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn outline">Se connecter</button>
          <Link to="/preadmission" className="btn primary small">S inscrire</Link>
        </div>
      </div>
    </header>
  );
}
