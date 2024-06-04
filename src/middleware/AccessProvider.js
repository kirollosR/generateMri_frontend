import React, { createContext, useState, useContext } from "react";

const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [canAccessResult, setCanAccessResult] = useState(false);

  return (
    <AccessContext.Provider value={{ canAccessResult, setCanAccessResult }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => useContext(AccessContext);
