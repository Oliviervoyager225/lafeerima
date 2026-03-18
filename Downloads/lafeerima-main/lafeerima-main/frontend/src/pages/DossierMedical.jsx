import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function DossierMedical() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero3.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Accès à votre dossier médical</h1>
                    <p>Un droit garanti par la loi, un engagement de transparence</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>VOTRE DROIT D'ACCÈS AU DOSSIER</h2>
                        <p>
                            Conformément à la loi du 4 mars 2002 relative aux droits des malades,
                            tout patient a le droit d'accéder à l'ensemble des informations
                            contenues dans son dossier médical. Ce droit peut être exercé
                            directement ou par l'intermédiaire d'un médecin de votre choix.
                        </p>
                        <p>
                            Pour les mineurs, les titulaires de l'autorité parentale exercent ce
                            droit pour leur compte, sauf opposition du mineur lui-même dans certaines
                            conditions prévues par la loi.
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
                            backgroundImage: "url('/assets/feerima/hero5.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>COMMENT FAIRE LA DEMANDE ?</h2>
                        <p>
                            La demande doit être adressée par courrier au médecin responsable de
                            votre prise en charge ou au secrétariat médical de La Fée Rima.
                            Accompagnez-la d'une copie d'une pièce d'identité. Les documents vous
                            seront communiqués dans un délai de 8 jours (ou 2 mois si les
                            informations datent de plus de 5 ans).
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero.png')",
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
