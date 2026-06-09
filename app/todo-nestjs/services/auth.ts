import { api } from './api';
import * as SecureStore from 'expo-secure-store';

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  const { token } = response.data;
  
  await SecureStore.setItemAsync('token', token); // salva o token seguro
  
  return response.data;
};

export const logout = async () => {
  await SecureStore.deleteItemAsync('token');
};

export const getToken = async () => {
  return await SecureStore.getItemAsync('token');
};