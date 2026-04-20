"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Quote } from "lucide-react";
import iniciosObra from "../../public/inicios-obra.jpeg"
import logoCabj from "../../public/escudoBoca.png"
import boca2000 from "../../public/bj2000.jpg"
import boca2020 from "../../public/bj2020.jpg"
import bandera from "../../public/bandera.jpg"
import peñaActual from "../../public/peña-actual.jpg"
import inauguracion from "../../public/inauguracion.jpg"
import colectivo from "../../public/colectivo.jpg"
import battaglia from "../../public/battaglia.jpg"

const milestones = [
  {
    year: "1985-1989",
    label: "El comienzo",
    title: "La visita de Boca",
    desc: "En 1985, el plantel de Boca visitó Arroyo Seco para la Fiesta de la Papa. Esta visita motivó a los bosteros locales a crear una peña.",
  },
  {
    year: "2000-2004",
    label: "El regreso",
    title: "Época Dorada",
    desc: "Durante la época dorada de Bianchi, se armó un nuevo grupo con alquiler de local y cenas con figuras del club.",
  },
  {
    year: "2011-2012",
    label: "La fundación",
    title: "Nace Arroyo Seco es de Boca",
    desc: "El 13 de abril de 2012 se marca el inicio oficial. Llevamos nuestra bandera a 'La Bombonera', organizamos eventos solidarios y mantuvimos un lugar físico para ver partidos.",
  },
  {
    year: "2024",
    label: "El sueño",
    title: "Inauguración de la Sede",
    desc: "El 22 de junio de 2024, inauguramos nuestra sede social propia, construida con esfuerzo y sudor de socios.",
  },
];

export default function Historia() {
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
              opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 82%" },
            }
          );
        });

        // Timeline items
        gsap.fromTo(
          ".milestone",
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: "#timeline", start: "top 80%" },
          }
        );

        // Archive images
        gsap.fromTo(
          ".archive-item",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: "#archive", start: "top 80%" },
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
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a5e] via-[#090910] to-[#090910]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <span className="hero-el opacity-0 section-label block mb-4">Legado Xeneize</span>
              <h1 className="hero-el opacity-0 font-display font-900 text-5xl sm:text-6xl lg:text-7xl uppercase leading-none">
                La historia<br />de una{" "}
                <span className="text-[#FFD700]">pasión</span><br />sin fronteras.
              </h1>
            </div>
            <div className="hero-el opacity-0">
              <p className="text-gray-300 leading-relaxed sm:text-lg">
                Desde los primeros encuentros de hinchas que soñaban con algo propio, crecimos con esfuerzo y pasión hasta transformarnos en el corazón Xeneize de Arroyo Seco, construido a pulmón y con identidad solidaria.
              </p>
            </div>
          </div>

          {/* Stadium image placeholder */}
          <div className="hero-el opacity-0 mt-10 relative rounded-xl overflow-hidden h-52 sm:h-72">
            <img
              src={iniciosObra.src}
              alt=""
              className="rounded-xl object-cover object-center md:object-center h-52 sm:h-72 w-full"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs sm:text-base text-gray-300 font-display tracking-wider">
              Donde todo comenzó
            </div>
          </div>
        </div>
      </section>

      {/* PIONEROS */}
      <section className="section-animate py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="fade-up">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#1e1e2a] to-[#111118] border border-[#1e1e2a] flex items-center justify-center overflow-hidden">
                  <img src={logoCabj.src} alt="logo cabj" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-6">
                Los Inicios (1985-1989)
              </h2>
              <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                En 1985, el plantel del Club Atlético Boca Juniors visitó Arroyo Seco para un partido organizado por funcionarios políticos durante la Fiesta de la Papa. Boca jugó contra ASAC, empatando 1-1 y ganando por penales.
              </p>
              <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                Esta visita fue furor entre los bosteros locales, motivando a muchos a soñar con crear una peña propia. En 1989 se realizó una gran cena con Navarro Montoya y Jose Luis Villareal, afianzando la idea.
              </p>
              <p className="fade-up text-gray-300 leading-relaxed sm:text-lg">
                Se conformó el primer grupo de amigos bosteros que comenzaron a viajar a La Bombonera, compartiendo la visión de un futuro común.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉPOCAS */}
      <section className="section-animate py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-20">
            {/* 2000/2004 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="fade-up font-display font-800 text-3xl uppercase mb-4 text-[#FFD700]">2000-2004</h3>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase leading-tight mb-6">Época Dorada</h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  Desde los años 90 hasta principios del 2000, se empezó a armar algo nuevamente a través de la época dorada donde el equipo de Bianchi ganaba campeonatos.
                </p>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  En 2004 se conformó otra nueva peña, alquilando un local durante varios años donde se realizaron cenas con figuras como Rojitas y Graciani. Se organizaban continuos viajes a La Bombonera.
                </p>
              </div>
              <div className="order-1 lg:order-2 fade-up h-64 sm:h-80 rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] flex items-center justify-center">
                <img src={boca2000.src} alt="Boca Juniors 2000" className="rounded-xl h-64 sm:h-80 w-full object-cover" />
              </div>
            </div>

            {/* 2011/2012 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up h-64 sm:h-80 rounded-xl bg-gradient-to-br from-[#2e1a0d] to-[#1a0d05] flex items-center justify-center">
                <img src={bandera.src} alt="Bandera en la Bombonera" className="rounded-xl h-64 sm:h-80 w-full object-cover object-bottom" />
              </div>
              <div>
                <h3 className="fade-up font-display font-800 text-3xl uppercase mb-4 text-[#FFD700]">2011-2012</h3>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase leading-tight mb-6">Nace Arroyo Seco es de Boca</h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  Al llegar el año 2011, se armó un grupo conformado por jóvenes y algunos mayores que hasta hoy perdura ininterrumpidamente. El 13 de abril de 2012 marcó el inicio oficial.
                </p>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  Comenzamos alquilando un local con pantalla gigante, buffet y parrillero. Nos propusimos llevar nuestra bandera a La Bombonera y realizar acciones solidarias en la comunidad.
                </p>
              </div>
            </div>

            {/* 2013/2016 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="fade-up font-display font-800 text-3xl uppercase mb-4 text-[#FFD700]">2013-2016</h3>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase leading-tight mb-6">Consolidación y Crecimiento</h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  En 2013 nos visitaron Ratin y Marzolini con más de 500 personas. En 2014 realizamos acciones solidarias con escuelas rurales y ese fue el puntapié inicial para seguir ayudando a los más necesitados. En 2015 obtuvimos la Personería Jurídica N° 307 de Santa Fe.
                </p>
                <p className="fade-up text-gray-300 leading-relaxed sm:text-lg">
                  En 2016, con la visita de Sebastián Battaglia, presentamos el proyecto de adquirir un terreno propio con fondos de la peña.
                </p>
              </div>
              <div className="order-1 lg:order-2 fade-up h-64 sm:h-80 rounded-xl bg-gradient-to-br from-[#0d1a0d] to-[#050d05] flex items-center justify-center">
                <img src={battaglia.src} alt="Sebastián Battaglia" className="rounded-xl h-64 sm:h-80 w-full object-cover"/>
              </div>
            </div>

            {/* 2018/2020 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up h-64 sm:h-80 rounded-xl bg-gradient-to-br from-[#1a0d1a] to-[#0d050d] flex items-center justify-center">
                <img src={boca2020.src} alt="Bandera en la Bombonera" className="rounded-xl h-64 sm:h-80 w-full object-cover"/>
              </div>
              <div>
                <h3 className="fade-up font-display font-800 text-3xl uppercase mb-4 text-[#FFD700]">2018-2020</h3>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase leading-tight mb-6">La Sede Propia</h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  En 2018 nos visitó otro campeón del mundo con Boca, el Chino Benitez con Daniel Campos, histórico periodista. Ese año presentamos el proyecto de la futura sede a construir y es aquí donde nos propusimos: La Sede se construirá sin ayuda estatal, por el sudor del hincha de Boca.
                </p>
                <p className="fade-up text-gray-300 leading-relaxed sm:text-lg">
                  En 2020, con la pandemia, la peña continuó activa realizando acciones solidarias y avanzando en las obras de la sede.
                </p>
              </div>
            </div>

            {/* 2021/2024 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="fade-up font-display font-800 text-3xl uppercase mb-4 text-[#FFD700]">2021-2024</h3>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase leading-tight mb-6">El Sueño Realizado</h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  En 2021 la obra avanzó a pasos agigantados y se siguió gestionando medicamentos para los hospitales, dispensarios y salas médicas. El 2022 fue otro año exitoso, alcanzando los 600 socios. En 2023 casi finalizamos la obra: colores xeneizes, interior pintado, cocina equipada y aires acondicionados.
                </p>
                <p className="fade-up text-gray-300 leading-relaxed sm:text-lg">
                  El 22 de junio de 2024, inauguramos nuestra sede social propia. Después de años de esfuerzo, dedicación y sacrificio, cumplimos el sueño que parecía imposible.
                </p>
              </div>
              <div className="order-1 lg:order-2 fade-up h-64 sm:h-80 rounded-xl bg-gradient-to-br from-[#003087] to-[#FFD700] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <img src={inauguracion.src} alt="Inauguracion" className="rounded-xl h-64 sm:h-80 w-full object-cover"/>
              </div>
            </div>

            {/* 2025 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up h-64 sm:h-80 rounded-xl bg-gradient-to-br from-[#1a0d1a] to-[#0d050d] flex items-center justify-center">
                <img src={colectivo.src} alt="Colectivo" className="rounded-xl h-64 sm:h-80 w-full object-cover object-bottom"/>
              </div>
              <div>
                <h3 className="fade-up font-display font-800 text-3xl uppercase mb-4 text-[#FFD700]">2025</h3>
                <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl uppercase leading-tight mb-6">Kilómetros de Pasión</h2>
                <p className="fade-up text-gray-300 leading-relaxed mb-4 sm:text-lg">
                  2025 quedará grabado como el año en que dimos un paso gigante: conseguimos nuestro propio colectivo. Un símbolo de crecimiento, esfuerzo y pasión que nos impulsa a seguir llevando el sentimiento Xeneize a cada viaje hacia La Bombonera.
                </p>
                <p className="fade-up text-gray-300 leading-relaxed sm:text-lg">
                  Ese mismo año, ampliamos nuestro compromiso social con el inicio de talleres culturales para niños: lecturas narrativas, porcelana fría, pintura y dibujo, creando un espacio de aprendizaje y comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-800 text-2xl uppercase tracking-widest text-center text-gray-400 mb-14">
            Hitos del Camino
          </h2>

          {/* Desktop timeline */}
          <div className="hidden md:grid grid-cols-4 gap-6 relative">
            <div className="absolute top-5 left-12 right-12 h-px bg-[#1e1e2a]" />
            {milestones.map((m, i) => (
              <div key={i} className="milestone opacity-0 relative">
                <div className="timeline-dot mb-4" />
                <div className="text-[#FFD700] font-display font-900 text-2xl mb-1">{m.year}</div>
                <h3 className="font-display font-700 text-white uppercase text-sm mb-2">{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="milestone opacity-0 flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="timeline-dot" />
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-[#1e1e2a] mt-2" />}
                </div>
                <div className="pb-4">
                  <div className="text-[#FFD700] font-display font-900 text-xl mb-0.5">{m.year}</div>
                  <h3 className="font-display font-700 text-white uppercase text-sm mb-1">{m.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALIDAD */}
      <section className="section-animate py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="fade-up font-display font-800 text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight mb-8">Actualidad</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="fade-up text-gray-300 leading-relaxed mb-6 text-lg">
                Hoy seguimos creciendo y fortaleciendo nuestro compromiso con la comunidad a través de jornadas solidarias que reflejan los valores que nos identifican.
              </p>
              <p className="fade-up text-gray-300 leading-relaxed mb-6 text-lg">
                Al mismo tiempo, continuamos generando espacios de encuentro con cenas y fiestas Xeneizes, donde la pasión por Boca se comparte, se celebra y nos sigue uniendo como familia. Luego de concretar el proyecto de la sede social, se vienen otros proyectos muy lindos a futuro. La escuelita de futbol es un sueño de todos.
              </p>
              <p className="fade-up text-gray-300 leading-relaxed mb-6 text-lg">
                Siempre decimos y pedimos que la peña esté activa de por vida. Es por eso que invitamos a la juventud para que se integre porque esto sigue.
              </p>
              <p className="fade-up text-gray-300 leading-relaxed text-lg font-display font-700">
                Somos más de 1000 socios. Porque así es el hincha de Boca: Boca nunca teme luchar.
              </p>
            </div>
            <div className="fade-up h-64 sm:h-96 rounded-xl bg-gradient-to-br from-[#003087] to-[#FFD700] flex items-center justify-center relative overflow-hidden">
              <img src={peñaActual.src} alt="Peña Actual" className="rounded-xl h-64 sm:h-96 w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section-animate py-20 sm:py-28 bg-[#0d0d16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="fade-up text-[#FFD700] mb-6 flex justify-center">
            <Quote size={40} />
          </div>
          <blockquote className="fade-up font-display font-700 text-2xl sm:text-3xl lg:text-4xl leading-snug text-white italic text-balance">
            "Boca es el sueño que nos une, el legado que nos inspira y la fuerza que nos impulsa a seguir adelante, siempre juntos, siempre Boca"
          </blockquote>
          <div className="fade-up w-12 h-0.5 bg-[#FFD700] mx-auto mt-6" />
        </div>
      </section>
    </div>
  );
}
