import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function ChartesUsager() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero2.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Charte Usager</h1>
                    <p>Vos droits et notre engagement en tant qu'établissement de santé</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>QU'EST-CE QUE LA CHARTE DE L'USAGER ?</h2>
                        <p>
                            La Charte de l'usager en santé mentale est un document qui rappelle les
                            droits fondamentaux de toute personne prise en charge dans un
                            établissement psychiatrique. Elle est fondée sur les principes de
                            dignité, d'égalité de traitement, de consentement éclairé et de
                            participation active au projet de soins.
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
                        <h2>VOS PRINCIPAUX DROITS</h2>
                        <p>
                            En tant qu'usager de La-Fee-Rima, vous bénéficiez du droit à
                            l'information sur votre état de santé, du droit au consentement libre
                            et éclairé, du droit à la confidentialité, du droit d'accès à votre
                            dossier médical, et du droit de désigner une personne de confiance.
                        </p>
                        <p>
                            Tout mineur a également le droit d'être entendu et d'exprimer son avis
                            sur les décisions qui le concernent, dans le respect de son âge et de
                            sa maturité.
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
