import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const api = axios.create({
  baseURL: process.env.URL
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('token');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});