import React from "react";
import { Navigate } from "react-router-dom";
import { useAccess } from "./AccessProvider";

const ProtectedRoute = ({ children }) => {
  const { canAccessResult } = useAccess();

  if (!canAccessResult) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
