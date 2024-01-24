import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context state
interface ILoadingContext {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Create the context with an initial undefined value
const LoadingContext = createContext<ILoadingContext | undefined>(undefined);

// LoadingProvider props type
interface ILoadingProviderProps {
  children: ReactNode;
}

// Define the provider component
export const LoadingProvider: React.FC<ILoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = (): ILoadingContext => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
