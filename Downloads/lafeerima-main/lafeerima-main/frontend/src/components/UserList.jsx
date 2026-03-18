import React from 'react';
import '../styles/UserList.css';

export default function UserList({ users, onEdit, onDelete, onAdd }) {
  return (
    <div className="users-container">
      <div className="header">
        <h1>Gestion des Utilisateurs</h1>
        <button className="btn-add" onClick={onAdd}>+ Ajouter un utilisateur</button>
      </div>

      {users.length === 0 ? (
        <div className="empty-state">
          <p>Aucun utilisateur trouvé. Créez le premier!</p>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.description || '-'}</td>
                  <td className="actions">
                    <button 
                      className="btn-edit" 
                      onClick={() => onEdit(user)}
                    >
                      Modifier
                    </button>
                    <button 
                      className="btn-delete" 
                      onClick={() => onDelete(user.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
