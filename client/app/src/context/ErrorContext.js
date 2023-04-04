import { createContext, useState } from 'react';

export const ErrorContext = createContext(null);

export const ErrorContextProvider=({ children })=> {
  const [error, setError] = useState(null);

  const closeError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, setError, closeError }}>
      {children}
    </ErrorContext.Provider>
  );
};