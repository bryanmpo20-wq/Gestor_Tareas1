import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedToken = window.localStorage.getItem('gt_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('gt_token', newToken);
    }
  };

  const logout = () => {
    setToken(null);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('gt_token');
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
