"use client";

import { SessionProvider } from "next-auth/react";

export function ProvidersAuth({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
