import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Historique.css';

export default function Historique() {
  return (
    <div className="historique-page">
      <Navbar />
      <main>
        {/* Section principale - Titre et bouton */}
        <section className="historique-hero">
          <div className="historique-hero-content">
            <h1>Denouncing Pleas.<br />And Praising Painisi.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s.</p>
            <button className="historique-btn">Sharpening Cool</button>
            <button className="historique-btn-secondary">Web Sites Still Be To</button>
          </div>
          <div className="historique-hero-image">
            <div className="historique-image-placeholder"></div>
          </div>
        </section>

        {/* Section - Use Cuttings */}
        <section className="historique-section">
          <h2>Use Cuttings</h2>
          <div className="historique-cards-row">
            {[1,2,3].map(i => (
              <div className="historique-card" key={i}>
                <div className="historique-card-image"></div>
                <h3>Lorem Ipsum Simply</h3>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the</p>
                <a className="historique-link" href="#">Learn More &gt;</a>
              </div>
            ))}
          </div>
        </section>

        {/* Section - Lorem Dumm */}
        <section className="historique-section">
          <h2>Lorem Dumm</h2>
          <div className="historique-cards-row">
            {[1,2,3].map(i => (
              <div className="historique-card" key={i}>
                <div className="historique-card-image"></div>
                <h3>Lorem Ipsum Simply</h3>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the</p>
                <a className="historique-link" href="#">Learn More &gt;</a>
              </div>
            ))}
          </div>
        </section>

        {/* Section - Lorem Ipsum Is Simply So */}
        <section className="historique-section">
          <div className="historique-flex">
            <div className="historique-flex-content">
              <h2>Lorem Ipsum Is Simply So</h2>
              <p>Lorem Ipsum is simply dummy text of The Printing Lorem Ipsum Is Simply Dummy Text The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s. When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen.</p>
              <button className="historique-btn">Lorem Ipsum</button>
            </div>
            <div className="historique-flex-image"></div>
          </div>
        </section>

        {/* Section - Lorem Ipsum simply text */}
        <section className="historique-section">
          <div className="historique-flex">
            <div className="historique-flex-image"></div>
            <div className="historique-flex-content">
              <h2>Lorem Ipsum simply text.</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen. Lorem ipsum is simply dummy text, remaining essentially unchanged. It was popularised.</p>
              <button className="historique-btn">Some Use</button>
            </div>
          </div>
        </section>

        {/* Section - Contrary To Popular Belief */}
        <section className="historique-section">
          <div className="historique-flex">
            <div className="historique-flex-content">
              <h2>Contrary To Popular Belief<br />Lorem Ipsum Is Not Simply Random</h2>
              <p>Lorem Ipsum is simply dummy text of The Printing Lorem Ipsum Is Simply Dummy Text The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s. When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen. Lorem Ipsum Is Simply Dummy Text, Remaining Essentially Unchanged.</p>
              <button className="historique-btn">Pursues Us</button>
            </div>
            <div className="historique-flex-image"></div>
          </div>
        </section>

        {/* Section - Quote */}
        <section className="historique-section">
          <div className="historique-quote">
            <span className="historique-quote-icon">❝</span>
            <div>
              <h2>Contrary To Popular Beli</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
            </div>
          </div>
        </section>

        {/* Section - Logos */}
        <section className="historique-section historique-logos-row">
          {[1,2,3,4].map(i => (
            <div className="historique-logo" key={i}>Smile</div>
          ))}
        </section>

        {/* Footer Section */}
        <footer className="historique-footer">
          <div className="historique-footer-main">
            <div className="historique-footer-left">
              <h2>There Are Many Variations Of Passage</h2>
              <button className="historique-btn">123-456-7890</button>
            </div>
            <div className="historique-footer-right">
              <div className="historique-footer-table">
                <div>
                  <h3>Dummy text</h3>
                  <ul>
                    <li>Many</li>
                    <li>Deloris</li>
                    <li>Noshumi</li>
                    <li>Pursues</li>
                    <li>Max Tetra</li>
                  </ul>
                </div>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <ul>
                    <li>Lorem Ipsum Has To</li>
                    <li>Lorem Ipsum Has</li>
                  </ul>
                </div>
                <div>
                  <h3>Established A</h3>
                  <ul>
                    <li>If You Are Going Use</li>
                    <li>Lorem Is</li>
                  </ul>
                </div>
                <div>
                  <h3>Pursues Us</h3>
                  <ul>
                    <li>smile@theeramanc.com</li>
                    <li>123-456-7890 (CA)</li>
                    <li>smile@theeramanc.com</li>
                    <li>123-456-7890 (EN)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="historique-footer-bottom">
            <span>There Are Many Variations Of Passage Of Lorem Ipsum Avail</span>
            <span>Que Voluptas</span>
            <span>Amazing Consequuntur</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
