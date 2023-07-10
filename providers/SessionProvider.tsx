'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface NextAuthSessionProviderProps {
  children?: React.ReactNode;
}

const NextAuthSessionProvider = ({
  children,
}: NextAuthSessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
