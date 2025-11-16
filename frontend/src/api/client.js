import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8000/api',
});

client.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('gt_token');

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default client;
