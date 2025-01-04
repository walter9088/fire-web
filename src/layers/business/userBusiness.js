import apiClient from '../network/apiClient';

async function getUserProfile() {
  try {
    const response = await apiClient.get('/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

export { getUserProfile };