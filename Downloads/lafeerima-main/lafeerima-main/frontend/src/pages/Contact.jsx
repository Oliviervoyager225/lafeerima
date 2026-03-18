import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ prenom: '', nom: '', email: '', telephone: '', message: '' });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        // Simulation envoi (à connecter au backend)
        setTimeout(() => {
            setSent(true);
            setSending(false);
            setForm({ prenom: '', nom: '', email: '', telephone: '', message: '' });
        }, 1200);
    };

    return (
        <div className="contact-page">
            <Navbar />

            {/* ── Hero ── */}
            <div className="contact-hero">
                <img src="/assets/feerima/hero.png" alt="Contactez-nous" className="contact-hero-img" />
                <div className="contact-hero-overlay" />
                <div className="contact-hero-text">
                    <h1>Nous Contacter</h1>
                    <p>Prenez rendez-vous ou posez-nous vos questions</p>
                </div>
            </div>

            {/* ── Corps ── */}
            <main className="contact-body">

                {/* Colonne gauche : infos */}
                <div className="contact-info-col">
                    <h2>Parlons ensemble</h2>
                    <p className="contact-intro">
                        Des questions, des commentaires ou une demande de rendez-vous ?
                        Remplissez le formulaire et nous vous répondrons dans les plus brefs délais.
                    </p>

                    <div className="contact-detail">
                        <span className="contact-icon">📍</span>
                        <div>
                            <strong>Adresse</strong>
                            <p>Abidjan, Côte d'Ivoire</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-icon">📞</span>
                        <div>
                            <strong>Téléphone</strong>
                            <p><a href="tel:+2250700000007">+225 07 00 000 007</a></p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-icon">✉️</span>
                        <div>
                            <strong>E-mail</strong>
                            <p><a href="mailto:lafeerima@gmail.com">lafeerima@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-icon">🕐</span>
                        <div>
                            <strong>Horaires d'accueil</strong>
                            <p>Lundi – Vendredi : 08h00 – 17h00</p>
                        </div>
                    </div>
                </div>

                {/* Colonne droite : formulaire */}
                <div className="contact-form-col">
                    {sent ? (
                        <div className="contact-success">
                            <span>✅</span>
                            <h3>Message envoyé !</h3>
                            <p>Merci de nous avoir contactés. Nous vous répondrons très bientôt.</p>
                            <button className="contact-btn" onClick={() => setSent(false)}>Envoyer un autre message</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form-row">
                                <input
                                    type="text"
                                    name="prenom"
                                    placeholder="Prénom *"
                                    value={form.prenom}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="nom"
                                    placeholder="Nom *"
                                    value={form.nom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Adresse e-mail *"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="telephone"
                                placeholder="Numéro de téléphone *"
                                value={form.telephone}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Votre message..."
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="contact-btn" disabled={sending}>
                                {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                        </form>
                    )}
                </div>

            </main>

            <Footer />
        </div>
    );
}
