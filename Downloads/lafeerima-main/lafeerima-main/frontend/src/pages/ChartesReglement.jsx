import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function ChartesReglement() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Chartes et règlement intérieur</h1>
                    <p>Le cadre de vie et les engagements communs au sein de La Fée Rima</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>LE RÈGLEMENT INTÉRIEUR</h2>
                        <p>
                            Le règlement intérieur de La Fée Rima définit les règles de vie
                            collective applicables à tous les bénéficiaires, familles et
                            professionnels de l'établissement. Il précise les droits et obligations
                            de chacun afin de garantir un environnement de soins sûr, respectueux
                            et propice au rétablissement.
                        </p>
                        <p>
                            Ce document est remis à chaque patient et à sa famille lors de
                            l'admission et est consultable à tout moment auprès du secrétariat.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero2.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero3.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>LES CHARTES EN VIGUEUR</h2>
                        <p>
                            La Fée Rima applique plusieurs chartes fondamentales : la Charte de la
                            Personne Hospitalisée, la Charte des Droits et Libertés de la Personne
                            Âgée (adaptée aux mineurs), et notre propre Charte de Bientraitance.
                            Ces textes rappellent les valeurs humanistes qui guident nos pratiques
                            au quotidien.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero4.png')",
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
