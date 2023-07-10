"use client";

import React, { useEffect, useState } from "react";

interface HydrationHandlerProps {
  children: React.ReactNode;
}

const HydrationHandler = ({ children }: HydrationHandlerProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default HydrationHandler;
