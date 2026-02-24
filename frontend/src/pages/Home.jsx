import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { newsService } from '../services/api';
import '../styles/Home.css';
import '../styles/InfoSection.css';
import '../styles/InfoSectionFullwidth.css';
import '../styles/FooterSection.css';
import '../styles/ContactSection.css';
import TypingBubble from '../components/TypingBubble';
import QuotesBanner from '../components/QuotesBanner';
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
  const location = useLocation();
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);


  // Images pour le carousel hero (4 images)
  const heroImages = [
    '/assets/feerima/hero.png',
    '/assets/feerima/hero2.png?v=' + Date.now(),
    '/assets/feerima/hero3.png?v=' + Date.now(),
    '/assets/feerima/hero4.png?v=' + Date.now()
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

  // Scroll to actualites if state.scrollToActualites is set
  useEffect(() => {
    if (location.state && location.state.scrollToActualites) {
      const el = document.getElementById('actualites');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
      // Clean up state so it doesn't scroll again on back/forward
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

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
                <span className="hero-title-brand">FeeRima</span>
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
              <p className="hero-card-title">À la FéeRima</p>
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

        {/* Fond #F5EFE9 : de la quote bar jusqu'avant Nos spécialités */}
        <div className="quote-map-wrapper">

          <QuotesBanner />

          {/* --- New Contact Section --- */}
          <section className="contact-section-wrapper">
            <div className="contact-container">

              {/* Left Column: Text & CTA */}
              <div className="contact-text-col">
                <span className="contact-subtitle">Bienvenue chez FéeRima</span>
                <h2 className="contact-main-title">
                  RAPIDE, FACILE & FIABLE
                  <span className="highlight">CONTACTEZ-NOUS !</span>
                </h2>
                <p className="contact-description">
                  Profitez d'un accompagnement personnalisé avec nos spécialistes.
                  Un cadre chaleureux, une écoute active et des solutions adaptées
                  à chaque situation.
                </p>
                <a href="tel:+212000000000" className="btn-contact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Appeler le cabinet
                </a>
              </div>

              {/* Right Column: Map */}
              <div className="contact-map-col">
                <LeafletMap />
              </div>

            </div>
          </section>

        </div>

        {/* Section Services - 3 blocs alternés */}
        <div className="services-section">
          <h2 className="services-main-title">Nos spécialités</h2>

          {/* Bloc 1: Équipe pluridisciplinaire */}
          <div className="service-block-row">
            <div className="service-text-col">
              <h3>Équipe pluridisciplinaire</h3>
              <p>Psychologues, éducateurs spécialisés, infirmiers-psy, pédopsychiatre, orthophoniste, art thérapeute, coach sportif, maîtresse de maison…</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
            <div className="service-image-col">
              <img src="/assets/feerima/hero.png" alt="Équipe pluridisciplinaire" />
            </div>
          </div>

          {/* Bloc 2: Approche personnalisée */}
          <div className="service-block-row reverse-row">
            <div className="service-image-col">
              <img src="/assets/feerima/hero2.png" alt="Approche personnalisée" />
            </div>
            <div className="service-text-col">
              <h3>Approche personnalisée</h3>
              <p>Un accompagnement adapté aux besoins et au rythme de chaque bénéficiaire, grâce à un projet personnalisé de soins comprenant consultations et ateliers thérapeutiques.</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
          </div>

          {/* Bloc 3: Cadre bienveillant et sécurisé */}
          <div className="service-block-row">
            <div className="service-text-col">
              <h3>Cadre bienveillant et sécurisé</h3>
              <p>Un lieu structuré où l’accueil est le premier soin et un lieu sûr où les droits, la sécurité et la confidentialité sont garantis pour les bénéficiaires et leurs familles.</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
            <div className="service-image-col">
              <img src="/assets/feerima/hero3.png" alt="Cadre bienveillant et sécurisé" />
            </div>
          </div>

          {/* Bloc 4: Méthodes validées et innovantes */}
          <div className="service-block-row reverse-row">
            <div className="service-image-col">
              <img src="/assets/feerima/hero4.png" alt="Méthodes validées et innovantes" />
            </div>
            <div className="service-text-col">
              <h3>Méthodes validées et innovantes</h3>
              <p>Des pratiques d’efficacité reconnues et mises à jour selon les avancées scientifiques, comme l’art-thérapie et les thérapies cognitivo-comportementales.</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
          </div>

          {/* Bloc 5: Place active des bénéficiaires */}
          <div className="service-block-row">
            <div className="service-text-col">
              <h3>Place active des bénéficiaires</h3>
              <p>Une participation des bénéficiaires à leur parcours de soins, dans le respect de leur rythme et de leurs capacités.</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
            <div className="service-image-col">
              <img src="/assets/feerima/hero.png" alt="Place active des bénéficiaires" />
            </div>
          </div>

          {/* Bloc 6: Implication de la famille */}
          <div className="service-block-row reverse-row">
            <div className="service-image-col">
              <img src="/assets/feerima/hero2.png" alt="Implication de la famille" />
            </div>
            <div className="service-text-col">
              <h3>Implication de la famille</h3>
              <p>Une collaboration étroite avec les familles tout au long de l’accompagnement.</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
          </div>

          {/* Bloc 7: Accessibilité */}
          <div className="service-block-row">
            <div className="service-text-col">
              <h3>Accessibilité</h3>
              <p>Prise en compte des réalités sociales et économiques locales pour rendre les soins disponibles à tous.</p>
              <button className="service-info-btn">Plus d'info</button>
            </div>
            <div className="service-image-col">
              <img src="/assets/feerima/hero3.png" alt="Accessibilité" />
            </div>
          </div>

          {/* Bloc 8: Dimension communautaire */}
          <div className="service-block-row reverse-row">
            <div className="service-image-col">
              <img src="/assets/feerima/hero4.png" alt="Dimension communautaire" />
            </div>
            <div className="service-text-col">
              <h3>Dimension communautaire</h3>
              <p>Actions de prévention de terrain, partenariats et intégration dans la société.</p>
              <button className="service-info-btn">Plus d'info</button>
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

      </main>

      <Footer />
    </div >
  );
}
