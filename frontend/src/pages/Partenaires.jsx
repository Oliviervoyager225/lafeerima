import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function Partenaires() {
  return (
    <div className="historique-page">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/assets/feerima/hero8.png')" }}
      >
        <div className="page-hero-content">
          <h1>Nos partenaires</h1>
          <p>Ensemble, construisons un avenir meilleur pour la santé mentale des jeunes</p>
        </div>
      </section>

      <main className="historique-main">
        {/* Section 1: Intro */}
        <section className="hist-section section-1">
          <div className="hist-content">
            <h1>ILS NOUS FONT<br />CONFIANCE</h1>
            <p>
              La-Fee-Rima collabore avec de nombreuses organisations pour mener à bien sa mission. Nous sommes fiers de travailler avec des fondations, des associations, des ONG, des institutions publiques et des universités qui partagent notre engagement pour le bien-être psychologique des jeunes.
            </p>
            <p>
              Découvrez les acteurs engagés à nos côtés pour faire avancer la santé mentale en Côte d'Ivoire.
            </p>
          </div>
          <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/hero4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 2: Logos (Placeholder) */}
        <section className="hist-section section-2">
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hist-content center-content">
            <h2>NOS<br />COLLABORATIONS</h2>
            <p>
              [Logos cliquables renvoyant vers les sites partenaires - À intégrer]
            </p>
          </div>
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 3: Soutiens */}
        <section className="hist-section section-3">
          <div className="hist-stacked-images">
            <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/hero.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}></div>
            <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/portrait.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
          <div className="hist-content">
            <h2>MESSAGES DE<br />SOUTIEN</h2>
            <p className="emphasis-text">
              "Nous soutenons pleinement l'initiative de La-Fee-Rima. Leur approche est essentielle pour répondre aux besoins grandissants des jeunes." - [Partenaire Stratégique]
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
