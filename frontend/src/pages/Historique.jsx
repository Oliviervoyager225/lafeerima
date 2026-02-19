import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';

export default function Historique() {
  return (
    <div className="historique-page">
      <Navbar />
      <main className="historique-main">
        {/* Section 1: Text Left, Image Right */}
        <section className="hist-section section-1">
          <div className="hist-content">
            <h1>LOREM IPSUM IS<br />SIMPLY TEXT.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
            </p>
          </div>
          <div className="hist-image-box gray-box-large"></div>
        </section>

        {/* Section 2: Box Left, Text Center, Box Right */}
        <section className="hist-section section-2">
          <div className="hist-image-box gray-box-medium"></div>
          <div className="hist-content center-content">
            <h2>LOREM DUMMY<br />ESTABLISHED</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem.
            </p>
            <button className="hist-btn-red">SOMES US</button>
          </div>
          <div className="hist-image-box gray-box-medium"></div>
        </section>

        {/* Section 3: Two Boxes Left, Text Right */}
        <section className="hist-section section-3">
          <div className="hist-stacked-images">
            <div className="hist-image-box gray-box-small"></div>
            <div className="hist-image-box gray-box-small"></div>
          </div>
          <div className="hist-content">
            <h2>VARIOUS VERSIONS<br />HAVE EVOLVED OVER THE<br />YEARS, SOMETIMES<br />BYOLING</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="emphasis-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
