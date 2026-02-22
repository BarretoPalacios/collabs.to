import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextSplitAnimate() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const splitTitle = new SplitText(titleRef.current, {
          type: "chars,words,lines",
          wordsClass: "word-item",
          charsClass: "char-item",
        });

        // Ocultar todas las letras inicialmente
        gsap.set(splitTitle.chars, {
          opacity: 0.1,
          y: 50,
          color: "#BEDBFF",

        });

        // Animación PROGRESIVA por scroll
        gsap.to(splitTitle.chars, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
          color: "#fff",


          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top center",
            end: "bottom center",
            scrub: true, // ¡IMPORTANTE! Esto hace que siga el scroll
            markers: true, // Cambia a true para ver los puntos de trigger
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-auto bg-black flex flex-col justify-start items-center  px-8 "
    >

      <h1
        ref={titleRef}
        className="anton-regular uppercase font-black text-center max-w-5xl py-32 md:py-45" // sticky top-10
        style={{
          fontSize: "clamp(2rem, 6vw, 6rem)",
          lineHeight: "1.15",
        }}
      >
        🎯 Transformamos la autenticidad de los creadores 🌟 en conexiones
        genuinas 💫 que impulsan marcas 🚀 hacia nuevos horizontes 🌍. Donde las
        historias 📖 se convierten en resultados 📈 y los seguidores 👥 en
        comunidades comprometidas 🤝.
      </h1>
 
    </div>
  );
}
