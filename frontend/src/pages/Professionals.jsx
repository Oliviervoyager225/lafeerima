import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Professionals.css';

const doctors = [
    {
        id: 1,
        name: 'Dr. Glao Louis',
        specialty: 'Psychiatre',
        rating: 4.5,
        reviews: 123,
        image: '/assets/feerima/Image%20medecin%201.png',
        available: true,
        theme: 'cyan'
    },
    {
        id: 2,
        name: 'Dr. Emma Wilson',
        specialty: 'Neurologue',
        rating: 4.5,
        reviews: 98,
        image: '/assets/feerima/Image%20medecin%202.png',
        available: true,
        theme: 'green'
    },
    {
        id: 3,
        name: 'Dr. Molamine Hive',
        specialty: 'Psychologue',
        reviews: 215,
        image: '/assets/feerima/Image%20medecin%203.png',
        available: true,
        theme: 'full-green'
    },
    {
        id: 4,
        name: 'Dr. Ravi Bec',
        specialty: 'Psychologue',
        rating: 4.5,
        reviews: 108,
        image: '/assets/feerima/Image%20medecin%204.png',
        available: true,
        theme: 'cyan'
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
            <main className="professionals-content">
                <div className="professionals-header">
                    <h1>Notre équipe médicale</h1>
                    <p>Des médecins hautement qualifiés sont prêts à vous servir</p>
                </div>

                <div className="professionals-grid">
                    {doctors.map((doc) => (
                        <div key={doc.id} className={`doctor-card ${doc.theme}`}>
                            {doc.available && <span className="availability-badge">● Disponible</span>}

                            <div className="doctor-image-container">
                                {/* The shape/background logic will be handled in CSS */}
                                <img src={doc.image} alt={doc.name} className="doctor-image" />
                            </div>

                            <div className="doctor-info">
                                <h3>{doc.name}</h3>
                                <span className="doctor-specialty">{doc.specialty}</span>

                                {doc.rating && (
                                    <div className="doctor-rating">
                                        {renderStars(doc.rating)}
                                        <span className="review-count">({doc.reviews})</span>
                                    </div>
                                )}
                                {/* For the full green card, rating might be different or usually at bottom, 
                     but following the mockup structure roughly */}
                                {!doc.rating && <div className="doctor-rating-spacer">({doc.reviews})</div>}

                                <button className="doctor-btn">Pour votre bien-être</button>
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
