import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { newsService } from '../services/api';
import '../styles/Home.css';
import '../styles/InfoSection.css';
import '../styles/InfoSectionFullwidth.css';
import '../styles/FooterSection.css';
import TypingBubble from '../components/TypingBubble';
import LeafletMap from '../components/LeafletMap';


const fallbackNews = [
  {
    id: 'placeholder-1',
    title: 'Alimentation saine',
    excerpt: 'Des conseils simples pour soutenir le bien-etre et l energie au quotidien.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-2',
    title: 'Gestion du stress',
    excerpt: 'Exercices de respiration et routines courtes pour apaiser les tensions.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-3',
    title: 'Sommeil reparateur',
    excerpt: 'Des rituels du soir pour retrouver un sommeil profond et reparateur.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-4',
    title: 'Activité physique',
    excerpt: 'L importance du mouvement pour la santé mentale et physique.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-5',
    title: 'Méditation guidée',
    excerpt: 'Techniques de pleine conscience pour calmer l esprit.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-6',
    title: 'Relations sociales',
    excerpt: 'Construire et maintenir des liens sociaux sains.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-7',
    title: 'Expressions créatives',
    excerpt: 'Art-thérapie et expression créative pour le bien-être.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-8',
    title: 'Gestion des émotions',
    excerpt: 'Comprendre et gérer ses émotions au quotidien.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-9',
    title: 'Thérapie familiale',
    excerpt: 'Renforcer les liens familiaux et la communication.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-10',
    title: 'Nutrition mentale',
    excerpt: 'L impact de l alimentation sur la santé mentale.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-11',
    title: 'Journaling',
    excerpt: 'Écrire pour mieux comprendre ses pensées et émotions.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-12',
    title: 'Groupes de soutien',
    excerpt: 'Partager son vécu avec d autres pour mieux avancer.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-13',
    title: 'Développement personnel',
    excerpt: 'Des outils pour grandir et s épanouir pleinement.',
    imageUrl: '',
    linkUrl: '#',
  },
];

export default function Home() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);

  // Images pour le carousel hero (4 images)
  const heroImages = [
    '/assets/feerima/hero.png',
    '/assets/feerima/hero2.png?v=' + Date.now(),
    '/assets/feerima/hero3.png?v=' + Date.now(),
    '/assets/feerima/hero4.png?v=' + Date.now()
  ];

  // Images pour le carousel "Le centre en image"
  const centerImages = [
    '/assets/feerima/centre1.png',
    '/assets/feerima/centre 2.png',
    '/assets/feerima/centre 3.png',
    '/assets/feerima/hero.png'
  ];

  const goToPreviousHero = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToNextHero = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-scroll center images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev === centerImages.length - 1 ? 0 : prev + 1));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [centerImages.length]);

  // Auto-scroll news carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector('.news-cards-horizontal');
      if (container) {
        // Scroll right by 220px (card width + gap)
        container.scrollBy({ left: 220, behavior: 'smooth' });

        // Reset to beginning when reaching the end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          }, 500);
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await newsService.getLatestNews();
        setNewsItems(response.data || []);
        setLoadError(null);
      } catch (err) {
        setLoadError('Impossible de charger les actualites pour le moment.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const displayedNews = newsItems.length > 0 ? newsItems : fallbackNews;

  return (
    <div className="home-page">
      <Navbar />

      <main>
        <section
          key={heroIndex}
          className="hero hero-slide"
          style={{ background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url('${heroImages[heroIndex]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <button
            type="button"
            className="hero-nav hero-nav-prev"
            onClick={goToPreviousHero}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="hero-title-brand">FeeRima</span>{' '}
                <span className="hero-title-suffix">Care</span>
              </h1>
              <p className="hero-subtitle">
                Votre partenaire de confiance pour la santé mentale des jeunes et
                adolescents de 10-25 ans.
              </p>
              <div className="hero-actions">
                <Link to="/preadmission" className="btn btn-primary-yellow">
                  Prendre rendez-vous
                </Link>
                <button type="button" className="btn btn-video">
                  <span className="play-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Nos actions en vidéo
                </button>
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card-title">À la Fée Rima</p>
              <p>Un accueil personnalisé et bienveillant</p>
            </div>
          </div>
          <button
            type="button"
            className="hero-nav hero-nav-next"
            onClick={goToNextHero}
            aria-label="Image suivante"
          >
            ›
          </button>

          {/* Pagination dots */}
          <div className="hero-pagination">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero-dot ${index === heroIndex ? 'active' : ''}`}
                onClick={() => setHeroIndex(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <TypingBubble />

        <section className="quote-bar">
          <div className="quote-content">
            "La guerison prend du temps et demander de l aide est une demarche courageuse"<span className="quote-author"> - Mariska Hargitay</span>
          </div>
        </section>


        <section className="info-section-fullwidth">
          <div className="container">
            {/* Full Width News Panel - Pink background */}
            <div className="news-panel-fullwidth">
              <h3 className="news-title-fullwidth">Nos dernières actualités</h3>

              {/* News Cards in horizontal row with navigation */}
              <div className="news-carousel-wrapper">
                <button
                  className="news-nav-btn news-nav-left"
                  onClick={() => {
                    const container = document.querySelector('.news-cards-horizontal');
                    container.scrollBy({ left: -400, behavior: 'smooth' });
                  }}
                  aria-label="Précédent"
                >
                  ‹
                </button>

                <div className="news-cards-horizontal">
                  {displayedNews.map((item) => (
                    <article key={item.id} className="news-card-horizontal">
                      <div className="news-image-horizontal">
                        <img src={item.imageUrl || '/assets/feerima/portrait.png'} alt={item.title} />
                      </div>
                      <div className="news-content-horizontal">
                        <h4>{item.title}</h4>
                        <p>{item.excerpt}</p>
                        <a href={item.linkUrl} className="news-link-horizontal">
                          Voir plus →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                <button
                  className="news-nav-btn news-nav-right"
                  onClick={() => {
                    const container = document.querySelector('.news-cards-horizontal');
                    container.scrollBy({ left: 400, behavior: 'smooth' });
                  }}
                  aria-label="Suivant"
                >
                  ›
                </button>
              </div>

              {/* Map Container - Interactive Leaflet + OpenStreetMap */}
              <div className="map-container-fullwidth">
                <h3 className="news-title-fullwidth map-title">Localisation</h3>
                <LeafletMap />
              </div>

              {/* Section Services - 3 blocs alternés */}
              <div className="services-section">
                <h2 className="services-main-title">Nos spécialités</h2>

                {/* Bloc 1: Texte gauche, Image droite */}
                <div className="service-block-row">
                  <div className="service-text-col">
                    <p>La Fée Rima propose un espace sûr pour les jeunes en difficultés psychiques. Nous offrons un accompagnement personnalisé dans un cadre bienveillant.</p>
                    <p>Nos espaces sont conçus pour favoriser le bien-être et la guérison. Des lieux adaptés pour l'échange.</p>
                    <button className="service-info-btn">Plus d'info</button>
                  </div>
                  <div className="service-image-col">
                    <img src="/assets/feerima/hero.png" alt="Centre" />
                  </div>
                </div>

                {/* Bloc 2: Image gauche, Texte droite */}
                <div className="service-block-row reverse-row">
                  <div className="service-image-col">
                    <img src="/assets/feerima/hero2.png" alt="Espace thérapeutique" />
                  </div>
                  <div className="service-text-col">
                    <p>Nous travaillons avec les meilleures pratiques en santé mentale. Nos équipes sont formées aux approches innovantes.</p>
                    <p>Un cadre professionnel et chaleureux pour accompagner chaque jeune.</p>
                    <button className="service-info-btn">Plus d'info</button>
                  </div>
                </div>

                {/* Bloc 3: Texte gauche, Image droite */}
                <div className="service-block-row">
                  <div className="service-text-col">
                    <p>Nos programmes sont adaptés aux besoins spécifiques de chaque jeune. Une prise en charge globale.</p>
                    <p>Des activités variées pour favoriser l'épanouissement dans un environnement sécurisé.</p>
                    <button className="service-info-btn">Plus d'info</button>
                  </div>
                  <div className="service-image-col">
                    <img src="/assets/feerima/hero3.png" alt="Activités" />
                  </div>
                </div>

                {/* Section Spécialités - Grille de cartes */}
                <div className="specialties-grid-section">
                  <h2 className="specialties-grid-title">Toutes nos spécialités</h2>

                  <div className="specialties-cards-grid">
                    {/* Carte 1 */}
                    <div className="specialty-grid-card">
                      <div className="specialty-grid-image">
                        <img src="/assets/feerima/psychotherapist.png" alt="Psychothérapie" />
                      </div>
                      <h3>Psychothérapie</h3>
                      <p>Accompagnement psychologique individuel et de groupe pour adolescents et jeunes adultes.</p>
                    </div>

                    {/* Carte 2 */}
                    <div className="specialty-grid-card">
                      <div className="specialty-grid-image">
                        <img src="/assets/feerima/educatif.png" alt="Soutien éducatif" />
                      </div>
                      <h3>Soutien éducatif</h3>
                      <p>Programmes éducatifs adaptés pour maintenir la scolarité et favoriser la réussite.</p>
                    </div>

                    {/* Carte 3 */}
                    <div className="specialty-grid-card">
                      <div className="specialty-grid-image">
                        <img src="/assets/feerima/artistique.png" alt="Activités artistiques" />
                      </div>
                      <h3>Activités artistiques</h3>
                      <p>Expression créative et art-thérapie pour favoriser le bien-être émotionnel.</p>
                    </div>

                    {/* Carte 4 */}
                    <div className="specialty-grid-card">
                      <div className="specialty-grid-image">
                        <img src="/assets/feerima/sport.png" alt="Sport et bien-être" />
                      </div>
                      <h3>Sport et bien-être</h3>
                      <p>Activités physiques et sportives pour renforcer le bien-être physique et mental.</p>
                    </div>

                    {/* Carte 5 */}
                    <div className="specialty-grid-card">
                      <div className="specialty-grid-image">
                        <img src="/assets/feerima/soutien familial.png" alt="Soutien familial" />
                      </div>
                      <h3>Soutien familial</h3>
                      <p>Accompagnement des familles et renforcement des liens familiaux.</p>
                    </div>

                    {/* Carte 6 */}
                    <div className="specialty-grid-card">
                      <div className="specialty-grid-image">
                        <img src="/assets/feerima/Thérapies innovantes.png" alt="Thérapies innovantes" />
                      </div>
                      <h3>Thérapies innovantes</h3>
                      <p>Utilisation de méthodes thérapeutiques modernes et adaptées.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Footer Section - Le centre en image */}
        <section className="footer-section">
          <div className="container footer-grid">
            {/* Left Column - Le centre en image (Carousel) */}
            <div className="footer-left">
              <h3>Le centre en image</h3>
              <div className="center-carousel">
                <img
                  key={centerIndex}
                  src={centerImages[centerIndex]}
                  alt="Le centre en image"
                  className="center-carousel-image"
                />
              </div>
            </div>

            {/* Center Column - Description only */}
            <div className="footer-center">
              <div className="footer-description">
                <p>
                  La Fée Rima est un centre spécialisé à Abidjan, dédier à l'accompagnement
                  de la santé mentale des jeunes de 10 à 25 ans
                </p>
              </div>
            </div>

            {/* Right Column - Navigation Links */}
            <div className="footer-right">
              <h3>Le centre spécialisé Fée Rima</h3>
              <ul className="footer-nav">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/centre">Le centre spécialisé</Link></li>
                <li><Link to="/offre">L'offre de soins</Link></li>
                <li><Link to="/droits">Vos droits</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/ressources">Ressources</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Row - Logo + Social Icons */}
          <div className="container footer-bottom">
            <div className="footer-logos">
              <div className="footer-logo">
                <img src="/assets/feerima/logo.png" alt="Fée Rima Logo" />
              </div>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" width="48" height="48">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" width="48" height="48">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div >
  );
}
