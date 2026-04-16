"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Heart, HandHeart, Users, Calendar, ArrowRight } from "lucide-react";
import solidaria1 from "../../public/solidaria1.jpg"
import solidaria2 from "../../public/solidaria2.jpg"
import solidaria3 from "../../public/solidaria3.jpg"
import solidaria4 from "../../public/solidaria4.jpg"
import solidaria5 from "../../public/solidaria5.jpg"
import solidaria6 from "../../public/solidaria6.jpg"
import solidaria7 from "../../public/solidaria7.jpg"
import solidaria8 from "../../public/solidaria8.jpg"
import solidaria9 from "../../public/solidaria9.jpg"
import solidaria11 from "../../public/solidaria11.jpg"

const events = [
  {
    title: "Centros de salud y hospitales",
    desc: "Realizamos donaciones de medicamentos a diferentes establecimientos de salud: Hospital SAMCO N° 50, Centro de Salud \"Ramón Carrillo\" (Arroyo Seco), Centro de Salud \"Eva Perón\" (Fighiera), etc.",
    icon: "💊",
  },
  {
    title: "Día de las Infancias",
    desc: "Celebramos el día de las infancias en el \"Paraje El Ombu\". Decenas de chicos participaron de juegos recreativos, lúdicos, juegos inflables, metegol, personajes animados, regalos, almuerzo y merienda.",
    icon: "🫂",
  },
  {
    title: "Tapitas plásticas",
    desc: "La peña es sede oficial del Hospital Garrahan, con el objetivo de recibir y recolectar tapitas destinadas a su reutilización. Lo recaudado a través del reciclado del plástico se destina a financiar tratamientos médicos para niños con cáncer, así como también a sostener programas de salud.",
    icon: "♻️",
  },
  {
    title: "Jornada en nuestra sede",
    desc: "En nuestras instalaciones realizamos, junto a la Fundación “Tú Eres Digno”, una jornada para las chicas y chicos de dicho espacio, con actividades como película, maquillaje artístico, porcelana fría, metegol, percusión y más; compartimos el almuerzo y festejamos los cumpleaños del mes en un encuentro lleno de alegría.",
    icon: "💙",
  },
];

const galleryItems = [
  { label: "Donación Navideña Barrio San Martín", tag: "EVENTO PRINCIPAL", big: true, bg: "from-[#1a1500] to-[#0d0d00]" },
  { label: "Colecta de Insumos", big: false, bg: "from-[#001a00] to-[#000d00]" },
  { label: "Pintura en Escuelas", big: false, bg: "from-[#001a1a] to-[#000d0d]" },
  { label: "Almuerzo Comunitario Mensual", big: false, bg: "from-[#1a0005] to-[#0d0003]" },
];

export default function JornadasSolidarias() {
  useEffect(() => {
    let ctx: any;
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-el",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
        );

        document.querySelectorAll(".section-animate").forEach((section) => {
          gsap.fromTo(
            section.querySelectorAll(".fade-up"),
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 82%" },
            }
          );
        });

        gsap.fromTo(
          ".gallery-item",
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#gallery", start: "top 80%" },
          }
        );

        gsap.fromTo(
          ".event-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: "#events", start: "top 80%" },
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
      <section className="relative min-h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a5e] via-[#090910] to-[#090910]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32">
          <span className="hero-el opacity-0 section-label block mb-4">Compromiso Xeneize</span>
          <h1 className="hero-el opacity-0 font-display font-900 text-5xl sm:text-7xl lg:text-7xl uppercase leading-none mb-6">
            Corazón Azul<br />y Oro en{" "}
            <span className="text-[#FFD700]">Arroyo<br />Seco</span>
          </h1>
          <p className="hero-el opacity-0 text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            Nuestra pasión trasciende más allá de los colores. Somos una comunidad unida por la solidaridad, trabajando codo a codo para ayudar a los que más lo necesitan.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <h2 className="font-display font-800 text-3xl sm:text-4xl uppercase">Nuestra Huella Solidaria</h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Momentos capturados de algunas de nuestras intervenciones en barrios, hospitales y centros comunitarios.</p>
            </div>
            <div className="flex items-center justify-start sm:justify-end shrink-0">
              <a
                href="https://www.instagram.com/stories/highlights/18351835189184913/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-[0.22em] text-white transition hover:border-[#FFD700] hover:text-[#FFD700] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] sm:px-5"
              >
                Ver más
                <span className="ml-2 text-base transition-transform group-hover:translate-x-1"><ArrowRight size={15}/></span>
              </a>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-rows-4 sm:h-[780px] gap-3 sm:gap-4 mb-10">
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden rounded-xl">
              <div className="h-48 sm:h-96 bg-gradient-to-br from-[#1a1a00] to-[#0d0d00] relative">
                <img src={solidaria1.src} alt="Solidaria 1" className="object-cover w-full h-48 sm:h-96 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={solidaria11.src} alt="Solidaria 11" className="object-cover object-center w-full h-48 sm:h-80 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={solidaria7.src} alt="Solidaria 7" className="object-cover object-bottom w-full h-48 sm:h-80 rounded-xl"/>
              </div>
            </div>
            
            <div className="fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={solidaria4.src} alt="Solidaria 4" className="object-cover object-[50%,70%] w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
            <div className="sm:hidden fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={solidaria6.src} alt="Solidaria 6" className="object-cover object-bottom w-full h-48 sm:h-96 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden rounded-xl">
              <div className="h-48 sm:h-96 bg-gradient-to-br from-[#1a1a00] to-[#0d0d00] relative">
                <img src={solidaria8.src} alt="Solidaria 8" className="object-cover w-full h-48 sm:h-96 rounded-xl"/>
              </div>
            </div>
            <div className="hidden sm:flex fade-up col-span-1 sm:row-span-1 flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={solidaria6.src} alt="Solidaria 6" className="object-cover object-bottom w-full h-48 sm:h-60 rounded-xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADAS */}
      <section id="events" className="py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-2">
            <span className="section-label">Huella Solidaria</span>
          </div>
          <h2 className="font-display font-800 text-3xl sm:text-4xl uppercase mb-10">
            Lo que Hicimos Juntos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {events.map((event, i) => (
              <div
                key={i}
                className="event-card opacity-0 boca-card p-6"
              >
                {/* Date */}
                <div className="flex items-start justify-end mb-4">
                  <span className="text-3xl sm:text-4xl">{event.icon}</span>
                </div>
                <h3 className="font-display font-700 text-white text-lg sm:text-xl uppercase mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-animate py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="fade-up font-display font-900 text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight mb-6">
            Tu compromiso<br />hace la diferencia
          </h2>
          <p className="fade-up text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            No importa cuánto tiempo o recursos tengas, siempre hay una forma de ayudar. <br /> Cada aporte cuenta, cada gesto suma. Sumate a la peña y hacé la diferencia.
          </p>
          <div className="fade-up flex flex-wrap gap-4 justify-center">
            <a href="/hacete-socio" className="btn-gold">
              <Heart size={16} />
              Quiero ser Voluntario
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
