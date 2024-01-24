import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context state
interface LoadingContextState {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Create the context with an initial undefined value
const LoadingContext = createContext<LoadingContextState | undefined>(undefined);

// LoadingProvider props type
interface LoadingProviderProps {
  children: ReactNode;
}

// Define the provider component
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = (): LoadingContextState => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
