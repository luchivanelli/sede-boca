"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Bus, MessageCircle, Shield, Users, ArrowRight, ChevronRight, MapPin, CircleDollarSign } from "lucide-react";
import viajes1 from "../../public/viajes.jpg";
import viajes2 from "../../public/viajes2.jpg";
import viajes3 from "../../public/viajes3.jpg";
import viajes4 from "../../public/viajes4.jpg";
import viajes5 from "../../public/viajes5.png";
import viajes6 from "../../public/viajes6.jpeg";
import viajes7 from "../../public/viajes7.jpeg";

const matches = [
  { date: "15", month: "MAYO", day: "DOM 19:00hs", home: "BOCA", vs: "TALLERES", venue: "Estadio Alberto J. Armando", league: "LIGA PROFESIONAL", available: true },
  { date: "22", month: "MAYO", day: "MIÉ 21:30hs", home: "BOCA", vs: "NACIONAL", venue: "Estadio Alberto J. Armando", league: "COPA SUDAMERICANA", available: true },
  { date: "02", month: "JUNIO", day: "SÁB 20:15hs", home: "BOCA", vs: "VÉLEZ", venue: "Estadio Alberto J. Armando", league: "LIGA PROFESIONAL", available: false },
  { date: "09", month: "JUNIO", day: "DOM 17:00hs", home: "BOCA", vs: "LANÚS", venue: "Estadio Alberto J. Armando", league: "LIGA PROFESIONAL", available: false },
];

const features = [
  { icon: Shield, title: "Viaje Seguro", desc: "Unidades habilitadas con aire acondicionado y choferes profesionales con años de experiencia en la ruta." },
  { icon: Bus, title: "Solo Traslado", desc: "El servicio no incluye entrada al estadio. Es requisito ser socio para ingresar a La Bombonera." },
  { icon: Users, title: "Clima Familiar", desc: "Nuestros viajes se caracterizan por el respeto y la camaradería entre hinchas de todas las edades." },
];

export default function Viajes() {
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
          ".match-row",
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#matches", start: "top 80%" },
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001040] via-[#090910] to-[#090910]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="hero-el opacity-0">
                <span className="section-label sm:text-sm bg-[#FFD700]/10 px-3 py-1 rounded-sm inline-block mb-6">
                  🏟️ Próximo Destino: El Templo
                </span>
              </div>
              <h1 className="hero-el opacity-0 font-display font-900 text-5xl sm:text-6xl lg:text-7xl uppercase leading-none mb-6">
                Sentí la<br />
                <span className="text-[#FFD700]">mística</span><br />
                xeneize
              </h1>
              <p className="hero-el opacity-0 text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Viajá con la peña oficial de Arroyo Seco. Seguridad, comodidad y la pasión inigualable de ir a ver al más grande.
              </p>
              <div className="hero-el opacity-0 flex flex-wrap gap-3">
                <a href="https://api.whatsapp.com/send?phone=543402658558&text=Hola!%20Quiero%20reservar%20mi%20lugar%20para%20el%20próximo%20viaje%20a%20La%20Bombonera" target="_blank" className="btn-gold sm:text-base">
                  <Bus size={16} />
                  Reservar mi Lugar
                </a>
                <a href="https://api.whatsapp.com/send?phone=543402658558&text=Hola!%20Quiero%20consultar%20los%20costos%20del%20próximo%20viaje%20a%20La%20Bombonera" target="_blank" className="btn-outline sm:text-base">
                  <MessageCircle size={16} />
                  Consultar Costos
                </a>
              </div>
            </div>

            {/* Right - Bus photo placeholder */}
            <div className="hero-el opacity-0">
              <div className="relative rounded-xl overflow-hidden">
                <div className="h-64 sm:h-96 bg-gradient-to-br from-[#001a5e]/60 to-[#0d0d16] flex items-center justify-center relative">
                  <img src={viajes4.src} alt="Viaje" className="w-full h-full object-cover object-[50%,65%]" />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                    <p className="text-[#FFD700] font-display font-700 text-sm uppercase">¡Arroyo Seco presente!</p>
                    <p className="text-gray-200 text-xs">Viaje vs River Plate · Noviembre 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO DEL VIAJE */}
      <section className="section-animate py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase mb-3">
            Información del Viaje
          </h2>
          <p className="fade-up text-gray-400 mb-12 text-sm sm:text-base">Todo lo que necesitás saber antes de subirte al cole.</p>

          <div className="grid lg:grid-cols-1 gap-10 items-start">
            {/* Punto de salida */}
            <div className="space-y-4 grid">
              <div className="grid lg:grid-cols-2 gap-4 items-start">
                <div className="fade-up boca-card p-6 space-y-3">                 
                  <MapPin size={20} className="text-[#FFD700]" />
                  <h3 className="font-display font-700 text-white uppercase tracking-wide text-sm sm:text-xl">Punto de Salida</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    Salimos desde nuestra peña <a href="https://maps.app.goo.gl/6jZD2Shef9f4MsZEA" target="_blank" className="text-[#FFD700] hover:underline">(Gaboto 641, Arroyo Seco)</a>. La puntualidad es clave para llegar a tiempo al ritual de la previa.
                  </p>
                </div>
                <div className="fade-up boca-card p-6 h-full space-y-3">
                  <CircleDollarSign size={20} className="text-[#FFD700]" />
                  <h3 className="font-display font-700 text-white uppercase tracking-wide text-sm sm:text-xl">Política de Pago</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    Los pagos de los viajes a la cancha deben realizarse hasta 48 horas antes de partir. En caso de no realizarlo, no podremos garantizar la reserva del lugar.
                  </p>                  
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="fade-up boca-card p-4">
                    <Icon size={20} className="text-[#FFD700] mb-3" />
                    <h4 className="font-display font-700 text-white text-sm sm:text-xl uppercase tracking-wide mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDA EN LA RUTA */}
      <section className="section-animate py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase mb-10">
            Nuestra Banda en la Ruta
          </h2>
          <div className="flex items-center justify-start sm:justify-end shrink-0 mb-6">
            <a
              href="https://www.instagram.com/stories/highlights/18031141157199450/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center text-xs sm:text-sm uppercase tracking-[0.22em] text-white transition hover:border-[#FFD700] hover:text-[#FFD700] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] sm:px-5"
            >
              Ver más
              <span className="ml-2 text-base transition-transform group-hover:translate-x-1"><ArrowRight size={15}/></span>
            </a>
          </div>
          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-rows-4 sm:h-[780px] gap-3 sm:gap-4 mb-10">
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden rounded-xl">
              <div className="h-48 sm:h-96 bg-gradient-to-br from-[#1a1a00] to-[#0d0d00] relative">
                <img src={viajes1.src} alt="Viaje 1" className="object-cover w-full h-48 sm:h-96 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={viajes2.src} alt="Viaje 2" className="object-cover sm:object-[50%,70%] w-full h-48 sm:h-80 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={viajes3.src} alt="Viaje 7" className="object-cover sm:object-[50%,80%] w-full h-48 sm:h-80 rounded-xl"/>
              </div>
            </div>
            
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={viajes5.src} alt="Viaje 5" className="object-cover sm:object-bottom w-full h-48 sm:h-72 rounded-xl"/>
              </div>
            </div>
            <div className="sm:hidden fade-up col-span-2 sm:col-span-1 sm:row-span-1 flex flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={viajes7.src} alt="Viaje 6" className="object-cover sm:object-bottom w-full h-48 sm:h-96 rounded-xl"/>
              </div>
            </div>
            <div className="fade-up col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden rounded-xl">
              <div className="h-48 sm:h-96 bg-gradient-to-br from-[#1a1a00] to-[#0d0d00] relative">
                <img src={viajes6.src} alt="Viaje 7" className="object-cover w-full h-48 sm:h-96 rounded-xl"/>
              </div>
            </div>
            <div className="hidden sm:flex fade-up col-span-1 sm:row-span-1 flex-col gap-3 sm:gap-4">
              <div className="h-48 sm:h-96 rounded-xl overflow-hidden flex-1">
                <img src={viajes7.src} alt="Viaje 6" className="object-cover object-[50%,90%] w-full h-48 sm:h-60 rounded-xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="section-animate py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="boca-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#001a5e]/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="fade-up font-display font-900 text-3xl sm:text-4xl lg:text-5xl uppercase mb-4">
                ¿Estás listo para viajar?
              </h2>
              <p className="fade-up text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto">
                Hacé click en el botón de abajo para hablar directamente con nosotros por WhatsApp. Te pasamos info de disponibilidad y precios actualizados al instante.
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=543402658558&amp;"
                target="_blank"
                className="fade-up inline-flex items-center gap-3 bg-[#25D366] text-white font-display font-700 text-sm uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-[#20c05b] transition-colors"
              >
                <MessageCircle size={20} />
                Enviar Mensaje
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
