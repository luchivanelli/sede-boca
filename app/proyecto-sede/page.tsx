"use client";
import { useEffect } from "react";
import Link from "next/link";
import { MapPin, Clock, ChevronRight, Building2 } from "lucide-react";
import inauguracionImg from "../../public/inauguracion2.jpg"
import inauguracionImg2 from "../../public/inauguracion3.jpeg"
import inauguracionImg3 from "../../public/inauguracion4.jpg"
import inauguracionImg4 from "../../public/inauguracion5.jpeg"
import inauguracionImg5 from "../../public/inauguracion6.jpg"
import inauguracionImg6 from "../../public/inauguracion7.jpeg"
import peña from "../../public/peña.jpg"

const phases = [
  { label: "Estructura y Paredes", status: "AVANZADO", pct: 90 },
  { label: "Fase de Terminaciones", status: "EN PROGRESO", pct: 60 },
  { label: "Cimientos", status: "COMPLETO", pct: 100 },
  { label: "Diseño Final", status: "PROYECTO", pct: 100 },
];

export default function ProyectoSede() {
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

        // Progress bars
        gsap.fromTo(
          ".progress-bar",
          { scaleX: 0 },
          {
            scaleX: 1, duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: "#phases", start: "top 80%" },
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
      <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a5e] via-[#090910] to-[#090910]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32">
          <span className="hero-el opacity-0 section-label block mb-4 sm:text-sm">Un Sueño Hecho Realidad</span>
          <h1 className="hero-el opacity-0 font-display font-900 text-5xl sm:text-7xl lg:text-8xl uppercase leading-none mb-6">
            Inauguración<br /><span className="text-[#FFD700]">Nuestra Casa</span>
          </h1>
          <p className="hero-el opacity-0 text-gray-300 max-w-xl sm:text-lg leading-relaxed mb-6">
            Celebrando el hito más grande de la Peña Arroyo Seco es de Boca. Un espacio para el sentimiento, la pasión y la familia Xeneize.
          </p>
          <div className="hero-el opacity-0 flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#FFD700]" />
              22 de junio, 2024
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#FFD700]" />
              Arroyo Seco, Santa Fe
            </span>
          </div>
        </div>
      </section>

      {/* CRÓNICA */}
      <section className="section-animate py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-up flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <h2 className="font-display font-800 text-3xl sm:text-4xl uppercase leading-tight">
                Crónica de una Noche Histórica
              </h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">Momentos capturados bajo el brillo de la gloria bostera.</p>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-rows-4 sm:h-[660px] gap-3 sm:gap-4 mb-10">
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden rounded-xl">
              <div className="h-48 sm:h-80 bg-gradient-to-br from-[#1a1a00] to-[#0d0d00] relative">
                <img src={inauguracionImg.src} alt="Inauguración" className="object-cover w-full h-48 sm:h-80 rounded-xl"/>
                <div className="max-w-[380px] absolute bottom-3 left-3 right-3 bg-black/50 py-1 px-2 rounded">
                  <p className="font-display font-700 text-white text-xs sm:text-sm uppercase">El Corte de Cinta</p>
                  <p className="text-gray-300 text-xs sm:text-sm">El momento exacto donde hicimos realidad nuestro sueño.</p>
                </div>
              </div>
            </div>
            <div className="fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-80 rounded-xl overflow-hidden flex-1">
                <img src={inauguracionImg2.src} alt="Inauguración 2" className="object-cover object-bottom w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-80 rounded-xl overflow-hidden flex-1">
                <img src={inauguracionImg3.src} alt="Inauguración 3" className="object-cover object-[80%,60%] w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
            
            <div className="fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-80 rounded-xl overflow-hidden flex-1">
                <img src={inauguracionImg4.src} alt="Inauguración 4" className="object-cover object-bottom w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
            <div className="sm:hidden fade-up col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-80 rounded-xl overflow-hidden flex-1">
                <img src={inauguracionImg5.src} alt="Inauguración 5" className="object-cover object-bottom w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden rounded-xl">
              <div className="h-48 sm:h-80 bg-gradient-to-br from-[#1a1a00] to-[#0d0d00] relative">
                <img src={inauguracionImg6.src} alt="Inauguración 6" className="object-cover w-full h-48 sm:h-80 rounded-xl"/>
              </div>
            </div>
            <div className="hidden sm:flex fade-up col-span-1 sm:row-span-1 flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-80 rounded-xl overflow-hidden flex-1">
                <img src={inauguracionImg5.src} alt="Inauguración 5" className="object-cover object-bottom w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACAS */}
      <section className="section-animate py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="fade-up section-label bg-[#FFD700]/10 px-3 py-1 rounded-sm block mb-4 sm:text-sm">Mención de Honor</span>
            <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase">
              Agradecimientos Especiales
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Enrique Oscar “Quique” Hrabina",
                names: ["La inauguración contó con la presencia de un jugador que se ganó el corazón de todos. El campeón emocionó a cada uno de los presentes y compartió un momento inolvidable sacándose fotos con todos."],
                icon: "★",
                highlight: false,
              },
              {
                title: "Gracias Pueblo Xeneize",
                names: ["A cada socio, que con su cuota y su esfuerzo hace posible que este sueño siga creciendo, le debemos cada paso que damos. Porque detrás de cada aporte hay compromiso, amor por los colores y ganas de construir algo grande entre todos."],
                icon: "🏆",
                highlight: true,
              },
              {
                title: "Hernan La Previa Irala",
                names: ["La peña agradece el préstamo de las banderas más icónicas del barrio para la inauguración de la sede, y destaca su presencia junto a su familia, con humildad, emoción y disposición para colaborar."],
                icon: "◆",
                highlight: false,
              },
            ].map((placa, i) => (
              <div
                key={i}
                className={`fade-up boca-card p-6 text-center ${
                  placa.highlight
                    ? "border-[#FFD700]/40 bg-[#FFD700]/5"
                    : ""
                }`}
              >
                <div className={`text-2xl mb-3 ${placa.highlight ? "text-[#FFD700]" : "text-gray-500"}`}>
                  {placa.icon}
                </div>
                <h3 className={`font-display font-700 text-sm sm:text-base uppercase tracking-wider mb-4 ${placa.highlight ? "text-[#FFD700]" : "text-gray-300"}`}>
                  {placa.title}
                </h3>
                <div className="space-y-1">
                  {placa.names.map((n) => (
                    <p key={n} className="text-gray-400 text-xs sm:text-sm">{n}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section id="phases" className="section-animate py-20 sm:py-28 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="fade-up font-display font-800 text-3xl sm:text-6xl uppercase mb-4">
                Vení a conocer tu<br />
                <span className="text-[#FFD700]">Sede Social</span>
              </h2>
              <p className="fade-up text-gray-300 mb-8 leading-relaxed sm:text-lg">
                 Un espacio pensado para vos, para encontrarnos, compartir y seguir creciendo como comunidad. Un lugar donde el deporte, la pasión y el sentido de pertenencia se viven en cada rincón.
              </p>
              <div className="fade-up flex flex-wrap gap-3">
                <Link href="https://maps.app.goo.gl/6jZD2Shef9f4MsZEA" target="_blank" className="btn-gold sm:text-base">
                  Cómo Llegar
                </Link>
                <Link href="/hacete-socio" className="btn-outline sm:text-base">
                  Conseguí tu propio espacio
                </Link>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-5">
              <img src={peña.src} alt="sede social" className="min-w-[300px] h-[300px] w-full lg:w-[550px] lg:h-full object-cover rounded-xl"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Quote({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
