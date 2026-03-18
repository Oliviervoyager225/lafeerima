import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  getAllUsers: () => apiClient.get('/users'),
  getUserById: (id) => apiClient.get(`/users/${id}`),
  getUserByEmail: (email) => apiClient.get(`/users/email/${email}`),
  createUser: (user) => apiClient.post('/users', user),
  updateUser: (id, user) => apiClient.put(`/users/${id}`, user),
  deleteUser: (id) => apiClient.delete(`/users/${id}`),
};

export const healthService = {
  checkHealth: () => apiClient.get('/health'),
};

export const admissionService = {
  createAdmission: (payload) => apiClient.post('/admissions', payload),
  getAdmissions: () => apiClient.get('/admissions'),
};

export const newsService = {
  getLatestNews: () => apiClient.get('/news'),
};

export default apiClient;
