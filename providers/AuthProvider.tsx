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
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
        {children}
      </GoogleOAuthProvider>
    </AuthContextProvider>
  );
};

export default AuthProvider;
