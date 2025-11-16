import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { UiProvider } from './context/UiContext.jsx';
import TopProgressBar from './components/TopProgressBar.jsx';
import { useAuth } from './hooks/useAuth.js';
import LoginPage from './pages/LoginPage.jsx';
import TasksPage from './pages/TasksPage.jsx';

function PrivateRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
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
                <TasksPage />
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
