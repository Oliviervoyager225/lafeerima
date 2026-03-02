import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function ConsultationsExternes() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Les consultations externes</h1>
                    <p>Un suivi personnalisé pour les jeunes de 10 à 25 ans</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>QU'EST-CE QU'UNE CONSULTATION EXTERNE ?</h2>
                        <p>
                            Les consultations externes permettent à un jeune de bénéficier d'un
                            suivi psychiatrique ou psychologique sans être hospitalisé. Elles
                            sont proposées directement au sein de La FéeRima, en journée, sur
                            rendez-vous. Ce dispositif favorise la continuité des soins tout en
                            maintenant le jeune dans son cadre de vie habituel (école, famille,
                            activités).
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
                        <h2>COMMENT ACCÉDER AUX CONSULTATIONS ?</h2>
                        <p>
                            L'accès aux consultations externes se fait sur orientation médicale
                            (médecin traitant, pédiatre, urgences…) ou par démarche spontanée.
                            Un premier rendez-vous d'évaluation est proposé afin de définir le
                            plan de soins le plus adapté à la situation du jeune et de sa
                            famille.
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

                <section className="hist-section section-3">
                    <div className="hist-stacked-images">
                        <div
                            className="hist-image-box gray-box-small"
                            style={{
                                backgroundImage: "url('/assets/feerima/hero5.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <div
                            className="hist-image-box gray-box-small"
                            style={{
                                backgroundImage: "url('/assets/feerima/portrait.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    <div className="hist-content">
                        <h2>LES PROFESSIONNELS IMPLIQUÉS</h2>
                        <p>
                            <strong>Une équipe pluridisciplinaire</strong>
                            <br />
                            Chaque consultation mobilise une équipe composée de psychiatres,
                            psychologues, infirmiers et éducateurs spécialisés. Ensemble, ils
                            assurent un suivi global qui prend en compte les dimensions médicale,
                            psychologique et sociale du jeune.
                        </p>
                        <p>
                            <strong>Un accompagnement de la famille</strong>
                            <br />
                            La famille est associée au parcours de soins dès le premier entretien.
                            Des consultations familiales peuvent être proposées en complément du
                            suivi individuel.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
