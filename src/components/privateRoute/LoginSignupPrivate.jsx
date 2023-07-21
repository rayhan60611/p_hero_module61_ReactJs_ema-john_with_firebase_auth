import React, { useContext } from "react";
import { authContext } from "../authProvider/AuthProviders";
import { Navigate } from "react-router-dom";

const LoginSignupPrivate = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (!user) {
    return children;
  }
  return <Navigate to="/shop" replace={true} />;
};

export default LoginSignupPrivate;
