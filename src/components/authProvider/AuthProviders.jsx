import React, { Children, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const authContext = createContext(null);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  // createUserWithEmailAndPassword
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const contextValue = {
    user,
    createUser,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthProviders;
