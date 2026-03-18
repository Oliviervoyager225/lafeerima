import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function SecuriteDonnees() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero5.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Sécurité des données personnelles</h1>
                    <p>La protection de vos informations, une priorité absolue</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>NOTRE ENGAGEMENT RGPD</h2>
                        <p>
                            La Fée Rima collecte et traite vos données personnelles dans le strict
                            respect du Règlement Général sur la Protection des Données (RGPD). Vos
                            informations sont utilisées uniquement dans le cadre de votre prise en
                            charge médicale et ne sont jamais cédées à des tiers non autorisés.
                        </p>
                        <p>
                            Conformément à la loi, vous disposez d'un droit d'accès, de
                            rectification, d'effacement et de portabilité de vos données, ainsi que
                            d'un droit d'opposition à leur traitement.
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

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero2.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>EXERCER VOS DROITS</h2>
                        <p>
                            Pour toute demande relative à vos données personnelles, vous pouvez
                            contacter notre Délégué à la Protection des Données (DPO) par courrier
                            postal adressé à La Fée Rima ou par email via notre formulaire de
                            contact. Une réponse vous sera apportée dans un délai d'un mois.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero3.png')",
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
