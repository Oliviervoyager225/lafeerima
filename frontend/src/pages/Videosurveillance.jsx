import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function Videosurveillance() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero4.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Système de vidéosurveillance</h1>
                    <p>Transparence sur le dispositif de sécurité de l'établissement</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>POURQUOI UN SYSTÈME DE VIDÉOSURVEILLANCE ?</h2>
                        <p>
                            La FéeRima a mis en place un système de vidéosurveillance dans certaines
                            zones communes de l'établissement (entrées, couloirs, parkings) afin
                            d'assurer la sécurité des patients, des familles et des professionnels.
                            Ce dispositif est déclaré auprès des autorités compétentes conformément
                            à la réglementation en vigueur.
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
                        <h2>VOS DROITS SUR LES IMAGES</h2>
                        <p>
                            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
                            d'un droit d'accès aux images vous concernant, sous réserve que celles-ci
                            soient encore disponibles (durée de conservation limitée à 30 jours).
                            Pour exercer ce droit, adressez votre demande par écrit au secrétariat
                            de direction de l'établissement en justifiant de votre identité.
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
