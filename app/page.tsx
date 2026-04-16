"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Shield,
  Tag,
  Building2,
  CheckCircle2,
} from "lucide-react";
import logoCabj from "../public/escudoBoca.png"
import logoPeña from "../public/favicon-peña.png"
import dynamic from "next/dynamic";

// Importar el mapa dinámicamente para evitar problemas con SSR
const MapComponent = dynamic(() => import("@/components/GoogleMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0d2a0d] rounded-xl">
      <p className="text-gray-400">Cargando mapa...</p>
    </div>
  ),
});

export default function Inicio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const sedeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero entrance
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-el",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.3 }
        );

        gsap.fromTo(
          "#logoCabjHome",
          { opacity: 0, },
          { opacity: 1, duration: 2, ease: "power3.out", delay: 0.6 }
        );

        // Identity section
        gsap.fromTo(
          "#identity .fade-up, #logoPeñaHome",
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#identity", start: "top 80%" },
          }
        );

        // Sede section
        gsap.fromTo(
          "#sede .fade-up",
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#sede", start: "top 80%" },
          }
        );

        gsap.fromTo(
          ".sede-img",
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: "#sede", start: "top 80%" },
          }
        );

        // CTA
        gsap.fromTo(
          "#cta .fade-up",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#cta", start: "top 85%" },
          }
        );

        // Location
        gsap.fromTo(
          "#location .fade-up",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: "#location", start: "top 85%" },
          }
        );
      });
    };
    load();
    return () => ctx?.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a5e] via-[#090910] to-[#090910]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="hero-el opacity-0">
                <span className="inline-block section-label bg-[#FFD700]/10 px-3 py-1 rounded-sm mb-6 sm:text-sm">
                  ★ Arroyo Seco, Santa Fe
                </span>
              </div>
              <h1 className="hero-el opacity-0 font-display font-900 text-6xl lg:text-8xl uppercase leading-none mb-6">
                Arroyo Seco<br />
                <span className="text-[#FFD700]">es de Boca</span>
              </h1>
              <p className="hero-el opacity-0 text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Unidos por la misma pasión en cada rincón de nuestra ciudad. En Arroyo Seco, el alma Xeneize nunca deja de latir.
              </p>
              <div className="hero-el opacity-0 flex flex-wrap gap-3">
                <Link href="/hacete-socio" className="btn-gold sm:text-base">
                  Sumate hoy <ChevronRight size={16} />
                </Link>
                <Link href="/proyecto-sede" className="btn-outline sm:text-base">
                  Ver Sede
                </Link>
              </div>
              {/* Social */}
              <div className="hero-el opacity-0 flex items-center gap-4 mt-10">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: MessageCircle, label: "WhatsApp" },
                ].map(({ icon: Icon, label }) => (
                  <Link
                    key={label}
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors text-sm sm:text-base font-display tracking-wider"
                  >
                    <Icon size={16} />
                    <span className="sm:text-lg">{label}</span>
                  </Link>
                ))}
              </div>
            </div>       
            <img src={logoCabj.src} alt="logo cabj" id="logoCabjHome" className="hidden xl:inline-block w-[700px] opacity-0"/>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-8 bg-[#FFD700] animate-pulse" />
        </div>
      </section>

      {/* IDENTIDAD */}
      <section id="identity" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-between">
            {/* Logo */}
            <img src={logoPeña.src} alt="logo peña" id="logoPeñaHome" className="lg:max-w-[300px] sm:max-w-[200px] max-w-[150px] mx-auto lg:mx-0"/>

            {/* Text */}
            <div>
              <div className="fade-up">
                <span className="section-label sm:text-sm">Nuestra Identidad</span>
                <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl uppercase mt-3 mb-6 leading-tight">
                  ¿Quiénes somos?
                </h2>
              </div>
              <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                Somos una asociación civil orientada a lo cultural, social y deportivo. Nuestra misión es fomentar el sentimiento xeneize y realizar actividades en beneficio a la sociedad.
              </p>
              <p className="fade-up text-gray-300 leading-relaxed mb-8 sm:text-lg">
                Nos une el amor por los colores y el orgullo de tener nuestra sede, un espacio donde cada hincha puede sentirse parte, compartiendo partidos, comidas, fiestas y toda la mística de La Bombonera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SOCIOS */}
      <section id="cta" className="py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="boca-card p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-6">
                  Sé parte de esta historia
                </h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-6 sm:text-lg">
                  Tu aporte es fundamental para seguir creciendo. Al hacerte socio de la institución, accedés a beneficios exclusivos.
                </p>
                <ul className="fade-up space-y-3 mb-8">
                  {[
                    "Acceso prioritario a eventos, cenas y partidos.",
                    "Uso de las instalaciones de la sede sin costo adicional.",
                    "Sorteos mensuales por camisetas, entradas y demás premios.",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-gray-300 text-sm sm:text-base">
                      <CheckCircle2 size={16} className="text-[#FFD700] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/hacete-socio" className="fade-up btn-gold inline-flex sm:text-base">
                  HACETE SOCIO AHORA
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="location" className="py-20 sm:py-28 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-up mb-2">
            <span className="section-label sm:text-sm">Encontranos</span>
          </div>
          <h2 className="fade-up font-display font-800 text-3xl sm:text-5xl uppercase mb-10">
            Nuestra Ubicación
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="fade-up flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="font-display font-700 text-white text-sm uppercase tracking-wide mb-1 sm:text-2xl">Dirección</p>
                  <a href="https://maps.app.goo.gl/6jZD2Shef9f4MsZEA" target="_blank" className="text-[#FFD700] text-sm sm:text-lg hover:underline">Gaboto 641</a>
                  <p className="text-gray-400 text-sm sm:text-lg">Arroyo Seco, Provincia de Santa Fe, Argentina</p>
                </div>
              </div>             
            </div>

            {/* Map placeholder */}
            <div className="fade-up h-52 sm:h-64 overflow-hidden relative rounded-xl">
              <MapComponent latitude={-33.1578762} longitude={-60.5029} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
