import client from '../api/client.js';

export async function loginRequest(credentials) {
  const response = await client.post('/login', {
    email: credentials.email,
    password: credentials.password,
  });

  return response.data;
}
