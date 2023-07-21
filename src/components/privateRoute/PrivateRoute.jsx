import { useContext } from "react";
import { authContext } from "../authProvider/AuthProviders";
import { Navigate } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center fixed h-screen w-screen z-50 bg-slate-500/50">
  //       <ArrowPathIcon
  //         className={`animate-spin h-24 w-24 text-orange-500 `}
  //       ></ArrowPathIcon>
  //     </div>
  //   );
  // }
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
