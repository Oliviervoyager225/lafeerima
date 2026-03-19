import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function Engagement() {
  return (
    <div className="historique-page">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/assets/feerima/Engagement-Qualité.jpg')" }}
      >
        <div className="page-hero-content">
          <h1>Notre engagement qualité</h1>
          <p>L’ensemble des professionnels s’engage au quotidien pour garantir la qualité et la sécurité des soins</p>
        </div>
      </section>

      <main className="historique-main">
        {/* Section 1: Intro */}
        <section className="hist-section section-1">
          <div className="hist-content">
            <h1>NOTRE ENGAGEMENT<br />QUALITÉ</h1>
            <p>
              À La Fée Rima, l’ensemble des professionnels s’engage au quotidien pour garantir la qualité et la sécurité des soins.
            </p>
            <p>
              Notre centre spécialisé place le bénéficiaire au cœur de toutes nos actions, avec une prise en charge personnalisée, de l’accueil aux soins, en passant par la restauration et les services techniques et administratifs. Nous mettons notre expertise au service de chaque jeune et de sa famille.
            </p>
          </div>
          <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/engagement-equipe.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 2: Amélioration continue */}
        <section className="hist-section section-2">
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hist-content center-content">
            <h2>AMÉLIORATION<br />CONTINUE</h2>
            <p>
              Nous avons mis en place une politique d’amélioration continue, qui s’appuie sur l’évaluation de la satisfaction des bénéficiaires et de leurs familles, la réalisation d’audits annuels sur la qualité et la sécurité des soins, ainsi que la mise en œuvre d’actions concrètes d’amélioration, comme l’ajustement des pratiques et les formations ciblées pour nos équipes.
            </p>
          </div>
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 3: Conclusion */}
        <section className="hist-section section-3">
          <div className="hist-stacked-images">
            <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/hero.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}></div>
            <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/evolution.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
          <div className="hist-content">
            <h2>ÉVOLUTION<br />CONSTANTE</h2>
            <p>
              Chez La Fée Rima, notre engagement qualité nous permet de faire évoluer constamment nos pratiques, afin d’offrir un accompagnement toujours plus personnalisé, fondé sur l’excellence et l’expertise de nos équipes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
