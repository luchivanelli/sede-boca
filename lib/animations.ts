"use client";
import { useEffect, useRef } from "react";

export function useGsapFadeUp(selector?: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const els = ref.current?.querySelectorAll(selector || ".fade-up");
        if (!els?.length) return;
        gsap.fromTo(
          els,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
            },
          }
        );
      }, ref);
    };
    load();
    return () => ctx?.revert();
  }, [selector]);

  return ref;
}

export function useGsapHeroEntrance() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const load = async () => {
      const { gsap } = await import("gsap");
      ctx = gsap.context(() => {
        const els = ref.current?.querySelectorAll(".hero-el");
        if (!els?.length) return;
        gsap.fromTo(
          els,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }, ref);
    };
    load();
    return () => ctx?.revert();
  }, []);

  return ref;
}
