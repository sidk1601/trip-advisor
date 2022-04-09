import React, { useContext, useState } from 'react';

const LoadingContext = React.createContext();
const LoadingUpdateContext = React.createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const useLoadingUpdate = () => {
  return useContext(LoadingUpdateContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading((loading) => !loading);
  };

  return (
    <LoadingContext.Provider value={isLoading}>
      <LoadingUpdateContext.Provider value={toggleLoading}>
        {children}
      </LoadingUpdateContext.Provider>
    </LoadingContext.Provider>
  );
};
