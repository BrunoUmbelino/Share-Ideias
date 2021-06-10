import React, { createContext } from "react";
import useAuth from "./hook/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
  const { authenticated, handleLogin, loginError, handleLogout, loading } =
    useAuth();

  return (
    <Context.Provider
      value={{ authenticated, handleLogin, loginError, handleLogout, loading }}
    >
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context };
