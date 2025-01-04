import apiClient from '../network/apiClient';

async function getDevices() {
  try {
    const response = await apiClient.get('/devices');
    return response.data;
  } catch (error) {
    console.error('Error fetching devices:', error);
    throw error;
  }
}

export { getDevices };