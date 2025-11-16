import client from '../api/client.js';

export async function fetchTasks(params = {}) {
  const response = await client.get('/tasks', { params });
  return response.data;
}

export async function createTask(data) {
  const response = await client.post('/tasks', data);
  return response.data;
}

export async function updateTask(id, data) {
  const response = await client.put(`/tasks/${id}`, data);
  return response.data;
}

export async function deleteTask(id) {
  const response = await client.delete(`/tasks/${id}`);
  return response.data;
}
