import { api } from './api';

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const createUser = async (name: string, email: string, password: string) => {
  const response = await api.post('/users', { name, email, password });
  return response.data;
};

