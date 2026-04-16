# Arroyo Seco es de Boca — Sitio Web

Peña Xeneize de Arroyo Seco, Santa Fe.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (ScrollTrigger animations)
- **Lucide React** (icons)
- **Barlow Condensed** (Google Fonts)

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — Hero, identidad, proyecto sede, CTA, ubicación |
| `/nuestra-historia` | Historia — Timeline, pioneros, archivo de fotos, quote |
| `/proyecto-sede` | Proyecto Sede — Inauguración, crónica, placas, agradecimientos |
| `/jornadas-solidarias` | Jornadas — Galería solidaria, próximos eventos, CTA voluntario |
| `/viajes` | Viajes — Info, costos, próximos partidos, WhatsApp CTA |
| `/hacete-socio` | Formulario de membresía con beneficios exclusivos |

## Animaciones

Todas las páginas usan GSAP con ScrollTrigger:
- Hero entrance con stagger
- Fade-up en scroll para todas las secciones
- Scale reveal en galerías de imágenes
- Progress bars animadas (Proyecto Sede)
- Slide-in en tabla de partidos (Viajes)

## Diseño

- Paleta: Azul Boca `#003087` · Dorado `#FFD700` · Negro `#090910`
- Tipografía: **Barlow Condensed** (display) + **Barlow** (body)
- Noise texture overlay sutil
- Cards con bordes `#1e1e2a`
- Scrollbar personalizada en dorado
