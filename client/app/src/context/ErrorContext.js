import { createContext, useState } from 'react';
import { Error } from '../components/Error/Error';

export const ErrorContext = createContext(null);

export const ErrorContextProvider=({ children })=> {
  const [error, setError] = useState(null);

  const closeError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, setError, closeError }}>
      {error && <Error message={error} closeError={closeError} />}
      {children}
    </ErrorContext.Provider>
  );
};