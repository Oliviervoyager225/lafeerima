import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function NosValeurs() {
  return (
    <div className="historique-page">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/assets/feerima/hero8.png')" }}
      >
        <div className="page-hero-content">
          <h1>Nos valeurs</h1>
          <p>L’accueil, l’écoute et le respect au cœur de notre pratique</p>
        </div>
      </section>

      <main className="historique-main">
        {/* Section 1: Intro */}
        <section className="hist-section section-1">
          <div className="hist-content">
            <h1>NOS VALEURS AU SERVICE<br />DES JEUNES </h1>
            <p>
              À La-Fee-Rima, l’accueil, l’écoute et le respect sont au cœur de notre pratique. Ils établissent un climat de confiance, de qualité et de sécurité, essentiel pour accompagner les jeunes et leurs familles tout au long de leur parcours.
            </p>
          </div>
          <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/hero3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 2: L'accueil */}
        <section className="hist-section section-2">
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hist-content center-content">
            <h2>L'ACCUEIL</h2>
            <p>
              L’accueil du bénéficiaire et de son entourage est le premier soin que nous offrons. Toute personne est la bienvenue au centre spécialisé La-Fee-Rima, dans le respect de son identité et de ses opinions. Nous proposons un accueil personnalisé et bienveillant, où chaque jeune et sa famille sont accompagnés dès leur arrivée, informés de manière claire et soutenus dans leurs besoins immédiats.
            </p>
          </div>
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 3: L'écoute et Le respect */}
        <section className="hist-section section-3">
          <div className="hist-stacked-images">
            <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/hero2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/portrait.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
          <div className="hist-content">
            <h2>L'ÉCOUTE ET<br />LE RESPECT</h2>
            <p><strong>L’écoute</strong><br />
              À La-Fee-Rima, nous prenons le temps de vous écouter, vous et votre famille. Vos paroles, vos questions et vos inquiétudes sont importantes pour nous, elles nous permettent de mieux comprendre vos besoins et de créer un lien de confiance avec nos équipes. Nous voulons que vous puissiez vous exprimer librement, sans crainte d’indifférence ou de jugement. C’est en vous entendant que nous pouvons vous accompagner de manière adaptée, avec respect et empathie, tout au long de votre parcours.
            </p>
            <p><strong>Le respect</strong><br />
              Le respect est une valeur institutionnelle qui guide nos interactions, qu’elles soient thérapeutiques, professionnelles ou partenariales. Au quotidien, l’acceptation et la considération bienveillante de l’autre dans sa globalité sont notre priorité, qu’il s’agisse d’un bénéficiaire, d’un collègue ou d’un partenaire.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
