import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Actualites.css';
import '../styles/PageHero.css';

const articles = [
    {
        id: 1,
        category: 'Santé mentale',
        title: 'Comprendre l\'anxiété chez les adolescents',
        excerpt: 'Découvrez comment identifier les signes d\'anxiété chez les jeunes et les meilleures approches pour les accompagner au quotidien.',
        image: '/assets/feerima/portrait.png',
        date: '12 Février 2026',
        author: 'Dr. Glao Louis',
    },
    {
        id: 2,
        category: 'Thérapie',
        title: 'L\'art-thérapie au service du bien-être',
        excerpt: 'L\'expression créative comme outil thérapeutique permet aux jeunes de libérer leurs émotions et de renforcer leur confiance en soi.',
        image: '/assets/feerima/artistique.png',
        date: '5 Février 2026',
        author: 'Dr. Emma Wilson',
    },
    {
        id: 3,
        category: 'Prévention',
        title: 'Sport et santé mentale : un duo gagnant',
        excerpt: 'La pratique régulière d\'une activité physique a un impact direct et positif sur l\'équilibre émotionnel et mental des adolescents.',
        image: '/assets/feerima/sport.png',
        date: '28 Janvier 2026',
        author: 'Dr. Ravi Bec',
    },
    {
        id: 4,
        category: 'Famille',
        title: 'Renforcer les liens familiaux',
        excerpt: 'Des stratégies concrètes pour améliorer la communication entre parents et adolescents dans les moments de tension.',
        image: '/assets/feerima/soutien familial.png',
        date: '20 Janvier 2026',
        author: 'Dr. Molamine Hive',
    },
    {
        id: 5,
        category: 'Éducation',
        title: 'Soutien scolaire et santé psychologique',
        excerpt: 'Comment les établissements scolaires peuvent devenir des espaces bienveillants favorisant la réussite et le bien-être des élèves.',
        image: '/assets/feerima/educatif.png',
        date: '14 Janvier 2026',
        author: 'Dr. Glao Louis',
    },
    {
        id: 6,
        category: 'Innovation',
        title: 'Nouvelles thérapies pour les jeunes',
        excerpt: 'La FéeRima explore des méthodes innovantes en santé mentale pour répondre aux besoins spécifiques des jeunes d\'aujourd\'hui.',
        image: '/assets/feerima/Thérapies innovantes.png',
        date: '7 Janvier 2026',
        author: 'Dr. Emma Wilson',
    },
];

const strategies = [
    'Accompagnement individualisé',
    'Thérapies basées sur les preuves',
    'Approche multidisciplinaire',
    'Soutien familial intégré',
    'Activités socio-éducatives',
    'Suivi et évaluation régulière',
];

const mentors = [
    {
        id: 1,
        name: 'Dr. Glao Louis',
        role: 'Psychiatre Pédiatrique',
        image: '/assets/feerima/Image medecin 1.png',
        bio: 'Spécialiste en psychiatrie de l\'enfant et de l\'adolescent avec plus de 15 ans d\'expérience dans l\'accompagnement des jeunes en difficulté.',
    },
    {
        id: 2,
        name: 'Dr. Emma Wilson',
        role: 'Psychologue Clinicienne',
        image: '/assets/feerima/Image medecin 2.png',
        bio: 'Experte en thérapies cognitivo-comportementales, elle accompagne les adolescents vers une meilleure gestion de leurs émotions.',
    },
];

export default function Actualites() {
    return (
        <div className="actualites-page">
            <Navbar />

            {/* Hero Banner - même effet que Historique (droite → gauche) */}
            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero9.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Nos actualités</h1>
                    <p>Restez informés des dernières nouvelles, conseils et événements de la FéeRima</p>
                </div>
            </section>

            <main className="actualites-content">

                {/* ── Section 1 : Grille d'articles ── */}
                <section className="actu-articles-section">
                    <div className="actu-container">
                        <div className="actu-articles-grid">
                            {articles.map((article) => (
                                <article key={article.id} className="actu-card">
                                    <div className="actu-card-image">
                                        <img src={article.image} alt={article.title} />
                                        <span className="actu-category">{article.category}</span>
                                    </div>
                                    <div className="actu-card-body">
                                        <p className="actu-meta">{article.date} · {article.author}</p>
                                        <h3>{article.title}</h3>
                                        <p className="actu-excerpt">{article.excerpt}</p>
                                        <a href="#" className="actu-read-more">Lire la suite →</a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 2 : Stratégie & Planning ── */}
                <section className="actu-strategy-section">
                    <div className="actu-container actu-strategy-grid">
                        <div className="actu-strategy-left">
                            <h2>Notre approche &amp; Planification</h2>
                            <ul className="actu-strategy-list">
                                {strategies.map((item, i) => (
                                    <li key={i}>
                                        <span className={i === 2 ? 'actu-strategy-bold' : ''}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="actu-strategy-right">
                            <div className="actu-strategy-image-wrapper">
                                <img src="/assets/feerima/hero2.png" alt="Notre approche" />
                                <div className="actu-play-btn">
                                    <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 3 : Notre équipe ── */}
                <section className="actu-mentors-section">
                    <div className="actu-container">
                        <h2>Rencontrez nos experts</h2>
                        <p className="actu-mentors-subtitle">
                            Des professionnels passionnés, entièrement dédiés à la santé mentale des jeunes.
                        </p>
                        <div className="actu-mentors-grid">
                            {mentors.map((mentor) => (
                                <div key={mentor.id} className="actu-mentor-card">
                                    <img src={mentor.image} alt={mentor.name} className="actu-mentor-img" />
                                    <div className="actu-mentor-info">
                                        <h3>{mentor.name}</h3>
                                        <span className="actu-mentor-role">{mentor.role}</span>
                                        <p>{mentor.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 4 : Contact ── */}
                <section className="actu-contact-section">
                    <div className="actu-container actu-contact-grid">

                        {/* Formulaire */}
                        <div className="actu-contact-form-col">
                            <h2>Prenez contact avec nous</h2>
                            <p>N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais.</p>
                            <form className="actu-contact-form">
                                <div className="actu-form-row">
                                    <div className="actu-form-group">
                                        <label>Prénom</label>
                                        <input type="text" placeholder="Votre prénom" />
                                    </div>
                                    <div className="actu-form-group">
                                        <label>Nom</label>
                                        <input type="text" placeholder="Votre nom" />
                                    </div>
                                </div>
                                <div className="actu-form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="votre@email.com" />
                                </div>
                                <button type="submit" className="actu-submit-btn">Envoyer</button>
                            </form>
                        </div>

                        {/* Liens + Infos */}
                        <div className="actu-contact-info-col">
                            <div className="actu-info-block">
                                <h4>Navigation</h4>
                                <ul>
                                    <li><Link to="/">Accueil</Link></li>
                                    <li><Link to="/historique">Notre histoire</Link></li>
                                    <li><Link to="/professionnels">Nos professionnels</Link></li>
                                    <li><Link to="/preadmission">Pré-admission</Link></li>
                                    <li><Link to="/actualites">Actualités</Link></li>
                                </ul>
                            </div>
                            <div className="actu-info-block">
                                <h4>Service patient</h4>
                                <ul>
                                    <li>Politique de confidentialité</li>
                                    <li>Conditions d'utilisation</li>
                                    <li>Modalités de prise en charge</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
