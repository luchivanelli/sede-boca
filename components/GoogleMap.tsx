"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  latitude?: number;
  longitude?: number;
}

export default function MapComponent({
  latitude = -33.1578762,
  longitude = -60.5029,
}: MapComponentProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const customIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFD700'%3E%3Cpath d='M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      }),
    []
  );

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const map = L.map(containerRef.current, {
      center: [latitude, longitude],
      zoom: 16,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<div style="text-align:center; font-size:0.9rem;">
          <strong>Sede Social del C.A.B.J. de ARROYO SECO</strong><br/>
          Arroyo Seco, Santa Fe<br/>
          <a href="https://www.google.com/maps/place/Sede+Social+del+C.A.B.J.+de+ARROYO+SECO/@${latitude},${longitude},17z/data=!4m6!3m5!1s0x95b70b277b8178b7:0x5db8ba48a7b13e62!8m2!3d${latitude}!4d${longitude}!16s%2Fg%2F11j1hf1ky5?hl=es-419&entry=ttu" target="_blank" rel="noopener noreferrer" style="color:#2563eb; text-decoration:underline;">
            Ver en Google Maps
          </a>
        </div>`
      );

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [isMounted, latitude, longitude, customIcon]);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0d2a0d] rounded-xl">
        <p className="text-gray-400">Cargando mapa...</p>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full rounded-xl" />;
}
