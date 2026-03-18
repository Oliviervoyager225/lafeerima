import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const axes = [
    {
        titre: 'Innovation thérapeutique',
        icone: '🔬',
        description:
            'Nous développons et évaluons de nouveaux protocoles de soins adaptés aux spécificités de la psychiatrie infanto-juvénile, en intégrant les dernières avancées scientifiques.',
    },
    {
        titre: 'Recherche clinique',
        icone: '📋',
        description:
            'La Fée Rima participe à des études cliniques nationales et internationales visant à mieux comprendre les troubles psychiatriques chez les jeunes et à améliorer les prises en charge.',
    },
    {
        titre: 'Formation & enseignement',
        icone: '🎓',
        description:
            'Notre pôle contribue à la formation des professionnels de santé en accueillant des stagiaires, internes et chercheurs, et en animant des séminaires scientifiques.',
    },
    {
        titre: 'Partenariats académiques',
        icone: '🤝',
        description:
            'Nous collaborons avec des universités, des CHU et des instituts de recherche pour produire des travaux publiés dans des revues scientifiques à comité de lecture.',
    },
];

export default function PoleRechercheInnovation() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero8.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Pôle Recherche &amp; Innovation</h1>
                    <p>Repousser les frontières de la connaissance au service des jeunes</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>NOTRE MISSION</h2>
                        <p>
                            Le Pôle Recherche &amp; Innovation de La Fée Rima a pour mission de
                            soutenir le développement des connaissances en psychiatrie de l'adolescent
                            et du jeune adulte. En liant étroitement la pratique clinique et la
                            démarche scientifique, nous contribuons à l'amélioration des soins pour
                            les jeunes de 10 à 25 ans, aujourd'hui et demain.
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

                {/* Axes de recherche */}
                <section style={{ padding: '3rem 2rem', maxWidth: '950px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '2rem', color: '#1a3a5c', textAlign: 'center' }}>
                        NOS AXES DE RECHERCHE
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                            gap: '1.5rem',
                        }}
                    >
                        {axes.map((axe, i) => (
                            <div
                                key={i}
                                style={{
                                    background: '#fff',
                                    borderRadius: '12px',
                                    padding: '1.75rem 1.25rem',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
                                    textAlign: 'center',
                                    transition: 'transform 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{axe.icone}</div>
                                <h3 style={{ color: '#7cb518', marginBottom: '0.75rem', fontSize: '1rem' }}>
                                    {axe.titre}
                                </h3>
                                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.6 }}>{axe.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero4.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>REJOINDRE NOS TRAVAUX</h2>
                        <p>
                            Vous êtes chercheur, interne en psychiatrie ou étudiant en sciences de
                            la santé ? La Fée Rima ouvre ses portes aux profils motivés souhaitant
                            contribuer à ses programmes de recherche. Contactez notre pôle pour
                            découvrir les opportunités disponibles.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero5.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>
            </main>

            <Footer />
        </div>
    );
}
