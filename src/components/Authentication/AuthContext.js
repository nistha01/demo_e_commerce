import React, { useState, createContext } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider component
const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const[token,setToken]=useState("");

  // Provide state and state updater
  const value = {
    loggedIn,
    setLoggedIn,
    token,
    setToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
