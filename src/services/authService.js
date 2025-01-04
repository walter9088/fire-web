import apiClient from './api';

async function login(username, password) {
  try {
    const response = await apiClient.post('/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

export { login };