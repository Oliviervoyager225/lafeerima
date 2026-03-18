import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const tarifications = [
    {
        service: 'Consultation psychiatrique initiale',
        duree: '60 min',
        tarif: 'Prise en charge Sécurité Sociale',
    },
    {
        service: 'Consultation psychiatrique de suivi',
        duree: '30 min',
        tarif: 'Prise en charge Sécurité Sociale',
    },
    {
        service: 'Consultation psychologique',
        duree: '45 min',
        tarif: 'Prise en charge selon convention',
    },
    {
        service: "Hôpital de jour (par journée)",
        duree: 'Journée',
        tarif: 'Forfait journalier — voir service',
    },
    {
        service: "Service d'accueil d'urgence",
        duree: 'Variable',
        tarif: 'Sans avance de frais sous conditions',
    },
];

export default function Tarifications() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero5.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Tarifications</h1>
                    <p>Transparence et accessibilité pour tous les jeunes et leurs familles</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>NOS TARIFS ET MODES DE PRISE EN CHARGE</h2>
                        <p>
                            La Fée Rima s'engage à rendre ses soins accessibles à tous. La majorité
                            de nos prestations sont prises en charge par l'Assurance Maladie
                            obligatoire, sous réserve de disposer d'une prescription médicale et
                            d'être affilié à un régime de Sécurité Sociale.
                        </p>
                        <p>
                            Pour les familles sans couverture sociale ou en situation précaire, des
                            dispositifs d'aide existent. N'hésitez pas à contacter notre service
                            administratif pour en savoir plus.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                {/* Tableau des tarifs */}
                <section style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: '#1a3a5c' }}>TABLEAU DES PRESTATIONS</h2>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.95rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                    >
                        <thead>
                            <tr style={{ background: '#7cb518', color: '#fff' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Prestation</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Durée</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Tarification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarifications.map((row, i) => (
                                <tr
                                    key={i}
                                    style={{
                                        background: i % 2 === 0 ? '#f9f9f9' : '#fff',
                                        borderBottom: '1px solid #e5e7eb',
                                    }}
                                >
                                    <td style={{ padding: '0.9rem 1rem' }}>{row.service}</td>
                                    <td style={{ padding: '0.9rem 1rem' }}>{row.duree}</td>
                                    <td style={{ padding: '0.9rem 1rem' }}>{row.tarif}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero3.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>MUTUELLE ET COMPLÉMENTAIRE</h2>
                        <p>
                            Selon votre contrat de complémentaire santé, une partie ou la totalité
                            de votre ticket modérateur peut être remboursée. Rapprochez-vous de votre
                            mutuelle pour connaître les modalités de prise en charge applicables à
                            votre situation.
                        </p>
                        <p>
                            Notre secrétariat médical est disponible pour vous accompagner dans vos
                            démarches administratives et vous orienter vers les bons interlocuteurs.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero2.png')",
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
