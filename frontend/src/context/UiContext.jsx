import { createContext, useCallback, useState } from 'react';

export const UiContext = createContext({
  loadingCount: 0,
  startLoading: () => {},
  stopLoading: () => {},
});

export function UiProvider({ children }) {
  const [loadingCount, setLoadingCount] = useState(0);

  const startLoading = useCallback(() => {
    setLoadingCount((prev) => prev + 1);
  }, []);

  const stopLoading = useCallback(() => {
    setLoadingCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  return (
    <UiContext.Provider value={{ loadingCount, startLoading, stopLoading }}>
      {children}
    </UiContext.Provider>
  );
}
