"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-historia", label: "Nuestra Historia" },
  { href: "/proyecto-sede", label: "Proyecto Sede" },
  { href: "/jornadas-solidarias", label: "Jornadas Solidarias" },
  { href: "/viajes", label: "Viajes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090910]/95 backdrop-blur-md border-b border-[#1e1e2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-white font-bold text-base sm:text-xl tracking-wide uppercase leading-tight"
        >
          Arroyo Seco
          <span className="text-[#FFD700]"> es de Boca</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-600 tracking-widest uppercase transition-colors ${
                pathname === link.href
                  ? "text-[#FFD700]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Link href="/hacete-socio" className="btn-gold text-sm !hidden lg:!inline-flex">
            Hacete Socio
          </Link>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-[#090910]/98 backdrop-blur-md border-b border-[#1e1e2a] overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-700 tracking-widest uppercase py-3 border-b border-[#1e1e2a] transition-colors ${
                pathname === link.href ? "text-[#FFD700]" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/hacete-socio" className="btn-gold mt-4 w-full justify-center">
            Hacete Socio
          </Link>
        </div>
      </div>
    </nav>
  );
}
