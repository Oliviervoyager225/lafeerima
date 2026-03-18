import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function ServiceAccueilUrgence() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero4.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Le service d'accueil d'urgence</h1>
                    <p>Une réponse rapide et bienveillante en situation de crise</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>NOTRE SERVICE D'URGENCE PSYCHIATRIQUE</h2>
                        <p>
                            Le service d'accueil d'urgence de La Fée Rima est dédié à la prise en
                            charge immédiate des jeunes de 10 à 25 ans en situation de crise
                            psychiatrique. Notre équipe est formée pour intervenir rapidement, avec
                            calme et bienveillance, afin de sécuriser le patient et d'évaluer sa
                            situation dans les meilleures conditions.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero3.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>QUAND CONTACTER LE SERVICE D'URGENCE ?</h2>
                        <p>
                            Ce service est mobilisable en cas de crise suicidaire, d'agitation
                            sévère, de décompensation psychiatrique aiguë ou de tout autre état de
                            détresse nécessitant une évaluation immédiate. L'accueil se fait sans
                            rendez-vous pour les situations d'urgence, avec une orientation adaptée
                            dès la première prise en charge.
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

                <section className="hist-section section-3">
                    <div className="hist-stacked-images">
                        <div
                            className="hist-image-box gray-box-small"
                            style={{
                                backgroundImage: "url('/assets/feerima/hero5.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <div
                            className="hist-image-box gray-box-small"
                            style={{
                                backgroundImage: "url('/assets/feerima/portrait.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    <div className="hist-content">
                        <h2>APRÈS L'URGENCE : QUELLE SUITE ?</h2>
                        <p>
                            <strong>Une évaluation complète</strong>
                            <br />
                            Chaque passage aux urgences fait l'objet d'une évaluation psychiatrique
                            approfondie. En fonction de la situation, une orientation vers les
                            consultations externes, l'hôpital de jour ou une hospitalisation peut
                            être proposée.
                        </p>
                        <p>
                            <strong>Un accompagnement de la famille</strong>
                            <br />
                            La famille est informée et associée à chaque étape de la prise en charge,
                            dans le respect des règles de confidentialité et du droit du patient.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
