import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function PlaintesReclamations() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero2.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Plaintes et réclamations</h1>
                    <p>Votre satisfaction est notre priorité — votre voix compte</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>EXPRIMER UNE INSATISFACTION</h2>
                        <p>
                            Si vous avez vécu une situation qui ne correspond pas à vos attentes
                            ou à nos engagements, vous avez le droit de l'exprimer. La Fée Rima
                            encourage toute démarche visant à améliorer la qualité des soins et
                            de l'accueil. Vos signalements sont traités avec sérieux et
                            confidentialité.
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
                            backgroundImage: "url('/assets/feerima/hero4.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>LES VOIES DE RECOURS</h2>
                        <p>
                            <strong>1. Le responsable de service</strong> : Première étape, parlez
                            directement au responsable de l'unité qui vous prend en charge.
                        </p>
                        <p>
                            <strong>2. La Commission des Usagers (CDU)</strong> : Si la situation
                            n'est pas résolue, vous pouvez saisir la CDU de l'établissement, dont
                            le rôle est de veiller au respect de vos droits.
                        </p>
                        <p>
                            <strong>3. La voie juridictionnelle</strong> : En dernier recours, vous
                            pouvez saisir le médiateur de la République ou les juridictions
                            compétentes.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero.png')",
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
