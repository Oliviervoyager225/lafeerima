import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const ressources = [
    {
        categorie: 'Guides et brochures',
        items: [
            { titre: 'Guide du patient – La-Fee-Rima', description: 'Tout ce que vous devez savoir avant votre première visite.' },
            { titre: 'Brochure "Comprendre la psychiatrie adolescente"', description: 'Un document accessible pour les familles.' },
            { titre: "Livret d'accueil", description: "Présentation de l'établissement et de son fonctionnement." },
        ],
    },
    {
        categorie: 'Liens utiles',
        items: [
            { titre: 'Santé Mentale France', description: 'Association nationale de sensibilisation à la santé mentale.', lien: '#' },
            { titre: 'Psycom', description: 'Ressources sur la santé mentale pour le grand public.', lien: '#' },
            { titre: 'HAS – Haute Autorité de Santé', description: 'Recommandations et bonnes pratiques en psychiatrie.', lien: '#' },
        ],
    },
];

export default function EspaceRessources() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero5.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Espace Ressources</h1>
                    <p>Documents, guides et liens utiles pour vous accompagner</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <div className="hist-content" style={{ maxWidth: '900px', width: '100%' }}>
                        <h2 style={{ marginBottom: '2rem' }}>NOS RESSOURCES EN LIGNE</h2>
                        {ressources.map((cat, ci) => (
                            <div key={ci} style={{ marginBottom: '2.5rem' }}>
                                <h3
                                    style={{
                                        color: '#7cb518',
                                        borderBottom: '2px solid #7cb518',
                                        paddingBottom: '0.5rem',
                                        marginBottom: '1.25rem',
                                        fontSize: '1.1rem',
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {cat.categorie}
                                </h3>
                                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                                    {cat.items.map((item, ii) => (
                                        <div
                                            key={ii}
                                            style={{
                                                background: '#fff',
                                                borderRadius: '10px',
                                                padding: '1.25rem',
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                                                borderLeft: '4px solid #7cb518',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.5rem',
                                            }}
                                        >
                                            <strong style={{ color: '#1a3a5c' }}>{item.titre}</strong>
                                            <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>{item.description}</p>
                                            {item.lien && (
                                                <a
                                                    href={item.lien}
                                                    style={{ color: '#7cb518', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
                                                >
                                                    Accéder →
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
