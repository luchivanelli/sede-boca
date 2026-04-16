"use client";

import { MapProvider } from "@/components/GoogleMapsProvider";
import { ReactNode } from "react";

export default function LayoutClient({ children }: { children: ReactNode }) {
  return <MapProvider>{children}</MapProvider>;
}
