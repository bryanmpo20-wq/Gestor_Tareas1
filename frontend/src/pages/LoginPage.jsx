import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { UiContext } from '../context/UiContext.jsx';
import { loginRequest } from '../services/authService.js';

export default function LoginPage() {
  const { token, login } = useAuth();
  const { startLoading, stopLoading } = useContext(UiContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (token) {
    return <Navigate to="/tasks" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);
    startLoading();

    try {
      const data = await loginRequest({ email, password });
      const tokenFromApi = data?.token;

      if (!tokenFromApi) {
        setError('No se pudo obtener el token de autenticación.');
        return;
      }

      login(tokenFromApi);
      navigate('/tasks', { replace: true });
    } catch (err) {
      if (err?.validation) {
        setError(err.message || 'El correo y la contraseña son obligatorios.');
      } else {
        setError('Error al iniciar sesión. Inténtalo de nuevo.');
      }
    } finally {
      stopLoading();
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-slate-900">Iniciar sesión</h1>
        <p className="text-sm text-slate-600 mb-6">
          Accede a tu cuenta del Gestor de Tareas.
        </p>

        {error && (
          <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
         >
            {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}
