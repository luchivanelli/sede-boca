"use client";

import { ReactNode } from "react";

interface MapProviderProps {
  children: ReactNode;
}

export function MapProvider({ children }: MapProviderProps) {
  return <>{children}</>;
}
