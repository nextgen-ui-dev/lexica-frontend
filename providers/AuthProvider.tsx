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
      <GoogleOAuthProvider clientId="80482142556-9728ljvhv307gbd5jkepiose0thpmmiq.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
    </AuthContextProvider>
  );
};

export default AuthProvider;
