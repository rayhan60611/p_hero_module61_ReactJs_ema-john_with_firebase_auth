import { useContext } from "react";
import { authContext } from "../authProvider/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
