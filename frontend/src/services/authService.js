import client from '../api/client.js';

export async function loginRequest(credentials) {
  const email = credentials?.email?.trim();
  const password = credentials?.password?.trim();

  if (!email || !password) {
    const error = new Error('El correo y la contraseña son obligatorios.');
    error.validation = true;
    throw error;
  }

  // Simulación de llamada asíncrona al "backend"
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    token: 'fake-token-123',
    user: {
      email,
    },
  };
}
