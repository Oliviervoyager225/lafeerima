import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const satisfactionItems = [
    "Qualité de l'accueil",
    'Clarté des informations reçues',
    'Disponibilité des équipes soignantes',
    'Qualité des soins',
    'Respect de votre intimité',
    'Propreté et confort des locaux',
];

export default function Satisfaction() {
    const [ratings, setRatings] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleRate = (item, value) => {
        setRatings((prev) => ({ ...prev, [item]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Satisfaction</h1>
                    <p>Donnez-nous votre avis pour améliorer votre expérience</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>VOTRE AVIS NOUS IMPORTE</h2>
                        <p>
                            La mesure de la satisfaction des patients et de leurs familles est un
                            axe central de notre démarche qualité. Les résultats des enquêtes de
                            satisfaction sont analysés par notre équipe et transmis à la Commission
                            des Usagers pour alimenter notre plan d'amélioration continue.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero2.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                {/* Formulaire de satisfaction */}
                <section style={{ padding: '3rem 2rem', maxWidth: '750px', margin: '0 auto' }}>
                    {submitted ? (
                        <div
                            style={{
                                background: '#f0fdf4',
                                border: '1px solid #7cb518',
                                borderRadius: '12px',
                                padding: '2rem',
                                textAlign: 'center',
                            }}
                        >
                            <h2 style={{ color: '#7cb518' }}>Merci pour votre retour !</h2>
                            <p>Votre avis a bien été pris en compte. Il contribue à l'amélioration de nos services.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <h2 style={{ marginBottom: '1.5rem', color: '#1a3a5c' }}>
                                ÉVALUEZ VOTRE EXPÉRIENCE
                            </h2>
                            {satisfactionItems.map((item) => (
                                <div
                                    key={item}
                                    style={{
                                        marginBottom: '1.25rem',
                                        background: '#f9f9f9',
                                        borderRadius: '8px',
                                        padding: '1rem 1.25rem',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                                    }}
                                >
                                    <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}>{item}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleRate(item, star)}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    fontSize: '1.75rem',
                                                    color: ratings[item] >= star ? '#7cb518' : '#d1d5db',
                                                    transition: 'color 0.2s',
                                                }}
                                                aria-label={`Note ${star} sur 5`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button
                                type="submit"
                                style={{
                                    marginTop: '1rem',
                                    background: '#7cb518',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0.85rem 2rem',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                }}
                            >
                                Envoyer mon avis
                            </button>
                        </form>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
