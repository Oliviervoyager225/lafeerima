import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { admissionService } from '../services/api';
import '../styles/Preadmission.css';

const appointmentOptions = [
  'Pedopsychiatre',
  'Psychologue',
  'Orthophoniste',
  'Educateur specialise',
  'Art-therapeute',
  'Autre',
];

const initialForm = {
  applicantRoleBeneficiary: false,
  applicantRoleParent: false,
  beneficiaryName: '',
  beneficiaryBirthDate: '',
  beneficiaryNationality: '',
  beneficiaryGender: '',
  beneficiaryPhone: '',
  beneficiaryEmail: '',
  beneficiaryStatus: '',
  beneficiarySchool: '',
  appointmentWith: [],
  appointmentOther: '',
  appointmentDate: '',
  referralSource: '',
  fatherName: '',
  fatherAddress: '',
  fatherProfession: '',
  fatherPhone: '',
  fatherEmail: '',
  motherName: '',
  motherAddress: '',
  motherProfession: '',
  motherPhone: '',
  motherEmail: '',
  guardianName: '',
  guardianAddress: '',
  guardianProfession: '',
  guardianPhone: '',
  guardianEmail: '',
  contactName: '',
  contactAddress: '',
  contactProfession: '',
  contactPhone: '',
  contactEmail: '',
  consentAccuracy: false,
  consentUsage: false,
  signatureDate: '',
  signatureName: '',
};

export default function Preadmission() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAppointmentToggle = (option) => {
    setFormData((prev) => {
      const exists = prev.appointmentWith.includes(option);
      return {
        ...prev,
        appointmentWith: exists
          ? prev.appointmentWith.filter((item) => item !== option)
          : [...prev.appointmentWith, option],
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      const payload = {
        ...formData,
        appointmentWith: formData.appointmentWith.filter((item) => item !== 'Autre'),
        appointmentOther: formData.appointmentWith.includes('Autre')
          ? formData.appointmentOther
          : '',
      };
      await admissionService.createAdmission(payload);
      setStatus({ type: 'success', message: 'Formulaire envoye avec succes.' });
      setFormData(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: 'Erreur lors de l envoi du formulaire.' });
      console.error(error);
    }
  };

  return (
    <div className="preadmission-page">
      <Navbar />

      <main className="preadmission-main">
        <div className="container preadmission-grid">
          <aside className="preadmission-info">
            <h1>La-Fee-Rima Care</h1>
            <p>
              Afin de faciliter votre accueil, nous vous invitons a remplir ce
              formulaire. Il nous aidera a connaitre votre situation et vos attentes.
              Nous construirons ensemble un accompagnement personnalise.
            </p>
            <div className="info-block">
              <h3>Merci d ajouter obligatoirement une copie de :</h3>
              <ul>
                <li>La piece d identite du beneficiaire</li>
                <li>
                  La piece d identite des deux parents (si le beneficiaire est mineur)
                  ou du detenteur de l autorite parentale
                </li>
                <li>L attestation d assurance et ou de mutuelle (si concerne)</li>
                <li>Les documents medicaux recents</li>
              </ul>
            </div>
            <div className="info-block">
              <h3>Ce dossier est a envoyer :</h3>
              <label className="checkbox-row">
                <input type="checkbox" disabled />
                Soit par mail
              </label>
              <label className="checkbox-row">
                <input type="checkbox" disabled />
                Soit a l accueil du Centre specialise La-Fee-Rima
              </label>
            </div>
          </aside>

          <section className="preadmission-form">
            <h2>Formulaire de preadmission</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="applicantRoleBeneficiary"
                    checked={formData.applicantRoleBeneficiary}
                    onChange={handleCheckboxChange}
                  />
                  Le beneficiaire
                </label>
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="applicantRoleParent"
                    checked={formData.applicantRoleParent}
                    onChange={handleCheckboxChange}
                  />
                  Le parent / tuteur
                </label>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <span>1</span>
                  <h3>Informations generales du beneficiaire</h3>
                </div>
                <div className="field-grid">
                  <input
                    type="text"
                    name="beneficiaryName"
                    placeholder="Nom et prenoms"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="date"
                    name="beneficiaryBirthDate"
                    value={formData.beneficiaryBirthDate}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="beneficiaryNationality"
                    placeholder="Nationalite"
                    value={formData.beneficiaryNationality}
                    onChange={handleChange}
                  />
                  <select
                    name="beneficiaryGender"
                    value={formData.beneficiaryGender}
                    onChange={handleChange}
                  >
                    <option value="">Sexe</option>
                    <option value="F">Femme</option>
                    <option value="M">Homme</option>
                    <option value="Autre">Autre</option>
                  </select>
                  <input
                    type="tel"
                    name="beneficiaryPhone"
                    placeholder="Numero de telephone"
                    value={formData.beneficiaryPhone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="beneficiaryEmail"
                    placeholder="Adresse e-mail"
                    value={formData.beneficiaryEmail}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="beneficiaryStatus"
                    placeholder="Statut scolaire ou professionnel"
                    value={formData.beneficiaryStatus}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="beneficiarySchool"
                    placeholder="Etablissement frequent / domaine d activite"
                    value={formData.beneficiarySchool}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <span>2</span>
                  <h3>Votre consultation</h3>
                </div>
                <div className="checkbox-grid">
                  {appointmentOptions.map((option) => (
                    <label key={option} className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={formData.appointmentWith.includes(option)}
                        onChange={() => handleAppointmentToggle(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {formData.appointmentWith.includes('Autre') && (
                  <input
                    type="text"
                    name="appointmentOther"
                    placeholder="Autre (precisez)"
                    value={formData.appointmentOther}
                    onChange={handleChange}
                  />
                )}
                <div className="field-grid">
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="referralSource"
                    placeholder="Nom de la personne / structure qui vous a adresse"
                    value={formData.referralSource}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <span>3</span>
                  <h3>Pere</h3>
                </div>
                <div className="field-grid">
                  <input
                    type="text"
                    name="fatherName"
                    placeholder="Nom et prenoms"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="fatherAddress"
                    placeholder="Adresse"
                    value={formData.fatherAddress}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="fatherProfession"
                    placeholder="Profession"
                    value={formData.fatherProfession}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="fatherPhone"
                    placeholder="Numero de telephone"
                    value={formData.fatherPhone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="fatherEmail"
                    placeholder="Adresse e-mail"
                    value={formData.fatherEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <span>4</span>
                  <h3>Mere</h3>
                </div>
                <div className="field-grid">
                  <input
                    type="text"
                    name="motherName"
                    placeholder="Nom et prenoms"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="motherAddress"
                    placeholder="Adresse"
                    value={formData.motherAddress}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="motherProfession"
                    placeholder="Profession"
                    value={formData.motherProfession}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="motherPhone"
                    placeholder="Numero de telephone"
                    value={formData.motherPhone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="motherEmail"
                    placeholder="Adresse e-mail"
                    value={formData.motherEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <span>5</span>
                  <h3>Tuteur</h3>
                </div>
                <div className="field-grid">
                  <input
                    type="text"
                    name="guardianName"
                    placeholder="Nom et prenoms"
                    value={formData.guardianName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="guardianAddress"
                    placeholder="Adresse"
                    value={formData.guardianAddress}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="guardianProfession"
                    placeholder="Profession"
                    value={formData.guardianProfession}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="guardianPhone"
                    placeholder="Numero de telephone"
                    value={formData.guardianPhone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="guardianEmail"
                    placeholder="Adresse e-mail"
                    value={formData.guardianEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="section-header">
                  <span>6</span>
                  <h3>Personne a contacter</h3>
                </div>
                <div className="field-grid">
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Nom et prenoms"
                    value={formData.contactName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="contactAddress"
                    placeholder="Adresse"
                    value={formData.contactAddress}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="contactProfession"
                    placeholder="Profession"
                    value={formData.contactProfession}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="contactPhone"
                    placeholder="Numero de telephone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="contactEmail"
                    placeholder="Adresse e-mail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-section consent">
                <div className="section-header">
                  <span>7</span>
                  <h3>Consentement et confidentialite</h3>
                </div>
                <p>
                  Vos donnees sont confidentielles, securisees et utilisees uniquement
                  dans le cadre de votre prise en charge. Elles ne seront jamais transmises
                  sans accord.
                </p>
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="consentAccuracy"
                    checked={formData.consentAccuracy}
                    onChange={handleCheckboxChange}
                    required
                  />
                  J atteste que les informations transmises sont exactes
                </label>
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="consentUsage"
                    checked={formData.consentUsage}
                    onChange={handleCheckboxChange}
                    required
                  />
                  J autorise La-Fee-Rima a utiliser ces donnees uniquement dans le cadre
                  de l evaluation et le suivi de ma demande
                </label>
                <div className="field-grid">
                  <input
                    type="date"
                    name="signatureDate"
                    value={formData.signatureDate}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="signatureName"
                    placeholder="Signature des parents / tuteur legal / beneficiaire majeur"
                    value={formData.signatureName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {status.type !== 'idle' && (
                <div className={`form-status ${status.type}`}>{status.message}</div>
              )}

              <button type="submit" className="btn primary full">
                Envoyer le dossier
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
