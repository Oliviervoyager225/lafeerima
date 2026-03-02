import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const faqData = [
    {
        question: 'Comment prendre un premier rendez-vous à La FéeRima ?',
        answer:
            "Vous pouvez contacter notre secrétariat par téléphone ou via le formulaire en ligne sur notre site. Une orientation médicale préalable est recommandée mais pas toujours obligatoire selon la situation.",
    },
    {
        question: 'La prise en charge est-elle remboursée par la Sécurité Sociale ?',
        answer:
            "Oui, la majorité de nos prestations sont prises en charge par l'Assurance Maladie. Le taux de remboursement dépend de votre situation et de votre complémentaire santé.",
    },
    {
        question: "Quelles tranches d'âge sont accueillies ?",
        answer:
            "La FéeRima accompagne les jeunes et adolescents de 10 à 25 ans présentant des besoins en santé mentale.",
    },
    {
        question: "Peut-on venir sans rendez-vous en cas d'urgence ?",
        answer:
            "Oui. Notre service d'accueil d'urgence est accessible sans rendez-vous. En cas de situation de crise, n'hésitez pas à vous présenter directement à l'établissement.",
    },
    {
        question: 'Les familles peuvent-elles être impliquées dans le suivi ?',
        answer:
            "Absolument. La FéeRima encourage la participation des familles dans le parcours de soins. Des consultations familiales et des espaces d'échange sont proposés régulièrement.",
    },
    {
        question: 'Où se situe La FéeRima ?',
        answer:
            "Retrouvez notre adresse complète, ainsi qu'un plan d'accès, dans la section Contact de notre site ou en bas de page.",
    },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero3.png')" }}
            >
                <div className="page-hero-content">
                    <h1>FAQ</h1>
                    <p>Les réponses aux questions les plus fréquentes</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <div className="hist-content" style={{ maxWidth: '800px', width: '100%' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>VOS QUESTIONS, NOS RÉPONSES</h2>
                        {faqData.map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    marginBottom: '1rem',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                    background: '#fff',
                                }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={openIndex === i}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1.1rem 1.25rem',
                                        background: openIndex === i ? '#7cb518' : '#f9f9f9',
                                        color: openIndex === i ? '#fff' : '#1a3a5c',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '0.97rem',
                                        textAlign: 'left',
                                        transition: 'background 0.25s, color 0.25s',
                                    }}
                                >
                                    {item.question}
                                    <span style={{ marginLeft: '1rem', fontSize: '1.25rem', lineHeight: 1 }}>
                                        {openIndex === i ? '−' : '+'}
                                    </span>
                                </button>
                                {openIndex === i && (
                                    <div
                                        style={{
                                            padding: '1rem 1.25rem',
                                            borderTop: '1px solid #e5e7eb',
                                            color: '#444',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
