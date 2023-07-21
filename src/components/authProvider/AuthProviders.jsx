import React, { Children, useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const authContext = createContext(null);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  // createUserWithEmailAndPassword
  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signInWithEmailAndPassword
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    user,
    createUser,
    logIn,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthProviders;
