"use client";
import { useEffect, useState } from "react";
import { Bus, Tag, Building2, Send, CheckCircle2 } from "lucide-react";
import socios from "../../public/socios.jpg";

const benefits = [
  {
    icon: Bus,
    title: "Prioridad en Viajes y Gestiones",
    desc: "Acceso anticipado a la reserva de lugares para cada partido en La Bombonera. Ademas, tenés prioridad en gestiones en conjunto con el Departamento Interior del Club Atlético Boca Juniors",
  },
  {
    icon: Tag,
    title: "Sorteos mensuales",
    desc: "Sorteos mensuales por camisetas, entradas y muchos más premios para nuestros socios. Una oportunidad para participar, ganar y seguir disfrutando de beneficios exclusivos.",
  },
  {
    icon: Building2,
    title: "Acceso a la Sede",
    desc: "Disfrutá de las instalaciones de nuestra sede, un espacio pensado para compartir en comunidad: eventos sociales para todas las edades, fiestas, encuentros y un salón de usos múltiples donde también vivimos cada partido de Boca como en casa.",
  },
];

export default function HaceteSocio() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    dni: "",
    whatsapp: "",
    email: "",
    ciudad: "",
    domicilio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "543400537393";
    const message = `Hola! Quiero asociarme a la peña. Mi nombre es ${form.nombre}, soy de ${form.ciudad} y mi dirección es ${form.domicilio}. Mi dni es ${form.dni} y mi número de teléfono es ${form.whatsapp}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

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

        gsap.fromTo(
          ".benefit-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: "#benefits", start: "top 82%" },
          }
        );

        gsap.fromTo(
          "#form-section .fade-up",
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#form-section", start: "top 82%" },
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
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#090910] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 space-y-6">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="hero-el opacity-0 section-label block mb-4 sm:text-sm">Unite a la Familia</span>
              <h1 className="hero-el opacity-0 font-display font-900 text-5xl sm:text-6xl lg:text-7xl uppercase leading-none mb-6">
                Llevá tu pasión a<br />
                <span className="text-[#FFD700]">otro nivel.</span>
              </h1>
              <p className="hero-el opacity-0 text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
                Ser parte de la Peña Arroyo Seco no es solo tener un carnet, es ser protagonista del crecimiento de Boca en nuestra ciudad.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={socios.src}
              alt="Socios"
              className="rounded-xl object-cover object-[50%,55%] h-52 sm:h-72 w-full"
            />
          </div>
        </div>   
      </section>

      {/* BENEFICIOS */}
      <section id="benefits" className="py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-800 text-3xl sm:text-4xl uppercase mb-3">Beneficios Exclusivos</h2>
          <p className="text-gray-400 mb-12 text-sm">Disfrutá de todo lo que significa ser parte de la familia Xeneize en Arroyo Seco.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="benefit-card opacity-0 boca-card p-6 sm:p-8">
                <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#FFD700]" />
                </div>
                <h3 className="font-display font-700 text-white text-lg uppercase mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form-section" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="boca-card p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-[#FFD700] mx-auto mb-4" />
                <h2 className="font-display font-800 text-2xl sm:text-3xl uppercase mb-3">¡Solicitud Enviada!</h2>
                <p className="text-gray-300 leading-relaxed">
                  Un representante de la comisión directiva se pondrá en contacto a la brevedad para finalizar el trámite.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="fade-up font-display font-800 text-2xl sm:text-3xl uppercase mb-3">
                    Solicitud de Membresía
                  </h2>
                  <p className="fade-up text-gray-400 text-sm sm:text-base leading-relaxed">
                    Completá tus datos y un representante de la institución se pondrá en contacto para finalizar el trámite.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="fade-up grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs sm:text-sm font-display tracking-widest uppercase mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        placeholder="Juan Pérez"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full bg-[#0d0d16] border border-[#1e1e2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs sm:text-sm font-display tracking-widest uppercase mb-2">
                        DNI 
                      </label>
                      <input
                        type="text"
                        placeholder="00.000.000"
                        value={form.dni}
                        onChange={(e) => setForm({ ...form, dni: e.target.value })}
                        className="w-full bg-[#0d0d16] border border-[#1e1e2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="fade-up grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs sm:text-sm font-display tracking-widest uppercase mb-2">
                        WhatsApp de Contacto
                      </label>
                      <input
                        type="tel"
                        placeholder="+54 3402 000000"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="w-full bg-[#0d0d16] border border-[#1e1e2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs sm:text-sm font-display tracking-widest uppercase mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#0d0d16] border border-[#1e1e2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                        required
                      />
                    </div>
                    <div className="fade-up">
                      <label className="block text-gray-400 text-xs sm:text-sm font-display tracking-widest uppercase mb-2">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        placeholder="Ciudad de residencia"
                        value={form.ciudad}
                        onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                        className="w-full bg-[#0d0d16] border border-[#1e1e2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                        required
                      />
                    </div>
                    <div className="fade-up">
                      <label className="block text-gray-400 text-xs sm:text-sm font-display tracking-widest uppercase mb-2">
                        Domicilio
                      </label>
                      <input
                        type="text"
                        placeholder="Calle y número"
                        value={form.domicilio}
                        onChange={(e) => setForm({ ...form, domicilio: e.target.value })}
                        className="w-full bg-[#0d0d16] border border-[#1e1e2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
                        required
                      />
                    </div>
                  </div>


                  <div className="fade-up pt-2">
                    <button type="submit" className="w-full btn-gold py-4 justify-center text-sm sm:text-base">
                      <Send size={18} />
                      Enviar Solicitud Ahora
                    </button>
                    <p className="text-gray-500 text-xs sm:text-sm text-center mt-3">
                      Al enviar esta solicitud, confirmás tu compromiso con los valores y el estatuto de la peña.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
