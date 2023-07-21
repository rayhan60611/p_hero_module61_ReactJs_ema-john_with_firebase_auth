import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export const authContext = createContext(null);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUserWithEmailAndPassword
  const createUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signInWithEmailAndPassword
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    user,
    createUser,
    logIn,
    logOut,
    loading,
  };

  return (
    <authContext.Provider value={contextValue}>
      {loading ? (
        <div className="flex items-center justify-center fixed h-screen w-screen z-50 bg-slate-500/50">
          <ArrowPathIcon
            className={`animate-spin h-24 w-24 text-orange-500 `}
          ></ArrowPathIcon>
        </div>
      ) : (
        children
      )}
    </authContext.Provider>
  );
};

export default AuthProviders;
