import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { UiProvider } from './context/UiContext.jsx';
import TopProgressBar from './components/TopProgressBar.jsx';
import { useAuth } from './hooks/useAuth.js';
import LoginPage from './pages/LoginPage.jsx';

function PrivateRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function TasksPagePlaceholder() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-2">TasksPage placeholder</h1>
        <p className="text-sm text-slate-600">
          Aquí irá el listado y CRUD de tareas.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <UiProvider>
        <TopProgressBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/tasks"
            element={(
              <PrivateRoute>
                <TasksPagePlaceholder />
              </PrivateRoute>
            )}
          />
          <Route path="*" element={<Navigate to="/tasks" replace />} />
        </Routes>
      </UiProvider>
    </AuthProvider>
  );
}

export default App;
