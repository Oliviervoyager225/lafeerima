import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function PersonneDeConfiance() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero3.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Personne de confiance</h1>
                    <p>Un droit fondamental pour être accompagné dans votre parcours de soins</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>QU'EST-CE QUE LA PERSONNE DE CONFIANCE ?</h2>
                        <p>
                            La personne de confiance est une personne de votre choix (un proche,
                            un ami, un médecin de ville…) que vous désignez pour vous accompagner
                            lors de vos démarches et consultations, vous aider à formuler vos
                            souhaits, et être consultée si vous n'êtes plus en état d'exprimer
                            votre volonté.
                        </p>
                        <p>
                            Pour les mineurs, ce rôle est généralement assuré par les titulaires
                            de l'autorité parentale, mais une désignation spécifique peut être
                            envisagée en accord avec l'équipe médicale.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero4.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>COMMENT LA DÉSIGNER ?</h2>
                        <p>
                            La désignation s'effectue par écrit lors de votre admission à La
                            FéeRima, à l'aide du formulaire dédié remis par notre secrétariat.
                            Cette désignation est valable pour la durée de votre prise en charge
                            et peut être modifiée ou révoquée à tout moment sur simple demande.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero2.png')",
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
