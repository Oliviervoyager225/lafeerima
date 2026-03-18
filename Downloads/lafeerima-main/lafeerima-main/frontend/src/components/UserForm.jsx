import React from 'react';
import '../styles/UserForm.css';

export default function UserForm({ user, onSubmit, onCancel }) {
  const [formData, setFormData] = React.useState(
    user || { name: '', email: '', description: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2>{user ? 'Modifier' : 'Créer'} un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />
        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {user ? 'Mettre à jour' : 'Créer'}
          </button>
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
