import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Professionals.css';
import '../styles/PageHero.css';

const doctors = [
    {
        id: 1,
        name: 'ALLO Valérie',
        specialty: 'Infirmière spécialisée',
        image: '/assets/feerima/hero.png', // Placholder image
    },
    {
        id: 2,
        name: 'ALLOU Adeline Amena',
        specialty: 'Infirmière',
        image: '/assets/feerima/hero2.png',
    },
    {
        id: 3,
        name: 'BAUDHUIN Elise',
        specialty: 'Psychologue CS',
        image: '/assets/feerima/hero3.png',
    },
    {
        id: 4,
        name: 'DONGO Angèle',
        specialty: 'Maîtresse de maison',
        image: '/assets/feerima/hero4.png',
    },
    {
        id: 5,
        name: 'GARDIMAN Alexandra',
        specialty: 'Orthophoniste',
        image: '/assets/feerima/hero.png',
    },
    {
        id: 6,
        name: 'HOUNDJI Fulgence',
        specialty: 'Éducateur spécialisé',
        image: '/assets/feerima/hero2.png',
    },
    {
        id: 7,
        name: 'KOUADIO Yao Etienne',
        specialty: 'Art-thérapeute',
        image: '/assets/feerima/hero3.png',
    },
    {
        id: 8,
        name: 'MANOUAN ép GRAH Ange Charlotte',
        specialty: 'Éducatrice spécialisée',
        image: '/assets/feerima/hero4.png',
    },
    {
        id: 9,
        name: 'MANOUAN Ludovic',
        specialty: 'Psychologue',
        image: '/assets/feerima/hero.png',
    },
    {
        id: 10,
        name: 'MESSAN Bhipeu Emmanuel',
        specialty: 'Coach sportif',
        image: '/assets/feerima/hero2.png',
    },
    {
        id: 11,
        name: 'N’GUESSAN Olivia',
        specialty: 'Pédopsychiatre',
        image: '/assets/feerima/hero3.png',
    },
    {
        id: 12,
        name: 'YAO ép KONAN Olga',
        specialty: 'Secrétaire médicale',
        image: '/assets/feerima/hero4.png',
    }
];

export default function Professionals() {
    const renderStars = (rating) => {
        // Simple star rendering logic
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<span key={i} className="star full">★</span>);
            } else if (i < rating) {
                stars.push(<span key={i} className="star half">★</span>); // approximations for now
            } else {
                stars.push(<span key={i} className="star empty">☆</span>);
            }
        }
        return stars;
    };

    return (
        <div className="professionals-page">
            <Navbar />

            {/* Hero Banner */}
            <section
                className="page-hero page-hero--ltr"
                style={{ backgroundImage: "url('/assets/feerima/hero4.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Nos professionnels</h1>
                    <p>Des professionnels de santé dévoués pour accompagner les jeunes vers le mieux-être</p>
                </div>
            </section>

            <main className="professionals-content">
                <div className="professionals-grid">
                    {doctors.map((doc) => (
                        <div key={doc.id} className="doctor-card">
                            <div className="doctor-image-container">
                                {/* The shape/background logic will be handled in CSS */}
                                <img src={doc.image} alt={doc.name} className="doctor-image" />
                            </div>

                            <div className="doctor-info">
                                <h3>{doc.name}</h3>
                                <span className="doctor-specialty">{doc.specialty}</span>
                                <div className="doctor-rating-spacer"></div> {/* Just for spacing instead of reviews */}
                                <button className="doctor-btn">En savoir plus</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="professionals-footer-action">
                    <button className="btn-see-more">Voir plus</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
