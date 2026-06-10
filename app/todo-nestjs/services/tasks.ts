import { api } from './api';

export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (title: string) => {
  const response = await api.post('/tasks', { title });
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await api.delete(`/users/tasks/${id}`);
  return response.data;
};       

export const completeTask = async (id: number) => {
  const response = await api.patch(`/tasks/${id}`, { completed: 1 });
  return response.data;
};