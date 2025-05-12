"use client";  // Ensure this is a client-side component

import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

// Define the type for children prop
type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default Provider;
