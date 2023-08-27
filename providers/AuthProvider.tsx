"use client";

import React from "react";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContextProvider>
      <GoogleOAuthProvider clientId="831389152289-frodr4ms9gtkoun6ap9eg09q2b2ca9fp.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
    </AuthContextProvider>
  );
};

export default AuthProvider;
